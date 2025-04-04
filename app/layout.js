import "@/public/assets/styles/global.css";
import "@/public/assets/styles/reset.css";
import "@/public/assets/styles/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";


export const metadata = {
  title: "Tour Guide",
  description: "Made for your travel geeks around the world!",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="robots" content="index, follow" />{" "}
          {/* SEO optimization */}
        </Head>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
   
  );
}
