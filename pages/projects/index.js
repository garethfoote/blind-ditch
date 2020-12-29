import Layout from "../../components/layout";
import Container from "../../components/container";
import { ProjectList } from "../../components/ProjectList";
import Head from "next/head";

import { getAllProjects } from "../../lib/api";

export default function Index({ allProjects: { edges } }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Container>
          <h1>Work</h1>
          <ProjectList key={20} projects={edges} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  return {
    props: { allProjects },
    revalidate: 1, // In seconds
  };
}
