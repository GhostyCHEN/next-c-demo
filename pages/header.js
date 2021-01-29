// import Head from 'next/head'
import HeaderB from '../components/headerB'
import '../styles/globals.css'
import {Button} from 'antd'

//按需加载的babel插件
//babel-plugin-import

function Header(){
    return (
        <>
            <HeaderB>
                <title>head标题</title>
                <mate charSet='utf-8' />
            </HeaderB>
            <div>
                header.com
                <div><Button>antd按钮</Button></div>
            </div>
        </>
    )
}

export default Header