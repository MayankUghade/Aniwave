import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

interface animeCardProps {
  image: string;
  name: string;
  episodes: number;
  score: string;
  type: string;
}

export default function AnimeCard({
  image,
  name,
  type,
  episodes,
  score,
}: animeCardProps) {
  return (
    <div className="rounded-sm flex flex-col gap-1 sm:w-[220px] sm:h-[380px] h-[350px] w-[170px]">
      <img
        className=" sm:h-[280px] sm:w-[220px]  w-[170px] h-[200px] rounded-sm"
        src={image}
        alt="animecover"
      />

      <div className="flex items-center sm:justify-between gap-2 sm:gap-0">
        <h1 className="text-gray-200 text-sm mt-1">{name}</h1>
        <h1 className="bg-black text-white rounded-lg px-2 py-1 text-sm">
          {type}
        </h1>
      </div>

      <div className="flex items-center gap-5">
        {/* no of episodes */}
        <div className="flex items-center gap-1 mt-1">
          <MdOutlineVideoLibrary className="text-red-500" size={22} />
          <h1 className="text-gray-200 terxt-sm">{episodes}</h1>
        </div>

        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" size={20} />
          <h1 className="text-gray-200 terxt-sm">{score}</h1>
        </div>
      </div>
    </div>
  );
}
