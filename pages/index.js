import Head from "next/head";
import { ProjectList } from "../components/ProjectList";
import { HomepageArticle } from "../components/HomepageArticle";
import { Intro } from "../components/Intro";
import Layout from "../components/layout";
import { PageBreak } from "../components/PageBreak";

import { AnnouncementList } from "../components/AnnouncementList";

import { getHomepage } from "../lib/api";
import { Text } from "../components/Text";
import Container from "../components/container";

export default function Index({ hpProperties, preview }) {
  const announcements = hpProperties.page.homepageFields.connectedAnnouncements;
  const projects = hpProperties.page.homepageFields.connectedProjects;
  const mainArticle = hpProperties.page.homepageFields.connectedArticle;

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
        <h1>Work</h1>
        <ProjectList projects={projects} />
        <div
          className="container mx-auto"
          style={{ width: "300px", height: "150px" }}
        >
          {/* <HighlightBox html={"<h1>Hello, World!</h1>"} /> */}
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
