interface Props {
    currentRef?: React.RefObject<HTMLElement>

}

export default function Header({currentRef}: Props) {
    return (
        <header className="w-screen flex bg-gray-200 fixed" ref={currentRef}>
            <div className='flex h-14 ml-1.5'>
                <a href="/" className='m-auto w-12 h-12'>
                    <img
                        // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Company Logo"/>
                </a>
                <ul className='flex flex-row m-auto'>
                    <li>
                        <a
                            className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                            href="/">首页</a>
                    </li>
                    <li><a
                        className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4"
                        href="/subtitle">名人讲话</a></li>
                    <li><a href="/about"
                           className="hover:bg-blue-200 text-cyan-800  m-2 py-2 px-4">关于</a></li>
                </ul>
            </div>
        </header>
    );
}

