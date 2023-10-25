'use client'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation"

export default function AddSongModal() {
    const router = useRouter();
    const pathname = usePathname();

    const [isAdd, setIsAdd] = useState(false);

    useEffect(() => {
        setIsAdd(pathname.endsWith('add'));
    }, [pathname])

    var classes = 'flex flex-col items-center justify-center bg-black h-24 p-4';

    return (
        <div className={isAdd ? classes : classes + ' pointer-events-none'}>
            <h1>This is a modal to add songs to the event</h1>
            <button onClick={() => { router.back() }}>Back</button>
        </div>
    )
}