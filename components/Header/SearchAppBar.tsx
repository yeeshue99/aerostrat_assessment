'use client'
import { AppBar, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

import Link from 'next/link'
import MenuButton from "./MenuButton";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchAppBar() {
  const router = useRouter();
  
  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/search/?term=${e.target.value}`)
      e.preventDefault();
    }
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            <Box sx={{paddingLeft: 1, width: "20%", height: "10%", position: "relative", }}>
              {/* <SearchIcon sx={{ height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',}} /> */}
              <TextField
                variant="outlined"
                placeholder="Search…"
                sx={{color: 'white',
                  width: '100%', height: "80%", 
                  '& .MuiInputBase-input': {
                    padding: "1 1 1 0",
                    color: "white",
                    // vertical padding + font size from searchIcon
                    paddingLeft: 4,
                  },}}
                slotProps={{input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{color: "white"}}/>
                    </InputAdornment>
                  ),
                }}}
                onKeyDown={onKeyPress}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
}