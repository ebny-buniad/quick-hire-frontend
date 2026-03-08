import React from "react";
import Image from "next/image";

import image1 from "../../../assets/partners/1.svg";
import image2 from "../../../assets/partners/2.svg";
import image3 from "../../../assets/partners/3.svg";
import image4 from "../../../assets/partners/4.svg";
import image5 from "../../../assets/partners/5.svg";
import image6 from "../../../assets/partners/6.svg";
import image7 from "../../../assets/partners/7.svg";

export default function Partners() {

  const partners = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <div className="container mx-auto py-12">
      
      <h4 className="text-xl text-gray-400 mb-8">
        Companies we helped grow
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
        {partners.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo}
              alt={`partner-${index}`}
              width={60}
              height={60}
              className="opacity-50 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

    </div>
  );
}