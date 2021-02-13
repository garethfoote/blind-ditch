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
import { MemberProfiles } from "../../components/MemberProfile";
import classnames from "classnames";

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
                contextPos="br"
                maxWidth="4xl"
                image={page.featuredImage.node}
              />
            )}

            <div className="mx-auto px-5 mt-xl mb-md max-w-2xl relative">
              <div
                className={classnames({
                  "border-t border-black pt-md": page.featuredImage == null,
                })}
              >
                <Text content={page.content} />
              </div>
            </div>
          </section>
          <section className="mx-auto container px-10">
            <SectionTitle>People</SectionTitle>

            <MemberProfiles members={page.speakerFields.members} />
          </section>
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
