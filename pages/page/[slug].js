import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import { Logo } from "../../components/Logo";
import { MainImage } from "../../components/MainImage";
import { getPage, getPages } from "../../lib/api";
import Head from "next/head";

export default function Page({ page }) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>{page.title}</title>
          </Head>
          <Nav />
          <div className="h-12 mb-sm md:mb-md lg:mb-sm">
            <Logo />
          </div>
          <article className="mx-auto px-5 max-w-2xl">
            <div className="mx-auto px-5 max-w-2xl text-center pt-8">
              <h2 className="uppercase inline tracking-widest text-xl sm:text-2xl leading-10 sm:leading-tight">
                {page.title}
              </h2>
            </div>
            {page.featuredImage && (
              <MainImage
                contextPos="bl"
                maxWidth="4xl"
                image={page.featuredImage.node}
              />
            )}
            <div className="mx-auto px-5 my-xl max-w-2xl">
              <Text content={page.content} />
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPage(params.slug);
  return {
    props: {
      page: data.page,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getPages();
  return {
    paths:
      allPages.edges
        .filter((page) => {
          return page.node.slug !== "about";
        })
        .map(({ node }) => {
          return `/page/${node.slug}`;
        }) || [],
    fallback: false,
  };
}
