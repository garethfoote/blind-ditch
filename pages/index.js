import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Intro } from "../components/Intro";
import { AnnouncementList } from "../components/AnnouncementList";
import { HomepageArticle } from "../components/HomepageArticle";
import { ProjectList } from "../components/ProjectList";
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
        <Nav />
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <div className="mb-md md:mb-2xl lg:mb-lg">
          <Intro />
        </div>

        <div className="mx-auto px-5 max-w-2xl md:max-w-3xl mb-lg">
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
            <Link href="/projects">
              <a className="button my-md relative top-4">
                <span className="title-accent px-8">View Full Archive</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="container mx-auto mb-xl p-5">
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
