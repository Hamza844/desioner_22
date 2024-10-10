import React from "react";
// import '../../globals.css';
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/dictionary";
import UiStore from "./UiStore";
import { fetchMetaData } from "@/components/Utilts/Helper";

export async function generateMetadata() {
  const metaTag = await fetchMetaData("uiStore"); 
  return {
    title: metaTag.title,
    description: metaTag.description,
    openGraph: {
      images: [metaTag.image],
    },
  };
}
async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const direction = lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(lang);

  return (
    <>
      <UiStore lang={lang} parent={parent} direction={direction} />
    </>
  );
}

export default Page;
