import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


const Home = () => {

  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on('routeChangeStart',(...args) => {
    console.log('1.routeChangeStart -> 路由开始变化，参数为：',...args);
  })

  Router.events.on('routeChangeComplete',(...args) => {
    console.log('2.routeChangeComplete -> 路由变化结束，参数为：',...args);
  })

  Router.events.on('beforeHistoryChange',(...args) => {
    console.log('3.beforeHistoryChange -> 路由变化结束，参数为：',...args);
  })

  // 不包括404错误
  Router.events.on('routeChangeError',(...args) => {
    console.log('4.routeChangeError -> 路由发生错误，参数为：',...args);
  })

  // hash模式
  Router.events.on('hashChangeStart',(...args) => {
    console.log('5.hashChangeStart -> ，参数为：',...args);
  })

  Router.events.on('hashChangeComplete',(...args) => {
    console.log('6.hashChangeComplete -> ，参数为：',...args);
  })


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
      <div><Link href="#hashModel"><a>hash模式</a></Link></div>
    </>
  )
}

export default Home