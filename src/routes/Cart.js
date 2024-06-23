import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAge, changeName } from "../store/userSlice";
import { useState } from "react";
import { addCount, removeCart } from "../store.js";

export function Cart() {


    let state = useSelector((state) => { return state})
    let [age,setAge] = useState(0)
    let dispatch = useDispatch()
    // let a = useSelector((state) => state.stock ) // stock만 출력 됨
    
    

    return (
        <div>
            {
                state.user.name
            } 
            &nbsp;(
            {
                state.user.age
            })
            의 장바구니

            <button
                onClick={
                   () => {
                    dispatch(addAge(age)) 
                    setAge(0)
                }
                }
            >버튼</button>

            <input type="number"
                onChange={
                    (e) => {setAge(e.target.value)}
                }
            ></input>

            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                    </tr>
                </thead>
                {
                    state.items.map((item,index) => {
                        return(
                        <tbody>
                            <tr>
                            <td>{index  + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td><button
                                onClick ={
                                    () => {
                                        dispatch(addCount(item.id))
                                    }
                                }
                            >+</button></td>
                            <td><button
                                onClick = {
                                    () => {
                                        dispatch(removeCart(item.id))
                                    }
                                }
                            >
                                삭제하기    
                            </button></td>
                            </tr>
                        </tbody> 
                        )})
                }
            </Table> 
        </div>

    )
}