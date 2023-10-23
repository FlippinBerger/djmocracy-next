export default function Event({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>This is Event {params.id}</h1>
            {/* <SongList songs={event.songs}></SongList> */}
        </div>
    )
}