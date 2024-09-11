import { GetJoke } from "../../../../components/API/ApiManager"
import { notFound } from "next/navigation";
import LikeThisJokeButton from "../../../../components/util/LikeThisJokeButton";

export default async function JokePage({ params }: { params: { jokeId: string } }) {

    const data = await GetJoke(params.jokeId);
    if (!data.joke) {
        notFound();
    }

    return <div>
      {data.joke}
        <LikeThisJokeButton params={{
            jokeId: data.id
        }} />
      </div>
  }