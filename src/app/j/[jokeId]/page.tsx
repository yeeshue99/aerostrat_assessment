import { GetJoke } from "../../../../components/API/ApiManager"
import { notFound } from "next/navigation";
import LikeThisJokeButton from "../../../../components/util/LikeThisJokeButton";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CopyLinkButton from "../../../../components/util/CopyLinkButton";
import ShareTwitterButton from "../../../../components/util/ShareTwitterButton";

export default async function JokePage({ params }: { params: { jokeId: string } }) {

    const data = await GetJoke(params.jokeId);
    if (!data.joke) {
        notFound();
    }

    return <Box sx={{top: 0, transform: "translate(0%, -25%)", minWidth: "512px"}}>
      <Card variant="outlined" sx={{ minWidth: "512px" }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 32, textAlign: "center" }}>
            {data.joke}
          </Typography>
        </CardContent>
        <CardActions sx={{display: "flex", alignItems: "stretch"}}>
          <LikeThisJokeButton params={{
            jokeId: data.id
          }} />
          <CopyLinkButton params={{
            jokeId: data.id
          }} />
          <ShareTwitterButton params={{
            jokeId: data.id
          }} />
        </CardActions>
      </Card>
      </Box>
  }