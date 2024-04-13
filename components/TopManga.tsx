"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

export default function TopManga() {
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchTopManga = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch("https://api.jikan.moe/v4/top/manga", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData = await response.json();

        setMangaData(responseData.data);
      } catch (error) {
        console.error("Error fetching top manga:", error);
      }
    };

    fetchTopManga();
  }, []);

  return (
    <div className="md:p-10 p-5 flex flex-col gap-5">
      <div>
        <h1 className="font-semibold text-3xl">
          Top <span className="text-orange-400">Manga</span>{" "}
        </h1>
        <p className="text-gray-400 mt-3">
          Here's a list of top manga series you must read
        </p>
      </div>

      <div className="flex items-center justify-center p-2">
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:p-5 flex lg:w-[1400px] w-screen"
        >
          <CarouselContent>
            {mangaData.map((item: any) => (
              <CarouselItem
                key={item.mal_id}
                className=" md:p-5 basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center"
              >
                <AnimeCard
                  image={item.images.jpg.large_image_url}
                  name={item.title}
                  episodes={item.episodes}
                  score={item.score}
                  type={item.type}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="lg:flex hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
