import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Intro } from "../components/Intro";
import { PageBreak } from "../components/PageBreak";
import { AnnouncementList } from "../components/AnnouncementList";
import { HomepageArticle } from "../components/HomepageArticle";
import { ProjectList } from "../components/ProjectList";
import { SectionTitle } from "../components/SectionTitle";
import { Text } from "../components/Text";
import Container from "../components/container";
import { getHomepage } from "../lib/api";

export default function Index({ hpProperties, preview }) {
  const announcements = hpProperties.page.homepageFields.connectedAnnouncements;
  const projects = hpProperties.page.homepageFields.connectedProjects;
  const mainArticle = hpProperties.page.homepageFields.connectedArticle;

  projects;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Intro />
        <Container max="xl">
          <Text
            isCentred={true}
            makeLarge={true}
            content={hpProperties.page.content}
          />
        </Container>
        <PageBreak spacing="xl" />
        <AnnouncementList announcements={announcements} />
        <PageBreak spacing="xl" />

        {/* <h1>20 Years</h1> */}
        <HomepageArticle page={mainArticle} />
        <PageBreak spacing="xl" />

        <SectionTitle>Work</SectionTitle>
        <div className="text-center px-5 max-w-xl mx-auto">
          <Text
            isCentred={true}
            content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
          />
          <div className="text-center mb-xl">
            <Link as={`/projects`} href="/projects">
              <a className="button my-md relative top-4">
                <span className="title-accent px-8">View Full Archive</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="container mx-auto mb-xl p-5">
          <ProjectList projects={projects} />
        </div>
        {/* <div
          className="container mx-auto"
          style={{ width: "300px", height: "150px" }}
        >
          <HighlightBox html={"<h1>Hello, World!</h1>"} />
        </div> */}
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
