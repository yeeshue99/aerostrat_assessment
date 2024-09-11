'use client'

import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { GetJokesByHits } from "../../../../components/Database/DatabaseManager";
import { useRouter } from 'next/navigation'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/system";



export default async function RankingsPage () {
    const router = useRouter();
    const data = await GetJokesByHits();

    const columns: GridColDef<(typeof data)[number]>[] = [
        {
          field: 'hits',
          headerName: 'Number of Likes',
          width: 150,
          editable: false,
        },
        {
          field: 'joke',
          headerName: 'Joke',
          width: 1000,
          editable: true,
        }
      ];

    async function handleClick (jokeId: string) {
        router.push(`/j/${jokeId}`);
    }

    return <Box sx={{ height: 600, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      disableRowSelectionOnClick
    />
  </Box>
}