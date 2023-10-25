import { Song } from "../_lib/types"

type SongRowProps = {
    song: Song,
}

export default function SongRow({ song }: SongRowProps) {
    return (
        <li key={`${song.title} ${song.artist}`}>
            <div className='flex gap-2'>
                <p>{song.votes}</p>
                <h1>{song.title}</h1>
                <h1>{song.artist}</h1>
            </div>
        </li>
    )
}