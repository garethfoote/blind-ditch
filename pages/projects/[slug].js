import { getOembed } from "../../lib/utils";
import classnames from "classnames";

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import ErrorPage from "next/error";
import { getProject, getProjects } from "../../lib/api";

import Layout from "../../components/layout";
import { Logo } from "../../components/Logo";
import Nav from "../../components/Nav/Nav";
import { ProjectPageTitle } from "../../components/ProjectPageTitle";
import ProjectDetails from "../../components/ProjectDetails";
import { Widgets } from "../../components/Widgets";

export default function Project({ project }) {
  const router = useRouter();

  const details = project.projectFields.details;
  const featuredImage = project.featuredImage?.node;
  const strippedDescription = project.content.replace(/(<([^>]+)>)/gi, "");

  const date = (
    <>
      <time dateTime={details.yearStart}>{details.yearStart}</time>
      {details.yearEnd && details.yearEnd != details.yearStart && " - "}
      {details.yearEnd && details.yearEnd != details.yearStart && (
        <time dateTime={details.yearEnd}>{details.yearEnd}</time>
      )}
    </>
  );
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>Blind Ditch - {project.title}</title>
            <meta name="description" content={strippedDescription} />
          </Head>
          <Nav />
          <Logo />
          <main>
            <article>
              <ProjectPageTitle title={project.title} date={date} />

              <div>
                {featuredImage && (
                  <div className="mx-auto px-5 my-lg md:container">
                    <div
                      style={{
                        maxHeight: "90vh",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        className="image-loading"
                        src={featuredImage.sourceUrl}
                        width={featuredImage.mediaDetails.width}
                        height={featuredImage.mediaDetails.height}
                        layout="responsive"
                        style={{ objectFit: "cover" }}
                        alt={featuredImage.altText || featuredImage.title}
                        priority={true}
                        loading={"eager"}
                      />
                    </div>
                  </div>
                )}

                <div className="mx-auto px-5 mt-xl mb-md max-w-2xl relative">
                  <div className="border-t border-black pt-md">
                    <div
                      className="text-base leading-7 sm:text-lg sm:leading-9"
                      dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                  </div>
                  <div className="mt-md lg:mt-0 lg:w-44 lg:absolute lg:top-0 lg:-right-48">
                    <ProjectDetails
                      title={project.title}
                      projectTypes={details.projectTypes}
                      location={details.location}
                      slug={project.slug}
                    />
                  </div>
                </div>

                <Widgets widgets={project.projectFields.flexibleContent} />
              </div>
            </article>
          </main>
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const allProjects = await getProjects();

  return {
    paths:
      allProjects.nodes.map((project) => `/projects/${project.slug}`) || [],
    fallback: "blocking",
  };
}

const getOembeds = async (flexContent, filter) => {
  return Promise.all(
    flexContent.map((item) => {
      if (item.fieldGroupName === filter) {
        return getOembed(item, item["oembed"]);
      } else {
        return item;
      }
    })
  );
};

export async function getStaticProps({ params }) {
  let data = await getProject(params.slug);

  try {
    data.project.projectFields.flexibleContent = await getOembeds(
      data.project.projectFields.flexibleContent,
      "Project_Projectfields_FlexibleContent_EmbedBlock"
    );
  } catch (err) {
    console.log("Error requesting oembeds", err);
  }

  return {
    props: {
      project: data.project,
    },
    revalidate: 1, // In seconds
  };
}
