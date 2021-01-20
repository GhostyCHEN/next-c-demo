import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function gotoA(){
    Router.push('/expA')
  }

  return (
    <>
    <div>我是首页</div>
    <div><Link href="/expA"><a>去A页面</a></Link></div>
    <div><Link href="/expB"><a>去B页面</a></Link></div>
    <div>
      <button onClick={gotoA}>去A页面</button>
    </div>
  </>
  )
}

export default Home