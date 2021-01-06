import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Intro } from "../components/Intro";
import { AnnouncementList } from "../components/AnnouncementList";
import { HomepageArticle } from "../components/HomepageArticle";
import { ProjectList } from "../components/ProjectList";
import { SectionTitle } from "../components/SectionTitle";
import Nav from "../components/Nav/Nav";
import { Text } from "../components/Text";
import { getHomepage } from "../lib/api";
import Marquee from "react-double-marquee";

export default function Index({ hpProperties, preview }) {
  const announcements = hpProperties.page.homepageFields.connectedAnnouncements;
  const projects = hpProperties.page.homepageFields.connectedProjects;
  const article = hpProperties.page.homepageFields.connectedArticle;
  const testimonials = hpProperties.page.homepageFields.testimonials;

  return (
    <>
      <Layout preview={preview}>
        <Nav />
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Intro />
        <div className="mx-auto px-5 max-w-md sm:max-w-lg mt-md">
          {/* <div
            className="font-main text-md md:text-lg leading-7 text-center"
            dangerouslySetInnerHTML={{ __html: hpProperties.page.content }}
          /> */}
          <Text
            isCentred={true}
            makeLarge={true}
            content={hpProperties.page.content}
          />
        </div>

        <div className="w-full h-12 mt-lg mb-lg sm:mb-xl">
          <div className="h-full leading-12 whitespace-nowrap font-accent bg-mint relative px-lg border-t-2 border-b-2 border-black">
            <Marquee direction="left">
              <span className="h-12">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 30"
                >
                  <path
                    fill="#1F1F1F"
                    d="M0 30V6h5.714V0h11.429v6h-5.714v12h5.714v12H0zm22.857 0V6h5.714V0H40v6h-5.714v12H40v12H22.857z"
                  />
                </svg> */}
                Sad to leave Exeter (have discovered that all the best artists
                are hiding there secretly constructing a creative utopia in
                which art and ‘real-life’ switch roles intermittently).
              </span>
            </Marquee>
          </div>
        </div>

        {/* 
        <div className="max-w-2xl mx-auto px-5 pb-lg  pt-md lg:pb-0">
          <div className="lg:absolute lg:w-64 xl:w-80 right-10 top-10 h-auto">
            <PullQuote
              quote={
                "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
              }
            />
          </div>
        </div> */}
        {/* <hr className="page-break mb-md sm:mb-xl mt-sm" /> */}
        {/* <SectionTitle>Announcements</SectionTitle> */}

        <AnnouncementList announcements={announcements} />
        <hr className="invisible sm:visible page-break my-lg sm:my-xl" />

        <HomepageArticle page={article} />
        <hr className="page-break my-lg sm:my-xl" />

        <SectionTitle>Work</SectionTitle>
        <div className="text-center px-5 max-w-xl mx-auto">
          <Text
            isCentred={true}
            content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
          />
          <div className="text-center mb-xl">
            <Link href="/projects">
              <a className="button my-md relative top-4">
                <span className="title-accent px-8">View Full Archive</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="container mx-auto mb-xl p-5">
          <ProjectList projects={projects} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const hpProperties = await getHomepage();
  return {
    props: {
      hpProperties,
      preview,
    },
    revalidate: 1, // In seconds
  };
}
