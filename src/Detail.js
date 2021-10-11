import {useState, useEffect } from "react";
import { useHistory, useParams} from "react-router";
import styled from "styled-components";
import './Detail.scss'

let 상자 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
`;

// Lifecyle Hook
// class Detail2 extends React.Component {
//   componentDidMount() {

//   }
//   componentWillUnmount() {

//   }
// }



// useEffect Hook
function Detail(props) {

  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {setAlert(false)}, 2000)
    return () => {clearTimeout(timer)}
  },[alert]);

  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function(상품) {
    return 상품.id == id
  })

  return (
    <div>
    <div className="container">
      <상자>
        <제목 className="title">Detail</제목>
      </상자>

      {inputData}<br />
      <input onChange = {(e) => {setInputData(e.target.value)}}/ >
      {
        alert === true
        ? (<div className="my-alert2"><p>재고 소진 임박!</p></div>)
        : null
      }
      

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">

          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Info storage={props.storage}></Info>
          <button className="btn btn-danger" onClick = {() => {props.setStorage([9,11,12])}}>주문하기</button>
          <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button>
        </div>
      </div>
    </div>
  </div>
  )
}


function Info(props) {
  return(
    <p>재고 : {props.storage[0]}</p>
  )
}

export default Detail;