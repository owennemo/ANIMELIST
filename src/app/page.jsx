import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 2)

  return (
    <>
      <section>
        <Header title="Most Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Recommendation" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
