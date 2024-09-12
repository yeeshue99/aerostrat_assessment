'use client'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import { TouchJoke, GetJokeHits, LikeJoke} from "../Database/DatabaseManager"

export default function LikeThisJokeButton ({ params }: { params: { jokeId: string } }) {
    const theme = useTheme();
    
    const [isLiked, setIsLiked] = useState(false);
    const [jokeHits, setJokeHits] = useState(0);

    useEffect(() => {
        ( async () => {
            return TouchJoke(params.jokeId);
        })();
        ( async () => {
            return GetJokeHits(params.jokeId);
        })().then((result) => {if (result.hits === -1 ) return; setJokeHits(Math.max(result.hits, jokeHits))});
    }, [params.jokeId])

    function handleClick () {
        if (!isLiked) {
            ( async () => {
                return LikeJoke(params.jokeId, jokeHits);
            })().then(() => setJokeHits(jokeHits + 1));
        }
        setIsLiked(!isLiked);
    }

    return <Box border="1px solid" color={theme.palette.primary.main} sx={{bottom:0, right: 0, width:"20%", borderRadius: 4, padding: "0 4px 0 4px"}}>
                <Tooltip title="Like this joke to let others know you care!">
                    <Box sx={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px"}}>
                        <IconButton aria-label="like" color="primary" sx={{display: "inline-block", padding:"8px 0 0 0", margin: "0 auto 0 auto"}} onClick={handleClick}>
                            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <Typography sx={{margin: "0 auto 0 auto"}}>|</Typography>
                        <Typography sx={{width: "fit-content", height: "fit-content", margin: "0 auto 0 auto"}}>{jokeHits}</Typography>
                    </Box>
                </Tooltip>
            </Box>
}