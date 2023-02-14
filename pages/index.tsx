import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { client } from "@/src/lib/sanity.client";
import Service from "@/components/Service";

const inter = Inter({ subsets: ["latin"] });

const query = groq`*[_type == "service"]{
  _id,
  title, 
  image

}`;

export default function Home({ data }: { data: SanityDocument[] }) {
  return (
    <>
      {data.map((service) => (
        <Service service={service} />
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};
