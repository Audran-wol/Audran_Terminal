import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Audran Wolfhards",
                "url": "https://audran-terminal.vercel.app/",
                "sameAs": [
                  "https://github.com/Audran-wol",
                  "https://www.linkedin.com/in/audran-wolfhards-7aab3321b/",
                  "https://twitter.com/WolfhardsA"
                ],
                "jobTitle": "Full Stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelancer"
                },
                "description": "Full Stack Developer specializing in modern web development, AI solutions, and cloud technologies."
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
