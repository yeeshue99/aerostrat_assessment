'use client'

import { GetJokesByHits } from "../../../components/Database/DatabaseManager";
import { useRouter } from 'next/navigation'
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material'

export default function RankingsPage () {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    GetJokesByHits().then((res) => setData(res));
  }, [])
  

    return <Box sx={{ transformOrigin: "50%, 0%", transform: "translate(-50%, -50%)", position: "absolute" }}>
    <TableContainer component={Paper}>
     <Table sx={{ minWidth: 1100, minHeight: 720 }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Number of Likes</TableCell>
           <TableCell>Joke</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row) => (
           <TableRow
             key={row.id}
             sx={{ '&:nth-child(odd) td, &:nth-child(odd) th': { backgroundColor: "#F2F6FD" } }}
           >
            <TableCell sx={{maxHeight: 32}}component="th" scope="row">{row.hits}</TableCell>
            <TableCell sx={{maxHeight: 32}}component="th" scope="row">
              {row.joke}<Button sx={{float: "right"}}variant="outlined"><Link href={`j/${row.id}`}>Permalink</Link></Button>
            </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 </Box>
}