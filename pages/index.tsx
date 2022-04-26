import type { NextPage } from 'next';
import Head from "next/head";
import React from 'react';

import Wizard from '../components/wizard';

const Home: NextPage = () => (
  <>
    <Head>
      <title>GPG : GitHub Profile Generator</title>
      <meta name="title" content="GPG: Github Profile Generator" />
      <meta
        name="description"
        content="Best Profile Generator, Create your perfect GitHub Profile in the best possible way. Lots of features and tools included, all for free !"
      />
      <meta name="copyright" content="NurMaulidiyah" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gpg.maulidiyah-nur.github.io" />
      <meta
        property="og:title"
        content="GPG: Github Profile Generator"
      />
      <meta
        property="og:description"
        content="Best Profile Generator, Create your perfect GitHub Profile in the best possible way. Lots of features and tools included, all for free !"
      />
      <meta property="og:image" content="https://gpg.maulidiyah-nur.github.io/logo.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gpg.maulidiyah-nur.github.io" />
      <meta
        property="twitter:title"
        content="GPG: Github Profile Generator"
      />
      <meta
        property="twitter:description"
        content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
      />
      <meta
        property="twitter:image"
        content="https://gpg.maulidiyah-nur.github.io/logo.png"
      />
      <link rel="icon" href="/logo.png" />

      {/* Fonts in Head for Fast Serving */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;500;600&family=Source+Code+Pro:wght@300&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Wizard/>
  </>
);

export default Home;
