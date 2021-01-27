import React,{useState} from 'react'

function P08(){

    const [color,setColor] = useState('blue')
    const changeColor = () => {
        setColor(color == 'blue' ? 'red' : 'blue')
    }

    return (
        <>
            <div>使用style Jsx语法编写页面CSS</div>
            {/* <div className="second">使用style Jsx语法编写页面CSS</div> */}
            <div>
                <button onClick={changeColor}>改变颜色</button>
            </div>
            
            <style jsx>
                {`
                    div{color:${color};}
                    .second{color:red}
                `}
            </style>
        </>
    )
}

export default P08