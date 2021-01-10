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
        <Nav />
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <div className="mb-md md:mb-2xl lg:mb-lg">
          <Logo />
        </div>

        <div className="container mx-auto mb-xl p-5">
          <SectionTitle>Work</SectionTitle>
          <div className="text-center px-5 max-w-xl mx-auto">
            <Text
              isCentred={true}
              content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
            />
          </div>
          <div className="container mx-auto py-5 pr-5 pl-2">
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
