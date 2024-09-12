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
        <Button variant="outlined" sx={{color: "white", marginLeft: "auto", marginRight: "0", width: 190}}
        onClick={handleClick}>
            Open Random Joke
            </Button>
    );
  }