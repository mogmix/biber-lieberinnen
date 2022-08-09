import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="bgWrap">
        <Image
          alt="Beaver"
          src="/images/beaver.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Head>
        <script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=pt_283efe3b5aa306eee80dfd3c840356"></script>
        <title>Biber spotting!</title>
        <link rel="icon" href="/images/beaver_icon.png" />
      </Head>
      <main>
        <p className="bgText">
          Biber counter!
          <br />
          {/* Eine simple app, um Biber-Sichtungen zu zählen */}
        </p>

        {/* <Header title="" />
        <p className="description">
        </p>
        <code>Click</code> */}

        <div
          data-lyket-type="like"
          data-lyket-id="my-third-post"
          data-lyket-namespace="blog"
          data-lyket-template="twitter"
        ></div>
      </main>
    </div>
  );
}
