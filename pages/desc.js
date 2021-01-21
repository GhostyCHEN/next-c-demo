import {withRouter} from 'next/router'
import Link from 'next/link'

const Desc = ({router}) => {
    return (
        <> 
            <div>{router.query.name}</div>
            <Link href='/'><a>返回首页</a></Link>
        </>
    )
}

export default withRouter(Desc)