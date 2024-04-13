"use client";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";

import Link from "next/link";
import { useEffect, useState } from "react";

interface AnimeDetails {
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  title: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  popularity: number;
  season: string;
  rating: number;
  title_japanese: string;
  duration: number;
  score: number;
  synopsis: string;
  background: string;
}

export default function Page({ params }: { params: { animeId: number } }) {
  const [animeDetails, setAnimeDetails] = useState<AnimeDetails>();

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${params.animeId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data.data);

        setAnimeDetails(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnimeDetails();
  }, []);

  return (
    <div className="md:p-10 p-5 flex flex-col items-center gap-5">
      {/* Button to go back */}
      <Link href="/" className="flex gap-1 items-center text-red-500 mr-auto">
        <IoMdArrowBack className="w-[20px] h-[20px]" />
        <h1>Go back</h1>
      </Link>

      <div className="flex md:flex-row flex-col gap-3 bg-gray-800 lg:w-[960px] w-full rounded-sm p-5">
        {/* This is the anime display picture */}

        {animeDetails && animeDetails.images && animeDetails.images.jpg && (
          <div className="flex md:flex-col flex-row gap-2">
            <img
              src={animeDetails.images.jpg.large_image_url}
              alt="anime"
              className="md:w-[250px] md:h-[400px] w-[180px] h-[230px]"
            />

            <div className="flex flex-col gap-1 p-3 md:text-lg text-sm">
              <h1>
                <span className="text-orange-400 md:font-semibold">Type:</span>{" "}
                {animeDetails?.type}
              </h1>
              <h1>
                <span className="text-orange-400 font-semibold">Source:</span>{" "}
                {animeDetails?.source}
              </h1>
              <h1>
                <span className="text-orange-400 font-semibold">Rating:</span>{" "}
                {animeDetails?.rating}
              </h1>
              <h1>
                <span className="text-orange-400 font-semibold">Stauts:</span>{" "}
                {animeDetails?.status}
              </h1>
              <h1>
                <span className="text-orange-400 font-semibold">
                  Popuarity:
                </span>
                {animeDetails?.popularity}
              </h1>
              <h1>
                <span className="text-orange-400 font-semibold">Seasons:</span>{" "}
                {animeDetails?.season}
              </h1>
            </div>
          </div>
        )}

        <div className="flex gap-5 flex-col md:w-[70%]">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl"> {animeDetails?.title}</h1>
            <h1>{animeDetails?.title_japanese}</h1>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <IoMdTime className="w-[30px] h-[30px] text-red-500" />
              <h1>{animeDetails?.duration}</h1>
            </div>

            <div className="flex items-center gap-1">
              <FaStar className="w-[28px] h-[28px] text-yellow-500" />
              <h1>{animeDetails?.score}/10</h1>
            </div>

            <div className="flex items-center gap-1">
              <MdVideoLibrary className="w-[28px] h-[28px] text-green-500" />
              <h1>{animeDetails?.episodes}</h1>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1>
              <span className="text-orange-500 font-semibold">Synopsis</span>:{" "}
              {animeDetails?.synopsis}
            </h1>

            <h1 className="md:flex hidden">
              <span className="text-orange-500 font-semibold">Background</span>:{" "}
              {animeDetails?.background}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
