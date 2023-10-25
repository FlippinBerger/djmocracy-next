export default function Layout(props: {
    children: React.ReactNode
    add: React.ReactNode
}) {
    return (
        <div className='relative w-3/4 h-full'>
            {props.children}
            <div className='absolute m-auto left-0 right-0 top-32 bottom-0'>
                {props.add}
            </div>
        </div>
    )
}