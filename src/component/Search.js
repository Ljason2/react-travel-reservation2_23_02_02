import { useState } from "react";
import { BiCheckboxChecked } from "react-icons/bi";
import {GiArchiveResearch} from "react-icons/gi";
import {FaCaretSquareDown} from "react-icons/fa";
import {FcSearch} from "react-icons/fc";


function DropDown({toggleSort,sortBy,onSortChange}){

    if(!toggleSort){
       return null 
    }

    return(
        <ul>
        <li
        onClick={()=> onSortChange('name')}
        >이름 
        {(sortBy === 'name') && <BiCheckboxChecked />}
        </li>
        <li
        onClick={()=> onSortChange('region')}
        >지역명
        {(sortBy === 'region') && <BiCheckboxChecked />}
        </li>
        <li
         onClick={()=> onSortChange('productName')}
        >상품명
        {(sortBy === 'productName') && <BiCheckboxChecked />}
        </li>
        <li
         onClick={()=> onSortChange('date')}
        >날짜
        {(sortBy === 'date') && <BiCheckboxChecked />}
        </li>
        <li
         onClick={()=> onSortChange('MaxPeople')}
        >총인원
        {(sortBy === 'MaxPeople') && <BiCheckboxChecked />}
        </li>
        <li
         onClick={()=> onSortChange('price')}
        >가격
        {(sortBy === 'price') && <BiCheckboxChecked />}
        </li>


    </ul>
    )
}




function Search({query,onQueryChange,sortBy,onSortChange}){
    
    const [toggleSort,setToggleSort]=useState(false)
    const [query2,setQuery2]=useState("");
    return(
    <div id="search">
        <div>
        <GiArchiveResearch style={{fontSize:"40px"}}/>
         <input
         value={query2} 
         onChange={(event)=>{setQuery2(event.target.value)}}
         type="text" placeholder="search"/>
         <button id="searchButton"
         onClick={()=>{onQueryChange(query2)}}
         type="button"
         ><FcSearch /> &nbsp;&nbsp;검색</button>
        <button id="listSort"
        onClick={()=> setToggleSort(!toggleSort)}
        type="button"><FaCaretSquareDown /></button>
        <DropDown
        sortBy={sortBy}
        onSortChange={ mySort => onSortChange(mySort)}
        toggleSort={toggleSort}
        />
        </div>
    </div>
    )
}




export default Search;