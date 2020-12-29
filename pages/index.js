import Image from "next/image";

import Head from "next/head";
import Container from "../components/container";
import { ProjectList } from "../components/ProjectList";
import { HomepageArticle } from "../components/HomepageArticle";
import { Intro } from "../components/Intro";
import Layout from "../components/layout";
import { HighlightBox } from "../components/HighlightBox";
import { AnnouncementLink } from "../components/Announcements";

import {
  getAllPostsForHome,
  getAnnouncements,
  getAllProjects,
  getPages,
  getHomepage,
} from "../lib/api";

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
        <Container>
          <Intro />
          <div
            dangerouslySetInnerHTML={{ __html: hpProperties.page.content }}
          />
          <div>
            <h2>Announcements</h2>
            {announcements.length &&
              announcements.map((announcement, idx) => (
                <AnnouncementLink
                  key={idx}
                  slug={announcement.slug}
                  title={announcement.title}
                  details={announcement.announcementFields}
                />
              ))}
          </div>
          <hr />
          <h1>20 Years</h1>
          <HomepageArticle page={mainArticle} />
          <hr />
          <h1>Work</h1>
          <ProjectList projects={projects} />
          <div
            className="container mx-auto"
            style={{ width: "300px", height: "150px" }}
          >
            <HighlightBox html={"<h1>Hello, World!</h1>"} />
          </div>
        </Container>
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
