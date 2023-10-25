import { Song, Vote } from "../_lib/types"
import Voter from "./Voter"

type SongRowProps = {
    song: Song,
}

export default function SongRow({ song }: SongRowProps) {
    return (
        <li key={`${song.title} ${song.artist}`}
            className='p-2'
        >
            <div className='flex gap-6 items-center'>
                {/* <p className='w-8 self-center'>{song.votes}</p> */}
                <Voter song={song} vote={Vote.None}></Voter>
                <div className='flex flex-col'>
                    <h1 className='text-2xl'>{song.title}</h1>
                    <h1>{song.artist}</h1>
                </div>
            </div>
        </li>
    )
}