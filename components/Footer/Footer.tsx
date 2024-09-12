import { AppBar, Toolbar } from "@mui/material";
import RandomJokeButton from "../util/RandomJokeButton";

export default function Footer () {
    return <AppBar sx={{top:"auto", bottom: 0, backgroundImage: "linear-gradient(to right, #00D8FF, #0B00E2)"}}>
        <Toolbar sx={{paddingRight: 0, color: "black"}}>
            2024 Michael Ngo
            <RandomJokeButton />
        </Toolbar>
        
    </AppBar>
}