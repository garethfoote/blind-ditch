import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { ProjectList } from "../../components/ProjectList";
import { ProjectListExtra } from "../../components/ProjectListExtra";
import { Logo } from "../../components/Logo";

import { getProjects } from "../../lib/api";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

export default function Index({ projects, workshops }) {
  projects = [...projects].reverse();
  workshops = [...workshops].reverse();

  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch - Projects</title>
          <meta
            name="description"
            content="Our projects, workshops and consultancy work from 2001 to present"
          />
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

          <section className="mx-auto sm:mx-xl mb-xl">
            <SectionTitle>Consultancy & Workshops</SectionTitle>
            <div className=" mx-auto pb-5 pr-5 pl-2">
              <ProjectList projects={workshops} />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getProjects();
  const allWorkshops = await getProjects({ filterByWorkshops: true });
  return {
    props: {
      projects: allProjects.nodes,
      workshops: allWorkshops.nodes,
    },
    revalidate: 1, // In seconds
  };
}
