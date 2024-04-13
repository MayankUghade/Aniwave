"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import loader from "@/public/loader.gif";
import Image from "next/image";

export default function Allanime() {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
    setPageNumber(value);
  };

  useEffect(() => {
    const fetchAllAnime = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 4000));

        const response = await fetch(
          `https://api.jikan.moe/v4/anime?page=${pageNumber}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        console.log(responseData);

        setAnimeData(responseData.data);

        setLoading(false);
      } catch (error) {}
    };

    fetchAllAnime();
  }, [pageNumber]);

  // Function to change the color of a Material UI component
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976D2",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
  });

  return (
    <div className="p-1 md:p-5 flex flex-col gap-[30px] items-center justify-center bg-gray-900">
      <h1 className="font-semibold text-3xl text-center mt-5">
        Best <span className="text-orange-400">Anime</span> and{" "}
        <span className="text-orange-400">Movies</span> for you
      </h1>

      <div className="flex mr-auto">
        <h1 className="py-2 px-4 bg-orange-500 rounded-sm ">
          Page: {pageNumber}
        </h1>
      </div>

      <div className="flex items-center justify-center flex-wrap md:gap-10 gap-4">
        {loading ? (
          <div className=" h-[400px] flex items-center">
            <Image src={loader} alt="loading" className="w-[180px] h-[180px]" />
          </div>
        ) : (
          animeData.map((item: any) => (
            <div key={item.mal_id} className="flex items-center justify-center">
              <AnimeCard
                image={item.images.jpg.large_image_url}
                name={item.title}
                episodes={item.episodes}
                score={item.score}
                type={item.type}
              />
            </div>
          ))
        )}
      </div>

      <div className="mb-5">
        <ThemeProvider theme={theme}>
          <Stack spacing={1}>
            <Pagination
              count={25}
              page={pageNumber}
              onChange={handleChange}
              color="primary"
              size="large"
            />
          </Stack>
        </ThemeProvider>
      </div>
    </div>
  );
}
