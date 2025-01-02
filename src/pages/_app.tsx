import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <title>Audran Wolfhards | Full Stack Developer</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Audran Wolfhards | Full Stack Developer" />
        <meta name="description" content="Interactive terminal-style portfolio showcasing full-stack development projects, skills, and experiences. Features modern web development, AI, and cloud solutions." />
        <meta name="keywords" content="Audran Wolfhards, Full Stack Developer, Web Development, React, Next.js, TypeScript, Node.js, Portfolio, Terminal, Interactive Portfolio" />
        <meta name="author" content="Audran Wolfhards" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://audran-terminal.vercel.app/" />
        <meta property="og:title" content="Audran Wolfhards | Interactive Terminal Portfolio" />
        <meta property="og:description" content="Explore my interactive terminal-style portfolio featuring full-stack development projects, skills, and experiences." />
        <meta property="og:image" content="https://audran-terminal.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://audran-terminal.vercel.app/" />
        <meta property="twitter:title" content="Audran Wolfhards | Interactive Terminal Portfolio" />
        <meta property="twitter:description" content="Explore my interactive terminal-style portfolio featuring full-stack development projects, skills, and experiences." />
        <meta property="twitter:image" content="https://audran-terminal.vercel.app/og-image.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Robots and Canonical */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://audran-terminal.vercel.app/" />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
