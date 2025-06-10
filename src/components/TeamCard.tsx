"use client";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";

interface TeamCardProps {
  name: string;
  designation: string;
  email: string;
  image: string;
}

const TeamCard = ({ name, designation, email, image }: TeamCardProps) => {
  return (
    <div className="w-full lg:w-[19.25rem] group mx-auto flex flex-col bg-background-100 border-2 border-background-100 rounded-[0.5rem]">
      {/* Image */}
      <div className="aspect-[344.53/272.00] overflow-hidden cursor-pointer w-full rounded-t-[0.5rem]">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-full rounded-t-[0.5rem] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="overflow-hidden">
        <div className="p-[0.57rem] lg:p-[1.56rem]">
          <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
            {name}
          </h2>
          <h3 className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
            {designation}
          </h3>
          <Link
            href={`mailto:${email}`}
            className="typography-regular text-text-500 font-medium flex items-center lg:gap-[0.28rem] cursor-pointer"
          >
            <CiMail />
            {email}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
