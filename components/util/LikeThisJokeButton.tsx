'use client'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { TouchJoke, GetJokeHits, LikeJoke} from "../Database/DatabaseManager"

export default function LikeThisJokeButton ({ params }: { params: { jokeId: string } }) {
    const [isLiked, setIsLiked] = useState(false);
    const [jokeHits, setJokeHits] = useState(0);

    useEffect(() => {
        ( async () => {
            return TouchJoke(params.jokeId);
        })();
        ( async () => {
            return GetJokeHits(params.jokeId);
        })().then((result) => {setJokeHits(result.hits)});
    }, [params.jokeId])

    function handleClick () {
        if (!isLiked) {
            ( async () => {
                return LikeJoke(params.jokeId, jokeHits);
            })().then(() => setJokeHits(jokeHits + 1));
        }
        setIsLiked(!isLiked);
    }

    return <Box border="1px solid" color="primary"sx={{bottom:0, right: 0, width: "fit-content", height: "fit-content", borderRadius: 2, padding: "0 4px 0 4px"}}>
                <Tooltip title="Like this joke to let others know you care!">
                    <Box sx={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px"}}>
                        <IconButton aria-label="like" color="primary" sx={{display: "inline-block", padding:"4px 0 0 0", margin: "auto"}}onClick={handleClick}>
                            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <Typography sx={{margin:"auto"}}>|</Typography>
                        <Typography sx={{margin:"auto", width: "fit-content", height: "fit-content"}}>{jokeHits}</Typography>
                    </Box>
                </Tooltip>
            </Box>
}