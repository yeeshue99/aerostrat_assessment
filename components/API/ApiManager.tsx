const APPLICATION_HEADERS = {
    headers: {
        Accept: "application/json"
    }
}

export async function GetJoke(jokeId: string) {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + 'j/' + jokeId, {
        ...APPLICATION_HEADERS, 
        method: "GET",
    })

    return data.json()
  }

export async function GetRandomJoke() {
const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '', {
    ...APPLICATION_HEADERS, 
    method: "GET",
})

return data.json()
}