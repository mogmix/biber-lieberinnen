import { ClapButton, LikeButton, Provider } from "@lyket/react";
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
        <p className="bgText">Biber counter!</p>

        <Provider apiKey="pt_283efe3b5aa306eee80dfd3c840356">
          <ClapButton id="biber-counter" namespace="biber-lieberinnen">
            {({ handlePress, totalClaps, userClaps, isLoading }) => (
              <>
                <button onClick={handlePress} disabled={isLoading}>
                  <img src="/images/beaver_button.jpeg" alt="beaver-button" width="200" />
                </button>
                <div>Zähler: {totalClaps}</div>
                <div>Du hast {userClaps} Biber gezählt!</div>
              </>
            )}
          </ClapButton>
        </Provider>
      </main>
    </div>
  );
}
