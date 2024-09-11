'use client'
import { Button } from "@mui/material";
import { GetRandomJoke } from "../API/ApiManager";
import { useRouter } from 'next/navigation'

export default function RandomJokeButton() {
    const router = useRouter();
    async function handleClick () {
        const data = await GetRandomJoke();
        router.push(`/j/${data.id}`);
    }

    return (
        <Button sx={{position: "absolute", right: "10%", bottom: "10%"}} variant="outlined"
        onClick={handleClick}>
            Random Joke
            </Button>
    );
  }