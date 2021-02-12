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
            <div className="mx-auto px-5 max-w-2xl text-center pt-8">
              <h2 className="uppercase inline tracking-widest text-xl sm:text-2xl leading-10 sm:leading-tight">
                {page.title}
              </h2>
            </div>
            {page.featuredImage && (
              <MainImage
                contextPos="br"
                maxWidth="4xl"
                image={page.featuredImage.node}
              />
            )}

            <div className="mx-auto px-5 mt-xl mb-md max-w-2xl relative">
              <div className="border-t border-black pt-md">
                <Text content={page.content} />
              </div>
            </div>
          </section>
          <div className="mx-auto container px-4">
            <SectionTitle>People</SectionTitle>

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
