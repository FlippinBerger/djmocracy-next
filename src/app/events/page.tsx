import Link from "next/link";
import { Event } from "../_lib/types"

export default function Events() {
    const events: Event[] = [
        { id: "1", name: 'The bash', host: "Bill", playlist: [], location: 'MI' },
        { id: "10", name: 'Beerio Kart', host: "Charly", playlist: [], location: 'MI' },
        { id: "24", name: 'Berger\'s Buck Bash', host: "Chris Sr", playlist: [], location: 'MI' }
    ];

    return (
        <div>
            <h1>Here are some events near you:</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <Link href={`/events/${event.id}`}>{event.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}