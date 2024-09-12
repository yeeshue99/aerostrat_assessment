'use client'

import { Button, Tooltip, useTheme } from '@mui/material';
import Link from 'next/link';


export default function ShareTwitterButton ({ params }: { params: { jokeId: string } }) {
    const theme = useTheme();
    
    return <Tooltip title="Share this on Twitter!">
            <Button variant="outlined" sx={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px", width:"45%", borderColor: theme.palette.primary.main }}>
                <Link href={`https://twitter.com/intent/tweet?url=https://aerostrat-djg.netlify.app%2Fj%2F${params.jokeId}&text=Check+out+this+%23dadjoke&via=AerostratSW`}>
                    Share on Twitter
                </Link>
            </Button>
        </Tooltip>
}