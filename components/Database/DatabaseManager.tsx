'use client'
import { createClient } from '@supabase/supabase-js'
import { GetJoke } from '../API/ApiManager';

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY);

export async function TouchJoke(jokeId: string) {
    const data = await supabase
    .from("jokes")
    .select("joke_id")
    .eq("joke_id", jokeId).then();

    if (data.data?.length == 0) {
        await supabase
        .from('jokes')
        .insert([
            { joke_id: jokeId },
        ])
        .select().then()

        await supabase
        .from('hits')
        .insert([
            { joke_id: jokeId, hits: 0 },
        ])
        .select().then()
    }

}

export async function GetJokeHits(jokeId: string) {
    const data = await supabase
    .from('hits')
    .select('hits')
    .eq("joke_id", jokeId).then();

    if (data?.data?.length ?? 0 > 0) {
        return data!.data![0]
    }
    else {
        return {hits: 0};
    }
}

export async function GetJokesByHits() {
    const data = await supabase
    .from('hits')
    .select('joke_id, hits')
    .order('hits', {ascending: false})
    .limit(10).then();

    let returnData: any[] = await Promise.all(data?.data!.map((item) => GetJoke(item.joke_id)));
    for (let i = 0; i < returnData.length; i++) {
        returnData[i].hits = data?.data![i].hits;
    }

    console.log(returnData);

    return returnData;
}

export async function LikeJoke(jokeId: string, previousHits: number) {
    await supabase
    .from('hits')
    .update({ 'hits': previousHits + 1 })
    .eq('joke_id', jokeId)
    .select().then();
}