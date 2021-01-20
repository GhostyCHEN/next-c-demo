import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


const Home = () => {

  function choose(){
    // Router.push('/desc?name=B')
    // 面向对象传递
    Router.push({
      pathname:'/desc',
      query:{
        name:'C'
      }
    })
  }

  return (
    <>
      <div>我是首页</div>
      <div><Link href="/desc?name=A"><a>选择A</a></Link></div>
      <div><Link href="/desc?name=B"><a>选择B</a></Link></div>
      <div><Link href={{pathname:'/desc',query:{name:'D'}}}><a>选择D</a></Link></div>
      <div>
        <button onClick={choose}>
          选择C
        </button>
      </div>
    </>
  )
}

export default Home