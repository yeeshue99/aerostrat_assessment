'use client'

import { Button, Tooltip, useTheme } from '@mui/material';

export default function ShareTwitterButton ({ params }: { params: { jokeId: string } }) {
    const theme = useTheme();

    return <Tooltip title="Click to copy">
            <Button onClick={() => {navigator.clipboard.writeText(`https://aerostrat-djg.netlify.app/j/${params.jokeId}`)}}variant="outlined" sx={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px", width:"45%", borderColor: theme.palette.primary.main}}>
                Copy permalink to clipboard
            </Button>
        </Tooltip>
}