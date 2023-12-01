import "@/app/globals.css";
import type { AppProps } from "next/app";
import { Baumans } from "next/font/google";

const baumans = Baumans({
  weight: ["400"],
  subsets: ["latin"],
});

const FontLoader = () => (
  // @ts-ignore
  <style jsx global>
    {`
      :root {
        --baumans-font: ${baumans.style.fontFamily};
      }
    `}
  </style>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontLoader />
      <Component {...pageProps} />
    </>
  );
}
