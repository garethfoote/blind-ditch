import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { ProjectList } from "../../components/ProjectList";
import { ProjectListExtra } from "../../components/ProjectListExtra";
import { Logo } from "../../components/Logo";

import { getProjects } from "../../lib/api";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

export default function Index({ allProjects: { nodes } }) {
  const projects = [...nodes].reverse();
  return (
    <>
      <Layout>
        <Head>
          <title>
            Blind Ditch - Archive of Projects, Workshops and Consultancy
          </title>
        </Head>
        <Nav />
        <Logo />
        <main>
          <section className="mx-auto sm:mx-xl mb-xl">
            <SectionTitle>Our Work</SectionTitle>
            <div className=" mx-auto pb-5 pr-5 pl-2">
              <ProjectList projects={projects} />
            </div>
          </section>
          {/* <section className="container mx-auto mb-xl">
            <SectionTitle>Workshops & Consultancy</SectionTitle>
            <div className="max-w-5xl mx-auto pb-5 pr-5 pl-2">
              <ProjectListExtra projects={[]} />
            </div>
          </section> */}
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getProjects();
  return {
    props: { allProjects },
    revalidate: 1, // In seconds
  };
}
