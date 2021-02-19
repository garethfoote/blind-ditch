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

          <div className="container mx-auto py-5 pr-5 pl-2">
            {/* <div> */}
            <article className="flex">
              <div className="relative w-36 sm:w-40 h-60 sm:h-48 bg-mint\ bg-tictactoe bg-10"></div>
              <div
                className={classnames("w-44 sm:w-64 h-60 sm:h-48 p-4 bg-mint")}
              >
                <div className="font-accent flex border-b border-black pb-2">
                  <h2 className="flex-grow text-xs uppercase leading-4 sm:leading-6">
                    TYPE
                  </h2>
                  <time className="opacity-75 text-base leading-4 sm:leading-6">
                    2007
                  </time>
                </div>
                <p className="text-sm sm:text-base mt-4">
                  Title or description of thing
                </p>
              </div>
            </article>
            {/* </div> */}
          </div>
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
