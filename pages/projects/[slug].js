import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import {
  getProject,
  getAllProjects,
  PROJECT_FC_TEXTBLOCK,
  PROJECT_FC_QUOTEBLOCK,
  PROJECT_FC_IMAGEBLOCK,
} from "../../lib/api";
import Head from "next/head";
import Image from "next/image";
import styles from "./Projects.module.css";
import { Widgets } from "../../components/Widgets";

// project.projectFields.flexibleContent.forEach((block) => {
//   // console.log(block.fieldGroupName);
//   if (block.fieldGroupName?.includes(PROJECT_FC_TEXTBLOCK)) {
//     console.log("Type = text");
//   }
//   if (block.fieldGroupName?.includes(PROJECT_FC_IMAGEBLOCK)) {
//     console.log("Type = image");
//   }
//   if (block.fieldGroupName?.includes(PROJECT_FC_QUOTEBLOCK)) {
//     console.log("Type = pull quote");
//   }
// });

export default function Project({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const oImgHeight = project.featuredImage?.node?.mediaDetails.height;
  const oImgWidth = project.featuredImage?.node?.mediaDetails.width;

  const maxImgWidth = 1000;
  let imgHeight = Math.round(oImgHeight * (maxImgWidth / oImgWidth));

  const details = project.projectFields.details;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <article>
            {" "}
            <Head>
              <title>{project.title}</title>
            </Head>
            <h1>{project.title}</h1>
            <div>
              <time dateTime={details.yearStart}>{details.yearStart}</time>
              {details.yearEnd && " - "}
              {details.yearEnd && (
                <time dateTime={details.yearEnd}>{details.yearEnd}</time>
              )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
            <Widgets widgets={project.projectFields.flexibleContent} />
            <div className={styles.imageConstrained}>
              {/* <Image
                src={project.featuredImage?.node?.sourceUrl}
                width={oImgWidth}
                height={oImgHeight}
              /> */}
            </div>
          </article>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getProject(params.slug);
  return {
    props: {
      project: data.project,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjects();
  return {
    paths: allProjects.edges.map(({ node }) => `/projects/${node.slug}`) || [],
    fallback: false,
  };
}
