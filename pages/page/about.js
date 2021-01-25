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
import Image from "next/image";
import { MemberProfiles } from "../../components/MemberProfile";

export default function About({ page }) {
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
          <section className="mx-auto px-5 max-w-2xl">
            <SectionTitle>{page.title}</SectionTitle>
            {page.featuredImage && (
              <MainImage
                contextPos="bl"
                maxWidth="4xl"
                image={page.featuredImage.node}
              />
            )}
            <div className="mx-auto my-xl max-w-2xl">
              <Text content={page.content} />
            </div>
          </section>
          <div className="mx-auto container px-4">
            <SectionTitle>People</SectionTitle>
            <div className="mx-auto max-w-2xl mb-xl">
              <Text
                content="We are a small group of artists who collaborate in different
              constellations to make live art & performance, street
              interventions & traveling art objects, often using digital media
              as a mode of making and participation. We have been producing this
              life-art mix of rural & experimental events with associate artists
              & local residents, visitors and remote participants from our Devon
              base since 2001. Find out more about our group ethos and how we
              arrived here..."
              />
            </div>

            <MemberProfiles members={page.speakerFields.members} />
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPage("about");
  return {
    props: {
      page: data.page,
    },
  };
}
