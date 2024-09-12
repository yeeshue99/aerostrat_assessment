const APPLICATION_HEADERS = {
    headers: {
        Accept: "application/json"
    }
}

export async function GetJoke(jokeId: string) {
    console.log("API: Get");
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + 'j/' + jokeId, {
        ...APPLICATION_HEADERS, 
        method: "GET",
    })

    return data.json()
  }

export async function GetRandomJoke() {
    console.log("API: Random");
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '', {
        ...APPLICATION_HEADERS, 
        method: "GET",
    })

    return data.json()
}

export async function SearchJokes(page: number, term: string) {
    console.log("API: Search");
    const params = new URLSearchParams({
        page: page.toString(), 
        limit: "30",
        term: term
    })

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'search?' + params, {
        ...APPLICATION_HEADERS, 
        method: "GET",
    })

    const data = await response.json();
    const max_pages = data.total_pages;

    for (let i = 1; i < max_pages; i++) {
        const new_response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'search?' + params, {
            ...APPLICATION_HEADERS, 
            method: "GET",
        })

        const new_data = await new_response.json();
        data.results.push(...new_data.results);
    }
    return data;
}