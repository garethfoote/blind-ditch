import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import Link from "next/link";

import { getAllProjects } from "../../lib/api";

export default function Index({ allProjects: { edges } }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Container>
          {edges.map(({ node }) => {
            const details = node.projectFields.details;
            return (
              <article>
                <Link as={`/projects/${node.slug}`} href="/projects/[slug]">
                  <a
                    className="hover:underline"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />
                </Link>
                <div>
                  <time dateTime={details.yearStart}>{details.yearStart}</time>
                  {details.yearEnd && " - "}
                  {details.yearEnd && (
                    <time dateTime={details.yearEnd}>{details.yearEnd}</time>
                  )}
                </div>
                <div>{details.location}</div>
              </article>
            );
          })}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  console.log(allProjects);
  return {
    props: { allProjects },
  };
}
