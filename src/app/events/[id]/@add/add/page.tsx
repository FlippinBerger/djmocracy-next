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

    var classes = 'flex flex-col items-center justify-center p-4 bg-slate-700/75 border-2 rounded-md border-emerald-400 h-48 p-4';

    return (
        <div className={isAdd ? classes : classes + ' pointer-events-none'}>
            <input className='m-4 rounded-md text-black p-2 focus:outline focus:outline-2 focus:outline-emerald-400'></input>
            <span className='p-2 flex gap-2'>
                <button onClick={() => { router.back() }}>Back</button>
                <button onClick={() => { router.back() }}>Add</button>
            </span>
        </div>
    )
}