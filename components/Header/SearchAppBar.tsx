'use client'
import { AppBar, IconButton, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
import MenuButton from "./MenuButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchAppBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  
  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/search/?term=${e.target.value}`)
      e.preventDefault();
    }
  }

  const handleOnChange = (e: any) => {
    setSearchTerm(e.target.value);
  }

  return (
        <AppBar position="static" sx={{backgroundImage: "linear-gradient(to right, #0B00E2 , #00D8FF)"}}>
          <Toolbar>
            <MenuButton />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ marginRight: 4, display: { xs: 'none', sm: 'block' } }}
              >
            <Link href="/">
                Aerostrat Dad Joke Generator
            </Link>
              </Typography>
            <Box sx={{paddingLeft: 1, width: "20%", height: "10%", position: "relative", input: {color: "white",
              "&::placeholder": {    // <----- Add this.
            opacity: 1, color: "white"
         }
            }}}>
              {/* <SearchIcon sx={{ height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',}} /> */}
              <TextField
                variant="outlined"
                placeholder="Search…"
                slotProps={{input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton sx={{width: 24, height: 24}}>
                        <Link style={{width: 24, height: 24}} href={`/search/?term=${searchTerm}`}>
                          <SearchIcon sx={{color: "white"}}/>
                        </Link>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}}
                onKeyDown={onKeyPress}
                onChange={handleOnChange}
              />
            </Box>
          </Toolbar>
        </AppBar>
  );
}