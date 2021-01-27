// import Head from 'next/head'
import HeaderB from '../components/headerB'

function Header(){
    return (
        <>
            <HeaderB>
                <title>head标题</title>
                <mate charSet='utf-8' />
            </HeaderB>
            <div>
                header.com
            </div>
        </>
    )
}

export default Header