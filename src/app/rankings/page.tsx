'use client'

import { GetJokesByHits } from "../../../components/Database/DatabaseManager";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E0B700",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function RankingsPage () {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    GetJokesByHits().then((res) => setData(res));
  }, [])
  

    return <Box sx={{width: "80%", display: "block", margin: "8px auto 0 auto"}}>
    <TableContainer component={Paper}>
     <Table sx={{ minWidth: 1100, minHeight: 720 }} aria-label="simple table">
       <TableHead>
         <TableRow >
           <StyledTableCell>Number of Likes</StyledTableCell>
           <StyledTableCell>Joke</StyledTableCell>
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