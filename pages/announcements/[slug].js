import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAnnouncement, getAnnouncements } from "../../lib/api";
import Head from "next/head";
import { Intro } from "../../components/Intro";

export default function Project({ announcement }) {
  const router = useRouter();

  if (!router.isFallback && !announcement?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const details = announcement.announcementFields;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <article>
            {" "}
            <Head>
              <title>{announcement.title}</title>
            </Head>
            <Intro />
            <h2>{details.type}</h2>
            {details.date && (
              <time dateTime={details.date}>{details.date}</time>
            )}
            <h1>{announcement.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: announcement.content }} />
          </article>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getAnnouncement(params.slug);
  return {
    props: {
      announcement: data.announcement,
    },
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  const allAnnouncements = await getAnnouncements();
  return {
    paths:
      allAnnouncements.edges.map(({ node }) => `/announcements/${node.slug}`) ||
      [],
    fallback: false,
  };
}
