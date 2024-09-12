'use client'
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

export default function MenuButton () {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
        const handleClose = () => {
        setAnchorEl(null);
    };

    return <div>
            <IconButton onClick={handleClick} size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <Link href="/j/random"><MenuItem onClick={handleClose}>Random Dad Joke</MenuItem></Link>
                <Link href="/rankings"><MenuItem onClick={handleClose}>Joke Rankings</MenuItem></Link>
            </Menu>
        </div>
    
}