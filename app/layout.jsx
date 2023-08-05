import '../src/styles/index.css';
import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Igor Mitryakov',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="icon" type="image/png" href="../resources/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
