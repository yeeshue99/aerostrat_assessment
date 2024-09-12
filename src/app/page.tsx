import { Box } from "@mui/system";
import HomeCarousel from "../../components/util/HomeCarousel";
import { List, ListItem, ListSubheader, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {

  return (
    <Box>
      <Box sx={{fontSize: "24px", width: "100%", height: 500, backgroundImage: "linear-gradient(to right, #0B00E2 , #00D8FF);"}}>
          <Typography sx={{fontSize: 32, color: "white", marginLeft: 8}}>
            Welcome to the Dad Joke Generator!<br />Here are some of our favorites:
          </Typography>
          <HomeCarousel />
        </Box>
        <Box sx={{height: 500, margin: "auto", width: "50%"}}>
          <Typography sx={{fontSize: 32, textAlign: "center"}}>
            This page was created by Michael Ngo for <Link href="https://aerostratsoftware.com/">Aerostrat Software</Link>
          </Typography>
          {/* <Typography sx={{fontSize: 24, textAlign: "left"}}>
            Technologies used:
          </Typography> */}
          <Box sx={{display: "flex", height: 100}}>
            <List sx={{width: "50%"}} subheader={
              <ListSubheader sx={{fontSize: 24}} component="div" id="nested-list-subheader">
                Technologies used:
              </ListSubheader>}>
              <ListItem>
                Frontend: Next.JS
              </ListItem>
              <ListItem>
                Database: Supabase
              </ListItem>
              <ListItem>
                API: 
                <Link href="https://icanhazdadjoke.com/">https://icanhazdadjoke.com/</Link>
              </ListItem>
              <ListItem>
                Deployment: Netlify
              </ListItem>
            </List>
            <List sx={{width: "50%", textAlign: "right"}} subheader={
              <ListSubheader sx={{fontSize: 24}} component="div" id="nested-list-subheader">
                Feature List
              </ListSubheader>}>
              <ListItem sx={{justifyContent:'flex-end'}}>
                Search entire dad joke database by search term
              </ListItem>
              <ListItem sx={{justifyContent:'flex-end'}}>
                Fetch random joke on demand using button on footer
              </ListItem>
              <ListItem sx={{justifyContent:'flex-end'}}>
                Open all jokes to their own dedicated page
              </ListItem>
              <ListItem sx={{justifyContent:'flex-end'}}>
                Like system to store how much people like certain jokes
              </ListItem>
              <ListItem sx={{justifyContent:'flex-end'}}>
                Ranking board to see what jokes are popular
              </ListItem>
              <ListItem sx={{justifyContent:'flex-end'}}>
                Direct share to Twitter
              </ListItem>
            </List>
          </Box>
        </Box>
    </Box>)
  
}
