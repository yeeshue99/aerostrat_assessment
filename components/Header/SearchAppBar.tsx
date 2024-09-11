import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

export default function SearchAppBar() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
            <Box sx={{paddingLeft: 1, width: "20%", height: "10%", position: "relative", borderRadius: 2, backgroundColor: "rgba(1,1,1,.15)", '&:hover': { backgroundColor: "rgba(1,1,1,.25)" }}}>
              <SearchIcon sx={{ height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',}} />
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{color: 'inherit',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: "1 1 1 0",
                    // vertical padding + font size from searchIcon
                    paddingLeft: 4,
                  },}}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
}