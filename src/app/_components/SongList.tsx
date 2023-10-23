import { Song } from "../_lib/types"

type SongListParams = {
    songs: Song[]
}

export default function SongList(props: SongListParams) {
    return (
        <ul>
            {props.songs.map((song) => (
                <li>
                    {song.title}
                </li>
            ))}
        </ul>
    )
}