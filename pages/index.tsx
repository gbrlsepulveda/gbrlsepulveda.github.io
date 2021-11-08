import Head from 'next/head';

import Header from 'components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Sepulveda | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Software Engineer with a solid 10+ years of experience and currently working at DevRank.</p>

      <ul id="social">
        <li className="social-item">
          <a
            title="LinkedIn"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gbrlsepulveda/"
            className="social-link"
            target="_blank"
          >
            <span className="icon-linkedin"></span>
            Linkedin
          </a>
        </li>

        <li className="social-item">
          <a
            title="Github"
            rel="noreferrer"
            href="https://github.com/gbrlsepulveda"
            className="social-link"
            target="_blank"
          >
            <span className="icon-github"></span>
            Github
          </a>
        </li>

        <li className="social-item">
          <a
            title="Twitter"
            rel="noreferrer"
            href="https://twitter.com/gbrlsepulveda"
            className="social-link"
            target="_blank"
          >
            <span className="icon-twitter"></span>
            Twiiter
          </a>
        </li>

        <li className="social-item">
          <a
            title="E-mail: gabrielsepulveda07@gmail.com"
            href="mailto:gabrielsepulveda07@gmail.com"
            className="social-link"
          >
            <span className="icon-mail"></span>
            Gmail
          </a>
        </li>
      </ul>
    </>
  );
}
