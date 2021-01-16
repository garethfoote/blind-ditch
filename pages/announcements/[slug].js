import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Nav from "../../components/Nav/Nav";
import { SectionTitle } from "../../components/SectionTitle";
import { MainImage } from "../../components/MainImage";
import Layout from "../../components/layout";
import { getAnnouncement, getAnnouncements } from "../../lib/api";
import Head from "next/head";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text";

export default function Project({ announcement }) {
  const router = useRouter();

  if (!router.isFallback && !announcement?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const details = announcement.announcementFields;

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>{announcement.title}</title>
          </Head>
          <Nav />
          <div className="flex items-center justify-center h-20 mb-sm md:h-20 md:mb-md">
            <Logo />
          </div>
          <article className="mx-auto px-5 max-w-2xl text-center">
            {/* <span className="mx-auto py-1 px-2 title-accent text-xs md:text-base bg-yellow">
              Announcements
            </span> */}
            <SectionTitle>{announcement.title}</SectionTitle>
            {announcement.featuredImage && (
              <MainImage
                contextPos="bl"
                maxWidth="4xl"
                image={announcement.featuredImage.node}
              />
            )}
            <div class="mx-auto px-5 my-xl max-w-2xl">
              <Text content={announcement.content} />
            </div>
          </article>
        </>
      )}
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
