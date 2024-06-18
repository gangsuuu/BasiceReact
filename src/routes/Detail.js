import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail (props) {
    let [alert, setAlert]  = useState('block')
    let [count, setCount] = useState(0)
    let [selectCount, setSelectCount] = useState(0)
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
    // const NewBtn = styled(YellowBtn)`
    //     color: red;
    //     display: none;
    // `

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


    return  (
        <div className="container">
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
        </div> 
    )
}

export default Detail;