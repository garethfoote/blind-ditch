import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getPage, getPages } from "../../lib/api";
import Head from "next/head";

export default function Page({ page }) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <article>
            {" "}
            <Head>
              <title>{page.title}</title>
            </Head>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </article>
        )}
      </Container>
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
