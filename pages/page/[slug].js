import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Text } from "../../components/Text";
import { Logo } from "../../components/Logo";
import { MainImage } from "../../components/MainImage";
import { SectionTitle } from "../../components/SectionTitle";
import { getPage, getPages } from "../../lib/api";
import Head from "next/head";
import classnames from "classnames";

import consolere from "console-remote-client";

const console_re = consolere.connect({
  server: "https://console.re",
  channel: "8ffe-dfbf-be7e",
});

export default function Page({ page }) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
    console.re.log("Page 404");
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>Blind Ditch - {page.title}</title>
          </Head>
          <Nav />
          <Logo />
          <main className="mx-auto px-0 max-w-2xl">
            <SectionTitle>{page.title}</SectionTitle>

            {page.featuredImage && (
              <MainImage
                contextPos="bl"
                maxWidth="4xl"
                image={page.featuredImage.node}
              />
            )}

            <article className="mx-auto px-5 mt-xl mb-md max-w-2xl relative">
              <div
                className={classnames({
                  "border-t border-black pt-md": page.featuredImage == null,
                })}
              >
                <Text content={page.content} />
              </div>
            </article>
          </main>
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
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  const allPages = await getPages();

  const paths =
    allPages.edges
      .filter((page) => {
        return page.node.slug !== "about";
      })
      .map(({ node }) => {
        return `/page/${node.slug}`;
      }) || [];

  console.re.log("Page paths", paths);

  return {
    paths,
    fallback: false,
  };
}
