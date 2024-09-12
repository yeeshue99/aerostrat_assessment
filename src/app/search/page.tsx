'use client'
 
import { useSearchParams } from 'next/navigation'
import { SearchJokes } from '../../../components/API/ApiManager'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
      event: React.MouseEvent<HTMLButtonElement>,
      newPage: number,
    ) => void;
  }
  
  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

export default function SearchPage() {
    const [data, setData] = useState<any[]>([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [maxRows, setMaxRows] = useState(0);
    const [currentTerm, setCurrentTerm] = useState("")

    const searchParams = useSearchParams();

      const refresh = (newPage: number) => {
        console.log("refresh is being used");
        if (rowsPerPage * page >= data.length || searchParams.get("term") != currentTerm) {
            setCurrentTerm(searchParams.get("term")!)
            SearchJokes(
                newPage + 1,
              searchParams.get("term")!
            ).then((returnedValues) => {
                const changed: any[] = returnedValues.results.map((joke: string, id: string) => {
                  return { joke, id };
                });
                setMaxRows(returnedValues.total_jokes);
                if (searchParams.get("term") != currentTerm) {
                  setData(changed.map((item)=>item.joke))
                  return
                }
                const new_data: any[] = [...data]
                for (let i = 0; i < changed.length; i++) {
                    if (new_data.findIndex((p: any) => {return p.id === changed[i].id}) === -1) {
                        new_data.push(changed[i].joke);
                    }
                }
                setData(new_data);
            });
        }
      };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
        refresh(newPage);
      };
      const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    useEffect(() => {
        refresh(page);
    }, [searchParams])

    return <Box sx={{ transformOrigin: "50%, 0%", transform: "translate(-50%, -50%)", position: "absolute" }}>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1100, minHeight: 720 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Joke</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:nth-child(odd) td, &:nth-child(odd) th': { backgroundColor: "#F2F6FD" } }}
            >
              <TableCell sx={{maxHeight: 32}}component="th" scope="row">
                <Box sx={{maxHeight: 2, maxWidth: 800}}>{row.joke}</Box>
                <Button sx={{float: "right"}}variant="outlined"><Link href={`j/${row.id}`}>Permalink</Link></Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={maxRows}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  </Box>
}