import { Box } from "@mui/system";
import { GetJoke } from "../../../../components/API/ApiManager"
import { notFound } from "next/navigation";

export default async function JokePage({ params }: { params: { jokeId: string } }) {

    const data = await GetJoke(params.jokeId);
    if (!data.joke) {
        notFound();
    }

    return <div>
      {data.joke}
      </div>
  }