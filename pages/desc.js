import {withRouter} from 'next/router'
import Link from 'next/link'
// import axios from 'axios'

const Desc = ({router}) => {
    return (
        <> 
            <div>{router.query.name}</div>
            <Link href='/'><a>返回首页</a></Link>
        </>
    )
}

// Desc.getInitialProps = async () => {
//     const promise = new Promise((resolve) => {
//         axios('请求地址').then(
//             (res) => {
                
//             }
//         )
//     })

//     return await promise
// }

export default withRouter(Desc)