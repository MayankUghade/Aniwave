import Image from "next/image";
import anime from "@/public/anime.jpg";

export default function Featured() {
  return (
    <div className="md:p-10 p-5 gap-8 flex flex-col md:flex-row items-center justify-center md:h-[600px]">
      {/* This is the is the image */}
      <div className="md:w-[50%]">
        <Image className="rounded-lg" src={anime} alt="anime" />
      </div>

      {/* This is the text */}
      <div className="md:w-[50%] flex flex-col gap-3">
        <h1 className="md:text-6xl sm:text-3xl text-3xl font-bold">
          <span className="">
            Explore the World of <span className="text-orange-400">Anime</span>
          </span>
        </h1>

        <p className="text-gray-400 md:text-2xl text-sm">
          Discover the latest anime series, Explore popular manga, and find your
          favourite character.
        </p>

        <div>
          <form className="flex space-x-2">
            <input
              className="max-w-lg flex-1 rounde-lg bg-transparent border-[1px] border-gray-500 rounded-sm md:p-3 p-2 focus:outline-none"
              placeholder="Search for Anime or Manga"
            />
            <button className="bg-orange-500 px-3 rounded-sm" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
