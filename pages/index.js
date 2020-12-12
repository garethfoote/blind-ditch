import Head from "next/head";
import Container from "../components/container";
import { ProjectList } from "../components/ProjectList";
import Intro from "../components/intro";
import Layout from "../components/layout";
import {
  getAllPostsForHome,
  getAnnouncements,
  getAllProjects,
} from "../lib/api";
import { CMS_NAME } from "../lib/constants";

import { AnnouncementLink } from "../components/Announcements";

export default function Index({
  allPosts,
  allProjects,
  allAnnouncements,
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
          <h1>Work</h1>
          <ProjectList key={"test"} projects={projects} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allAnnouncements = await getAnnouncements();
  const allProjects = await getAllProjects();

  return {
    props: { allPosts, allAnnouncements, allProjects, preview },
  };
}
