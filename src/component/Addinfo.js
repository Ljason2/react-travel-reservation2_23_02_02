import { FcFullTrash } from "react-icons/fc";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaCity } from "react-icons/fa";



function AddInfo({appointment,onDelectAppoint}){
    return(
        <li>
        <dl>
        <dt className="region"><div><FaCity/></div><dfn>지역명:</dfn> {appointment.region}</dt>
        <dd className="name"><div><MdDriveFileRenameOutline/></div> 이름:{appointment.name}</dd>
        <dd className="productName"><div><FaProductHunt/></div>상품명: {appointment.productName}</dd>
        <dd className="date"><div><FcOvertime/></div>여행기간 : {appointment.date}</dd>
        <dd className="MaxPeople"><div><BsPersonFill/></div>총인원: {appointment.MaxPeople}명</dd>
        <dd className="price"><div><RiMoneyDollarCircleFill/></div>가격: {appointment.price}원</dd>
        <dd className="content"><div><MdOutlineContentPaste/></div>내용: {appointment.content}</dd>
        </dl>
        <button 
        onClick={()=>
            onDelectAppoint(appointment.id)
        }
        type="button"><FcFullTrash /></button>
        </li>
    )
}


export default AddInfo;