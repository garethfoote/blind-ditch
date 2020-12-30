import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Container from "../../components/container";
import { Intro } from "../../components/Intro";
import { ProjectList } from "../../components/ProjectList";
// import { HomepageArticle } from "../../components/HomepageArticle";
// import { AnnouncementLink } from "../../components/Announcements";

import { SectionTitle } from "../../components/SectionTitle";
import { ProjectPageTitle } from "../../components/ProjectPageTitle";
import { Text } from "../../components/Text";
import { MainImage } from "../../components/MainImage";
import { HighlightBox } from "../../components/HighlightBox";
import { PullQuote } from "../../components/PullQuote";
import { GalleryOne } from "../../components/GalleryOne";
import { GalleryTwo } from "../../components/GalleryTwo";
import { GalleryCarousel } from "../../components/GalleryCarousel";
import { PageBreak } from "../../components/PageBreak";
import { OEmbed } from "../../components/OEmbed";

export default function Components() {
  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>

        <Intro />

        <ProjectPageTitle
          title="This City's Centre"
          date="2008 - 2012"
          types={[{ name: "crowd sourced" }, { name: "public realm" }]}
          description={
            "A <strong>digital triptych</strong> for Exeter... and cities everywhere. "
          }
        />
        <MainImage
          contextPos="bl"
          context="Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit "
          maxWidth="4xl"
          image={{
            mediaDetails: {
              height: 1707,
              width: 2560,
            },
            sourceUrl:
              "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
            altText: "",
          }}
        />

        <Text
          makeLarge={true}
          content="Based on interviews with 40 city centre residents about the views from their windows, this dispersed, digital portrait of Exeter uses a range of social and participatory art practice, to gently explore the meeting points of public and private space."
        />
        <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
        {/* 
          <HighlightBox
          html={
            "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
          }
        /> */}
        <PullQuote
          quote={
            "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
          }
        />
        <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
        <SectionTitle>Projects</SectionTitle>
        <MainImage
          contextPos="br"
          context="Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit "
          image={{
            mediaDetails: {
              height: 1707,
              width: 2560,
            },
            sourceUrl:
              "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
            altText: "",
          }}
        />
        <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />

        <MainImage
          contextPos="bl"
          maxWidth="4xl"
          context="Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit "
          image={{
            mediaDetails: {
              height: 1707,
              width: 2560,
            },
            sourceUrl:
              "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
            altText: "",
          }}
        />
        <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
        <div className="max-w-2xl mx-auto my-lg">
          <Image
            className="image-loading"
            src="http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg"
            width={860}
            height={860 * (1707 / 2560)}
            layout="responsive"
          />
        </div>
        <PageBreak />
        <SectionTitle>Windows</SectionTitle>
        <Text
          makeLarge={true}
          content="Based on interviews with 40 city centre residents about the views from their windows, this dispersed, digital portrait of Exeter uses a range of social and participatory art practice, to gently explore the meeting points of public and private space."
        />

        <GalleryTwo
          width={860}
          images={[
            {
              mediaDetails: {
                height: 1920,
                width: 1152,
              },
              sourceUrl:
                "http://garfoo.dreamhosters.com/wp-content/uploads/2020/12/touching_ground_by_batjorge-d7ez2hj.jpg",
              altText: "",
            },
            {
              mediaDetails: {
                height: 1707,
                width: 2560,
              },
              sourceUrl:
                "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
              altText: "",
            },
          ]}
        />
        <GalleryOne
          width={860}
          image={{
            mediaDetails: {
              height: 1080,
              width: 1440,
            },
            sourceUrl:
              "http://garfoo.dreamhosters.com/wp-content/uploads/2020/12/volk1.jpg",
            altText: "",
          }}
        />
        <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
        <OEmbed
          oembedDetails={{
            html:
              '<iframe width="200" height="113" src="https://www.youtube.com/embed/5dJeC6IgBsk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          }}
        />
        <div className="max-w-4xl max-w-3xl max-w-xl my-md my-xl my-2xl">
          Abritrary div that makes sure classes (e.g <code>.max-w-4xl</code> and{" "}
          <code>.my-md</code>) are not purged.
        </div>
        {/* 
        <div className="max-w-6xl mx-auto my-xl">
          <GalleryCarousel
            height={500}
            images={[
              {
                mediaDetails: {
                  height: 1920,
                  width: 1152,
                },
                sourceUrl:
                  "http://garfoo.dreamhosters.com/wp-content/uploads/2020/12/touching_ground_by_batjorge-d7ez2hj.jpg",
                altText: "",
              },
              {
                mediaDetails: {
                  height: 1707,
                  width: 2560,
                },
                sourceUrl:
                  "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
                altText: "",
              },
              {
                mediaDetails: {
                  height: 1920,
                  width: 1152,
                },
                sourceUrl:
                  "http://garfoo.dreamhosters.com/wp-content/uploads/2020/12/touching_ground_by_batjorge-d7ez2hj.jpg",
                altText: "",
              },
              {
                mediaDetails: {
                  height: 1707,
                  width: 2560,
                },
                sourceUrl:
                  "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
                altText: "",
              },
            ]}
          />
        </div> */}
      </Layout>
    </>
  );
}
