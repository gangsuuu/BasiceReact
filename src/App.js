import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import mainBg from './img/bg.png'
import { useContext, useEffect, useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import axios from 'axios'
import Detail from './routes/Detail.js'
import Event from './routes/Event.js' 
import { Cart } from './routes/Cart.js' 

function App() {


  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj))
  let localData = JSON.parse(localStorage.getItem('data'))
  console.log(localData.name)

  let [shoes,setShoes] = useState(data)
  let navigate = useNavigate()
  let [page, setPage] = useState(1)
  let [showBtn, setShowBtn] = useState(true)

  useEffect(() => {
  },[])
  
  return (
    <div className="App">

      

      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{justifyContent:'space-between'}}>
          <div>
            <Navbar.Brand
            onClick={() => {{navigate('/')}}}>
            Shoes    
            </Navbar.Brand>
          </div>
          <div>
            <Nav className="me-auto">
              <Nav.Link
              onClick={() => {
                navigate('/cart')
              }}
              >Cart</Nav.Link>
              <Nav.Link
              onClick={() => {{navigate('/')}}}
              >Features</Nav.Link>
              <Nav.Link
              onClick={() => {
                navigate("/detail/1")
              }}>Detail</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
            <div 
              className='main-bg'
              style={{backgroundImage : 'url('+ mainBg +")"}}
            >
            </div>
            <div className='container'>
              <div className='row'>
              {
                shoes.map((item, i) => {
                  return(
                    <Item item={item} i={i} key={i}></Item>
                  )
                })
              }
              </div>
              {
                showBtn == true ?
                <button 
                  onClick={()=>{
                    axios.get(`https://codingapple1.github.io/shop/data${page+1}.json`)
                    .then((results)=>{
                      let copy = [ ...shoes, ...results.data]
                      setShoes(copy)
                      setPage(page+1)
                    })
                    .catch(()=>{
                      alert('마지막 페이지입니다')
                      setShowBtn(false)
                    })
                  }}
                >더보기</button>
                : null
              }
            </div>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path="*" element={<div>없는페이지 입니다</div>} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      
    </div>
  );
}

function About () {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
      <h4>회사정보 끝</h4>
    </div>
  )
}


function Item (props) {
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width='80%'></img>
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  )
}
export default App;