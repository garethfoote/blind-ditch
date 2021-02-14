import { extract } from "oembed-parser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import ErrorPage from "next/error";
import { getProject, getAllProjects } from "../../lib/api";

import Layout from "../../components/layout";
import { Logo } from "../../components/Logo";
import Nav from "../../components/Nav/Nav";
import { ProjectPageTitle } from "../../components/ProjectPageTitle";
import ProjectDetails from "../../components/ProjectDetails";
import { Widgets } from "../../components/Widgets";

export default function Project({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const details = project.projectFields.details;
  const featuredImage = project.featuredImage?.node;

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
            <title>{project.title}</title>
          </Head>
          <div className="relative">
            <div className="relative z-40">
              <Nav />
            </div>
            <Logo />
            <article className="px-2 sm:px-5">
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
                      projectTypes={details.projectTypes}
                      location={details.location}
                      date={date}
                    />
                  </div>
                </div>

                <Widgets widgets={project.projectFields.flexibleContent} />
              </div>
            </article>
          </div>
        </>
      )}
    </Layout>
  );
}

const oembedOptions = {
  "soundcloud.com": { maxheight: 81 },
  "youtube.com": {},
};

const getOembed = async (item) => {
  const fieldName = "project_Projectfields_FlexibleContent_EmbedBlock";

  if (item.fieldGroupName === fieldName) {
    const options = oembedOptions[new URL(item.oembed).hostname];
    item.oembedDetails = await extract(item.oembed, options);
    return Promise.resolve(item);
  } else {
    return Promise.resolve(item);
  }
};

const getOEmbeds = async (flexContent) => {
  return Promise.all(flexContent.map((item) => getOembed(item)));
};

export async function getStaticProps({ params }) {
  let data = await getProject(params.slug);

  data.project.projectFields.flexibleContent = await getOEmbeds(
    data.project.projectFields.flexibleContent
  );

  return {
    props: {
      project: data.project,
    },
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjects();
  return {
    paths:
      allProjects.nodes.map((project) => `/projects/${project.slug}`) || [],
    fallback: false,
  };
}
