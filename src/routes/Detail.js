import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail (props) {
    let [alert, setAlert]  = useState('block')
    let [count, setCount] = useState(0)
    let [selectCount, setSelectCount] = useState(0)
    let [tabNum, setTabNum] = useState(0)
    let [intro, setIntro] = useState('intro')


    let {id} = useParams()
    let item = props.shoes.find(function(x){
        return x.id == id
    })

    let YellowBtn = styled.button`
        background : ${ props => props.bg};
        color : ${ props => props.bg === 'blue' ? 'white' : "black"};
        padding : 10px;
    `

    let Alert = styled.div`
        display : ${ props => props.alert}
    `

    useEffect(()=> {
        // let a = setTimeout(() => setAlert("none"), 2000)
        if (isNaN(selectCount) == true){
            window.alert('그러지마세요')
        }
        
        return () => {
            <input onChange={ (e) => { setSelectCount(e.target.value) } } />
            // clearTimeout(a)
        }
    },[selectCount])

    useEffect(()=>{
        setTimeout(()=>{ setIntro('load') },10)
        return ()=> {
            setIntro('intro')
        }
    },[])

    return  (
        <>
            {/* <style type="text/css">
             {`
                .nav-tabs {
                    display: flex;
                    justify-content:start;
                    gap:5px
                }
             `}
            </style> */}
            <div className={"container intro "+intro+""}>
                {/* <Alert alert={alert}>
                    <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                </Alert> */}
                <YellowBtn
                onClick={()=>{setCount(count+1)}}
                >{count}</YellowBtn>
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{item.title}</h4>
                        <p>{item.content}</p>
                        <p>{item.price} 원</p>
                        <input 
                        style={{display:"block",marginBottom:'10px'}}
                        onChange={(e)=>{setSelectCount(e.target.value)}}
                        ></input>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>

                <Nav variant='tabs'  defaultActiveKey='link0'>
                    <Nav.Item>
                        <Nav.Link 
                            eventKey='link0'
                            onClick={() => {setTabNum(0)}}
                        >버튼</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            eventKey='link0'
                            onClick={() => {setTabNum(1)}}
                            >버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            eventKey='link0'
                            onClick={() => {setTabNum(2)}}
                            >버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent n={tabNum} shoes={props.shoes}></TabContent>
               
                

            </div> 
        </>
    )
}

function TabContent({n,shoes}) {
    // switch(props.n) {
    //     case 0 :
    //         return (<div>내용0</div>)
    //         break;
    //     case 1 :
    //         return (<div>내용1</div>)
    //         break;
    //     case 2 :
    //         return (<div>내용2</div>)
    //         break;
    // }

    let [fade, setFade] = useState('')
    useEffect(()=>{
        let a = setTimeout(() => {setFade('end')},100)
        return () => {
            clearTimeout(a)
            setFade('')
        }
    },[n])

    return (<div className={`start ${fade}`}>
        {[
            <div>{shoes[0].title}</div>,
            <div>내용1</div>,
            <div>내용2</div>
        ][n]}
    </div>)

}


export default Detail;