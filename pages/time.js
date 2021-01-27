import React,{useState} from 'react'
import dynamic from 'next/dynamic'

//自定义组件的懒加载
const One = dynamic(import('../components/one'))

// import moment from 'moment'

// function Time(){
//     const [nowTime,setTime] = useState(Date.now())

//     const changeTime = () => {
//         setTime(moment(Date.now()).format())
//     }

//     return (
//         <>
//             <div>显示时间为：{nowTime}</div>
//             <div><button onClick={changeTime}>改变时间格式</button></div>
//         </>
//     )
// }

// 外部库懒加载形式
function Time(){
    const [nowTime,setTime] = useState(Date.now())

    const changeTime = async () => {
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }

    return (
        <>
            <div>显示时间为：{nowTime}</div>
            <One />
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}

export default Time