import Coursess from "@/components/coursespage/Coursess";
import Batchess from "@/components/home/batchess/Batchess";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import ContactUsSection from "@/components/sysContact/ContactUsSection";
import Head from "next/head";
import React from "react";
import { metadata } from "./layoutMetadata";

const Courses = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Icons */}
        {Object.entries(metadata.icons).map(([key, value]) => (
          <link key={key} rel={key === "icon" ? "icon" : key} href={value[0]} />
        ))}

        {/* Keywords */}
        <meta name="keywords" content={metadata.keywords.join(", ")} />

        {/* Authors */}
        <meta
          name="author"
          content={metadata.authors.map((author) => author.name).join(", ")}
        />

        {/* Creator */}
        <meta
          name="creator"
          content={metadata.creator.map((creator) => creator.name).join(", ")}
        />

        {/* OpenGraph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        <meta
          name="twitter:image:alt"
          content={metadata.twitter.images[0].alt}
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.teqspoc.com/courses" />

        {/* Other Metadata */}
        <meta name="robots" content={metadata.robots} />
        <meta name="language" content={metadata.language} />
        <meta name="rating" content={metadata.rating} />
        <meta name="viewport" content={metadata.viewport} />
      </Head>
      <MainSec
        url="/assets/contact/contacting.jpg"
        parent="Courses"
        title="Courses"
      />
      <Coursess />
      <Batchess />
      <ContactUsSection />
    </>
  );
};

export default Courses;
