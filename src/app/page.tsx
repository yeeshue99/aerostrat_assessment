import { Box } from "@mui/system";
import HomeCarousel from "../../components/util/HomeCarousel";
import { Typography } from "@mui/material";

export default function Home() {

  return <Box sx={{top: 0, transform: "translate(0%, -25%)"}}>
    <Typography sx={{fontSize: 32}}>
      Welcome to the Dad Joke Generator!<br />Here are some of our favorites:
    </Typography>
    <HomeCarousel />
  </Box>
}
