export const Tag = ({ text }: { text: string }): JSX.Element => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className="bg-blue-100 text-sm font-medium mr-2 px-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#111188" className="my-1  mr-0.5 pr-0.5 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
            <span className=" text-blue-600 ">
                {text}
            </span>
        </div>
    )
}