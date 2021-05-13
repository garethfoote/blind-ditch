import { getHomepage } from "../lib/api";

import Head from "next/head";
import classnames from "classnames";
import Layout from "../components/layout";
import { Logo } from "../components/Logo";
import { AnnouncementList } from "../components/AnnouncementList";
import { HomepageArticle } from "../components/HomepageArticle";
import { ProjectList } from "../components/ProjectList";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";
import SVGFilters from "../components/SVGFilters";
import { HomeHeader } from "../components/HomeHeader";
import Nav from "../components/Nav/Nav";
import { Text } from "../components/Text";

export default function Index({ homepageFields, content, preview }) {
  const announcements = homepageFields.connectedAnnouncements;
  const projects = [...homepageFields.connectedProjects].reverse();
  const article = homepageFields.connectedArticle;
  const testimonials = homepageFields.testimonials;

  return (
    <>
      <SVGFilters />
      <Layout preview={preview}>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Nav />
        <Logo />
        <main>
          <header className="mx-auto px-8 sm:px-5 mb-xl max-w-2xl md:max-w-3xl xl:max-w-4xl ">
            <HomeHeader intro={content} testimonials={testimonials} />
          </header>

          <hr className="page-break mt-lg" />

          <section>
            <AnnouncementList announcements={announcements} />
          </section>

          <hr className="page-break mb-xl md:mb-2xl" />

          <section>
            <HomepageArticle page={article} />
          </section>

          <hr className="page-break my-lg sm:my-xl" />

          <section>
            <SectionTitle>Our Work</SectionTitle>

            <div className="text-center px-5 max-w-xl mx-auto">
              <Text
                isCentred={true}
                content={homepageFields.ourWorkIntroText}
              />
              <div className="text-center mb-xl">
                <div className="mb-md mt-lg">
                  <Button href="/projects">
                    <span className="px-8">View Full Archive</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mx-auto sm:mx-xl pb-10 pr-5 pl-2">
              <ProjectList projects={projects} />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const hpProperties = await getHomepage();
  const homepageFields = hpProperties.page.homepageFields;
  const content = hpProperties.page.content;
  return {
    props: {
      homepageFields,
      content,
      preview,
    },
    revalidate: 1, // In seconds
  };
}
