import SongList from "@/app/_components/SongList";
import Link from "next/link";

// TODO fetch songs here, pass in all other event data

export default function Event({ params }: { params: { id: string } }) {
    const id = params.id;
    const songs = [
        { title: "hey there delilah", artist: 'plain white t\'s', votes: 10 },
        { title: "thunderstruck", artist: 'ac/dc', votes: 5 },
        { title: "rockstar", artist: 'posty', votes: 50 },
    ]
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-4xl'>This is Event {params.id}</h1>
            <Link href={`/events/${id}/add`} className='w-24'>Add Song</Link>
            {/* <h1>{`Welcome to ${event.name} hosted by ${event.host}`}</h1> */}
            <SongList songs={songs}></SongList>
        </div>
    )
}