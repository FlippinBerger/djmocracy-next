import { Song } from "../_lib/types"
import SongRow from "./SongRow"

type SongListParams = {
    songs: Song[]
}

export default function SongList(props: SongListParams) {
    return (
        <ul>
            {props.songs.map((song) => (
                <SongRow key={`${song.title} ${song.artist}`} song={song} />
            ))}
        </ul>
    )
}