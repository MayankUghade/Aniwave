import Allanime from "@/components/Allanime";
import Featured from "@/components/Featured";
import TopAnime from "@/components/TopAnime";
import TopManga from "@/components/TopManga";

export default function Home() {
  return (
    <div>
      <Featured />
      <TopAnime />
      <TopManga />
      <Allanime />
    </div>
  );
}
