import { Song, Vote } from "../_lib/types"

type VoterProps = {
    song: Song,
    vote: Vote,
};

export default function Voter(props: VoterProps) {
    return (
        <div className='flex flex-col w-8 items-center'>
            <p className='text-2xl'>^</p>
            <p>{props.song.votes}</p>
            <p>v</p>
        </div>
    )
}