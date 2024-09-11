import { Box } from "@mui/system";
import { GetJoke } from "../../../../components/API/ApiManager"

export default async function JokePage({ params }: { params: { jokeId: string } }) {

    const data = await GetJoke(params.jokeId);
    console.log(data);

    return <Box sx={{position: "absolute", left: "50%", 
              top: "50%", transform: "translate(-50%, -50%)", fontSize: "24px"}}>
      {data.joke}
      </Box>
  }