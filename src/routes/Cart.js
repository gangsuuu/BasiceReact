import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";


export function Cart() {


    let state = useSelector((state) => { return state})
    // let a = useSelector((state) => state.stock ) // stock만 출력 됨
    
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
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
                            <td>안녕</td>
                            </tr>
                        </tbody> 
                        )})
                }
            </Table> 
        </div>

    )
}