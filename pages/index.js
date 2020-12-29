import Image from "next/image";

import Head from "next/head";
import Container from "../components/container";
import { ProjectList } from "../components/ProjectList";
import { HomepageArticle } from "../components/HomepageArticle";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { HighlightBox } from "../components/HighlightBox";
import { AnnouncementLink } from "../components/Announcements";

import {
  getAllPostsForHome,
  getAnnouncements,
  getAllProjects,
  getPages,
} from "../lib/api";

export default function Index({
  allProjects,
  allAnnouncements,
  hpPages,
  preview,
}) {
  let announcements = allAnnouncements.edges;
  let projects = allProjects.edges;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Container>
          <Intro />
          <div>
            <h2>Announcements</h2>
            {announcements.length &&
              announcements.map(({ node }, idx) => (
                <AnnouncementLink
                  key={idx}
                  slug={node.slug}
                  title={node.title}
                  details={node.announcementFields}
                />
              ))}
          </div>
          <hr />
          <h1>20 Years</h1>
          <HomepageArticle page={hpPages[0]} />
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
  const allPosts = await getAllPostsForHome(preview);
  const allAnnouncements = await getAnnouncements();
  const allProjects = await getAllProjects();
  let hpPages = await getPages();

  hpPages = hpPages.edges.filter(({ node }) => {
    return node.pageFields.displayOnHomepage;
  });

  return {
    props: { allPosts, allAnnouncements, allProjects, hpPages, preview },
    revalidate: 1, // In seconds
  };
}
