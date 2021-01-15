import Head from "next/head";
import Layout from "../components/layout";
import { Logo } from "../components/Logo";
import { AnnouncementList } from "../components/AnnouncementList";
import { HomepageArticle } from "../components/HomepageArticle";
import { ProjectList } from "../components/ProjectList";
import { Button } from "../components/Button";

import { SectionTitle } from "../components/SectionTitle";
import { HomeHeader } from "../components/HomeHeader";
import Nav from "../components/Nav/Nav";
import { Text } from "../components/Text";
import { getHomepage } from "../lib/api";

export default function Index({ hpProperties, preview }) {
  const announcements = hpProperties.page.homepageFields.connectedAnnouncements;
  const projects = hpProperties.page.homepageFields.connectedProjects;
  const article = hpProperties.page.homepageFields.connectedArticle;
  const testimonials = hpProperties.page.homepageFields.testimonials;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Nav />
        <div className="flex items-center justify-center h-20 mb-sm md:h-28 md:mb-md lg:h-24 lg:mb-sm">
          <Logo />
        </div>

        <div className="mx-auto px-5 mb-lg max-w-2xl md:max-w-3xl lg:max-w-4xl ">
          <HomeHeader intro={hpProperties.page.content} />
        </div>

        <hr className="page-break my-lg sm:mb-xl" />

        <AnnouncementList announcements={announcements} />

        <hr className="page-break my-lg sm:my-xl" />

        <HomepageArticle page={article} />

        <hr className="page-break my-lg sm:my-xl" />

        <SectionTitle>Work</SectionTitle>

        <div className="text-center px-5 max-w-xl mx-auto">
          <Text
            isCentred={true}
            content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
          />
          <div className="text-center mb-xl">
            <div className="mb-md mt-lg">
              <Button href="/projects">
                <span className="px-8">View Full Archive</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-5 pr-5 pl-2">
          <ProjectList projects={projects} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const hpProperties = await getHomepage();
  return {
    props: {
      hpProperties,
      preview,
    },
    revalidate: 1, // In seconds
  };
}
