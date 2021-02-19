import { getAllProjects } from "../../lib/api";
import classnames from "classnames";

import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo";

import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

import { Documents } from "../../components/Documents";

export default function Index() {
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
          <SectionTitle>Documents</SectionTitle>
          <div className="text-center px-5 max-w-xl mx-auto">
            <Text
              isCentred={true}
              content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
            />
          </div>

          <Documents />
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const allProjects = await getAllProjects();
//   return {
//     props: { allProjects },
//     revalidate: 1, // In seconds
//   };
// }
