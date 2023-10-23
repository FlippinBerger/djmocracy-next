import SongList from "@/app/_components/SongList";

export default function Event({ params }: { params: { id: string } }) {
    const songs = [
        { title: "hey there delilah", artist: 'plain white t\'s', votes: 10 },
        { title: "thunderstruck", artist: 'ac/dc', votes: 5 },
        { title: "rockstar", artist: 'posty', votes: 50 },
    ]
    return (
        <div>
            <h1>This is Event {params.id}</h1>
            <SongList songs={songs}></SongList>
        </div>
    )
}