import Layout from "../../components/layout";
import Container from "../../components/container";
import { ProjectList } from "../../components/ProjectList";
import { Intro } from "../../components/Intro";
import Head from "next/head";

import { getAllProjects } from "../../lib/api";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

export default function Index({ allProjects: { nodes } }) {
  return (
    <>
      <Layout>
        <Intro />
        <Head>
          <title>Projects</title>
        </Head>
        <div className="container mx-auto mb-xl p-5">
          <SectionTitle>Work</SectionTitle>
          <div className="text-center px-5 max-w-xl mx-auto">
            <Text
              isCentred={true}
              content="Short description or reminder of the type of work you ususally embark on."
            />
          </div>
          <ProjectList key={20} projects={nodes} />
        </div>
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
