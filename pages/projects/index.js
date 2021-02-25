import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { ProjectList } from "../../components/ProjectList";
import { Logo } from "../../components/Logo";

import { getAllProjects } from "../../lib/api";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

export default function Index({ allProjects: { nodes } }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Nav />
        <div className="h-12 mb-sm md:mb-md lg:mb-sm">
          <Logo />
        </div>
        <div className="container mx-auto mb-xl">
          <SectionTitle>Work</SectionTitle>
          <div className="max-w-5xl mx-auto py-5 pr-5 pl-2">
            <ProjectList projects={nodes} />
          </div>
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
