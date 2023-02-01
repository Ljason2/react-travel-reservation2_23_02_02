import { Fragment, useState } from 'react';
import {BiCalendarPlus} from 'react-icons/bi'
import { SiYourtraveldottv } from "react-icons/si";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import ReservationAlert from './ReservationAlert';
// ||  && 연산자 => 출력값
// ()=>{} 함수형, 함수형 => () => {}
// 컴포넌트 나누기
// 함수명, 이름없는 함수 변수  ->  react, component JSX 


function AddWrite({toggleForm,formData,setFromData,formPublish}){

    if(!toggleForm){return null }
 

    // if(!toggleForm || false){
    //     return null
    // }


    // if(!toggleForm && true){
    //     return null
    // }

    return(
        <Fragment>
<ul>

<li>
<label htmlFor="userName">
<div><MdDriveFileRenameOutline/></div>이름</label>
<input 
type="text" id="userName"
onChange={(event)=>{  
    setFromData({...formData,name:event.target.value})
}}    
/>

</li>

<li>
<label htmlFor="region">
<div><FaCity/></div>
지역명</label>
<select
name="region" id="region" 
onChange={(event)=>{  
    setFromData({...formData,region:event.target.value})
}}
>
    <option value="서울">서울</option>
    <option value="경기도">경기도</option>
    <option value="경상도">경상도</option>
    <option value="제주도">제주도</option>
</select>
</li>

<li>
<label htmlFor="productName">
<div><FaProductHunt/></div>
상품명</label>
<input type="text" id="productName"
onChange={(event)=>{  
    setFromData({...formData,productName:event.target.value})
}}    

/>
</li>

<li>
<label htmlFor="startDate">
<div><FcOvertime/></div>    
여행시작날짜</label>
<input type="date" id="startDate"
onChange={(event)=>{  
    setFromData({...formData,date:event.target.value})
}}    

/>
</li>


<li>
<label htmlFor="endDate">
<div><FcOvertime/></div>
여행종료날짜</label>
<input type="date" id="endDate"
onChange={(event)=>{  
    setFromData({...formData,lastDate:event.target.value})
}}    
/>
</li>


<li>
<label htmlFor="maxPeople">
<div><BsPersonFill/></div>    
최대인원</label>
<input type="text" id="maxPeople"
placeholder='숫자만 입력해주세요'
onChange={(event)=>{  
    setFromData({...formData,MaxPeople:event.target.value})
}}
/>
</li>


<li>
<label htmlFor="price">
<div><RiMoneyDollarCircleFill/></div>    
가격</label>
<input type="text" id="price"
placeholder='숫자만 입력해주세요'
onChange={(event)=>{  
    setFromData({...formData,price:event.target.value})
}}    
/>
</li>



<li>
<label htmlFor="content">
<div><MdOutlineContentPaste/></div>    
내용</label>
<textarea id="content"
onChange={(event)=>{
    setFromData({...formData,content:event.target.value})
}}    
></textarea>
</li>
</ul>

<p>
    <button type="submit"
    onClick={formPublish}
    >예약하기</button>
</p>
</Fragment>
    )
}




function AddAppointment({onSendAppointment, lastId}){

    // 비어있는 객체 ->reset
    const clearData={
    "name": "",
    "region": "서울",
    "productName": "",
    "date": "",
    "MaxPeople":"",
    "price":"",
    "content":""
    }
    // state
const [toggleForm,setToggleForm]=useState(false);
const [toggleForm2,setToggleForm2]=useState(false);
const [formData,setFromData]=useState(clearData);
const [regionName2,setRegionName2]=useState("");
const [name2,setName2]=useState("");
const [productName2,setProductName2]=useState("");
const [maxPeople2,setMaxPeople2]=useState("");
const [price2,setPrice2]=useState("");
const [startDate2,setStartDate2]=useState("");
const [endDate2,setEndDate2]=useState("");


function formPublish(){
    // 합본 객체
    const appointmentInfo ={
        id: lastId + 1,
        name: formData.name,
        region: formData.region ,
        productName:  formData.productName,
        date:  formData.date + '~' + formData.lastDate,
        MaxPeople: formData.MaxPeople,
        price : formData.price,
        content : formData.content
    }
    // 데이터 보내기
    onSendAppointment(appointmentInfo)
    // reset
    setToggleForm(!toggleForm)
    setFromData(clearData)
    
    // 예약알림 페이지에 값 변경해서 전달하기
    setRegionName2(formData.region)
    setName2(formData.name)
    setProductName2(formData.productName)
    setMaxPeople2(formData.MaxPeople)
    setPrice2(formData.price)
    setStartDate2(formData.date)
    setEndDate2(formData.lastDate)
    setToggleForm2(!toggleForm2)
}

return(
<div id="appoint">
<h3><SiYourtraveldottv /> &nbsp;국내 여행 예약</h3>
<h4
onClick={()=> setToggleForm(!toggleForm)}
>
<BiCalendarPlus/>
예약하기</h4>
<AddWrite
toggleForm={toggleForm}
formData = {formData}
formPublish={formPublish}
setFromData={setFromData}
/>
<ReservationAlert 
regionName2={regionName2}
name2={name2}
productName2={productName2}
maxPeople2={maxPeople2}
price2={price2}
toggleForm2={toggleForm2}
setToggleForm2={setToggleForm2}
startDate2={startDate2}
endDate2={endDate2}
/>
</div>
    )
}

export default AddAppointment;