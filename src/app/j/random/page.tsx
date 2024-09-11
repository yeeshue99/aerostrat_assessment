'use client'
import { GetRandomJoke } from '../../../../components/API/ApiManager';
import { useRouter } from 'next/navigation'

export default function RandomPage() {
    const router = useRouter();
    GetRandomJoke().then((res) => router.push(`/j/${res.id}`));
}