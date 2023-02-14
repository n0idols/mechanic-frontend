import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";

import { client } from "@/src/lib/sanity.client";

const builder = imageUrlBuilder(client);
export default function Service({ service }) {
  return (
    <div>
      <h1>{service.title}</h1>
      <Image
        src={builder.image(service.image).url()}
        width={300}
        height={300}
        alt={service.title}
      />
    </div>
  );
}
