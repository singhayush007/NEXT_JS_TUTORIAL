import React from "react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
  <div>
    I am About Page.
    <Image
        src="https://tech.sparkfabrik.com/images/content/nextjs/nextjs-logo.jpg"
        alt="Next.js Logo"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
  </div>
  );
};

export default page;
