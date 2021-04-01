import { getDocuments } from "../../lib/api";
import { getOembed } from "../../lib/utils";

import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo";
import { SectionTitle } from "../../components/SectionTitle";
import { Documents } from "../../components/Documents";
import { Button } from "../../components/Button";

export default function Index({ allDocs: { nodes } }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <div className="px-xs md:px-lg mx-auto mb-xl">
          <div className="flex gap-4 py-md">
            <div className="flex-none w-24 px-sm">
              <a className="button-shadow">
                <span className="text-xs relative z-10 title-accent p-2 bg-mint border border-black border-solid">
                  ← Back
                </span>
              </a>
            </div>

            <div className="flex gap-4 max-w-2xl mx-auto">
              <div>
                <svg
                  width="70"
                  height="96"
                  viewBox="0 0 70 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69 95H1V1H49.5714L69 21.4V95Z"
                    stroke="#1F1F1F"
                    strokeWidth="2"
                  />
                  <path d="M49 22V1L69 22H49Z" fill="#1F1F1F" />
                </svg>
              </div>
              <p>
                A collection of documents and media produced over the course of
                our 20+ years working with x, y & z.
              </p>
            </div>
          </div>
          <Documents documents={nodes} />
        </div>
      </Layout>
    </>
  );
}

async function getOembeds(allDocs) {
  const promises = allDocs.map(async (doc) => {
    const type = doc.documentsFields.type.toLowerCase();
    if (["video", "sound"].indexOf(type) >= 0) {
      const url = doc.documentsFields[doc.documentsFields.type.toLowerCase()];
      doc.documentsFields = await getOembed(doc.documentsFields, url);
      return doc;
    } else {
      return doc;
    }
  });
  return Promise.all(promises);
}

export async function getStaticProps() {
  const allDocs = await getDocuments();

  allDocs.nodes = await getOembeds(allDocs.nodes);

  return {
    props: { allDocs },
    revalidate: 1, // In seconds
  };
}
