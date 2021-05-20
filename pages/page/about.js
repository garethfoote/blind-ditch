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

export default function About({ about, contact }) {
  const router = useRouter();

  if (!router.isFallback && !about?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>Blind Ditch - {about.title}</title>
          </Head>
          <Nav />
          <Logo />
          <main>
            <section className="mx-auto px-0 max-w-2xl">
              <SectionTitle>{about.title}</SectionTitle>

              {about.featuredImage && (
                <MainImage
                  contextPos="br"
                  maxWidth="4xl"
                  image={about.featuredImage.node}
                />
              )}

              <div className="mx-auto px-5 mt-xl mb-md max-w-2xl relative">
                <div
                  className={classnames({
                    "border-t border-black pt-md": about.featuredImage == null,
                  })}
                >
                  <Text content={about.content} />
                </div>
              </div>
            </section>
            <section id="contact" className="mx-auto container px-5">
              <div className="mt-2xl mb-2xl">
                <SectionTitle>Contact Us</SectionTitle>
              </div>

              <div className="mx-auto px-5 mt-xl mb-md max-w-2xl relative">
                <div>
                  <Text content={contact?.content} />
                  <hr className="page-break-thin my-lg" />

                  <Text content="Or subscribe to our newsletter below:" />
                </div>
              </div>
            </section>
            <section id="people" className="mx-auto container px-5">
              <div className="mt-xl mb-2xl">
                <SectionTitle>People</SectionTitle>
              </div>

              <MemberProfiles members={about.speakerFields.members} />
            </section>
          </main>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const about = await getPage("about");
  const contact = await getPage("contact");
  return {
    props: {
      about: about.page,
      contact: contact.page,
    },
    revalidate: 1, // In seconds
  };
}
