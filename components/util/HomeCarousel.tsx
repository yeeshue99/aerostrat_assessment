'use client'
import { Button, Box, Card, CardContent, CardActions, Typography } from "@mui/material"
import CACHED_JOKES from "../../public/CACHED_JOKES"
import Carousel from 'react-material-ui-carousel'
import { useRouter } from 'next/navigation'

export default function HomeCarousel () {
    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Item(props: any)
    {
        return (
            <Card variant="outlined" sx={{width: "80%", height: "128px", margin: "auto"}}>
                <CardContent>
                    <Typography >
                        {props.item.joke}
                    </Typography >
                </CardContent>

                <CardActions>

                    <Button variant="outlined" sx={{bottom: 0}} onClick={() => handleClick(props.item.id)}>
                        Go to joke page
                    </Button>
                </CardActions>
            </Card>
        )
    }

    async function handleClick (jokeId: string) {
        router.push(`/j/${jokeId}`);
    }

return <Box sx={{width: "100%", height: "128px", marginTop: 4}}>
            <Carousel>
                {CACHED_JOKES.map((joke, i) => <Item key={i} item={joke}/>)}
            </Carousel>
        </Box>
}

