import {AiFillCloseSquare} from "react-icons/ai";




function ReservationAlert({regionName2,name2,productName2,maxPeople2,
    price2,toggleForm2,setToggleForm2,startDate2,endDate2}){

    
    if(!toggleForm2){
        return null}

    return(
        <div id="alert">
        <div 
        id="closeAlert"
        onClick={
            ()=>{setToggleForm2(!toggleForm2)}
            }
        >
        <AiFillCloseSquare />
        </div>
        <dl>
        <dt>예약이 완료 되었습니다</dt>
        <div>
        <dt>지역명</dt>
        <dd>{regionName2}</dd>
        </div>

        <div>
        <dt>이름</dt>
        <dd>{name2}</dd>
        </div>

        <div>
        <dt>상품명</dt>
        <dd>{productName2}</dd>
        </div>

        <div>
        <dt>총인원</dt>
        <dd>{maxPeople2}</dd>
        </div>

        <div>
        <dt>여행시작날짜</dt>
        <dd>{startDate2}</dd>
        </div>


        <div>
        <dt>여행종료날짜</dt>
        <dd>{endDate2}</dd>
        </div>


        <div>
        <dt>가격</dt>   
        <dd>{price2}</dd>
        </div>

        </dl>
        </div>
    )
}



export default ReservationAlert;