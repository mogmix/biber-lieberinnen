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
      </main>
    </div>
  );
}
