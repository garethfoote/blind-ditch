import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import { Logo } from "../../components/Logo";
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
          <div className="flex items-center justify-center h-20 mb-sm md:h-28 md:mb-md lg:h-24 lg:mb-sm">
            <Logo />
          </div>
          <article className="mx-auto px-5 max-w-2xl">
            <SectionTitle>{page.title}</SectionTitle>
            <Text content={page.content} />
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
      allPages.edges.map(({ node }) => {
        return `/page/${node.slug}`;
      }) || [],
    fallback: false,
  };
}
