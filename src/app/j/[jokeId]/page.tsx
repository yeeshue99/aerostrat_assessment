import { GetJoke } from "../../../../components/API/ApiManager"
import { notFound } from "next/navigation";
import LikeThisJokeButton from "../../../../components/util/LikeThisJokeButton";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CopyLinkButton from "../../../../components/util/CopyLinkButton";
import ShareTwitterButton from "../../../../components/util/ShareTwitterButton";
import { useState } from "react";

export default function JokePage({ params }: { params: { jokeId: string } }) {
  const [data, setData] = useState<any>({});

    GetJoke(params.jokeId).then((res) => {
      if (!res.joke) {
          notFound();
      }
      setData(res);
    });

    return <Box sx={{width: "512px", display: "block", margin: "10% auto 0 auto"}}>
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