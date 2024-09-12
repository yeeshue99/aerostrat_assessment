'use client'
import { Button, Box, Card, CardContent, CardActions, Typography, IconButton, Tooltip } from "@mui/material"
import { CACHED_JOKES_1, CACHED_JOKES_2, CACHED_JOKES_3} from "../../public/CACHED_JOKES"
import Carousel from 'react-material-ui-carousel'
import { useRouter } from 'next/navigation'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function HomeCarousel () {
    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Item(props: any)
    {
        return (
            <Box sx={{display: "flex"}}>
                <Card variant="outlined" sx={{width: 400, height: 200, margin: "auto"}}>
                <CardContent>
                    <Typography sx={{textAlign: "center", fontSize: 20}}>
                        {CACHED_JOKES_1[props.index].joke}
                    </Typography>
                </CardContent>

                <CardActions>

                    <Button variant="outlined" sx={{ bottom: 8, margin: "auto", position: "absolute"}} onClick={() => handleClick(CACHED_JOKES_1[props.index].id)}>
                        Go to joke page
                    </Button>

                    <Tooltip title="Copy joke to clipboard">
                        <IconButton sx={{ bottom: 4, margin: "auto", position: "absolute", transform: "translate(340px, 0)"}} onClick={() => handleCopy(CACHED_JOKES_1[props.index].joke)}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            <Card variant="outlined" sx={{width: 400, height: 200, margin: "auto"}}>
                <CardContent>
                    <Typography sx={{textAlign: "center", fontSize: 20}}>
                        {CACHED_JOKES_2[props.index].joke}
                    </Typography>
                </CardContent>

                <CardActions>

                    <Button variant="outlined" sx={{ bottom: 8, margin: "auto", position: "absolute"}} onClick={() => handleClick(CACHED_JOKES_2[props.index].id)}>
                        Go to joke page
                    </Button>

                    <Tooltip title="Copy joke to clipboard">
                        <IconButton sx={{ bottom: 4, margin: "auto", position: "absolute", transform: "translate(340px, 0)"}} onClick={() => handleCopy(CACHED_JOKES_2[props.index].joke)}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            <Card variant="outlined" sx={{width: 400, height: 200, margin: "auto"}}>
                <CardContent>
                    <Typography sx={{textAlign: "center", fontSize: 20}}>
                        {CACHED_JOKES_3[props.index].joke}
                    </Typography>
                </CardContent>

                <CardActions>

                    <Button variant="outlined" sx={{ bottom: 8, margin: "auto", position: "absolute"}} onClick={() => handleClick(CACHED_JOKES_3[props.index].id)}>
                        Go to joke page
                    </Button>
                    <Tooltip title="Copy joke to clipboard">
                        <IconButton sx={{ bottom: 4, margin: "auto", position: "absolute", transform: "translate(340px, 0)"}} onClick={() => handleCopy(CACHED_JOKES_3[props.index].joke)}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            </Box>
        )
    }

    function handleClick (jokeId: string) {
        router.push(`/j/${jokeId}`);
    }

    function handleCopy (joke: string) {
        navigator.clipboard.writeText(joke)
    }

return <Box sx={{width: "100%", height: "128px", marginTop: 8}}>
            <Carousel animation="slide" duration={1000}>
                {CACHED_JOKES_1.map((_, i) => <Item key={i} index={i}/>)}
            </Carousel>
        </Box>
}

