import AddAppointment from "./component/AddAppointment"
import Addinfo from './component/Addinfo'
import Search from "./component/Search"
import { useCallback, useEffect, useState } from "react";
import Modal from './component/Modal';




function App(){
    const [appointList,setAppointList]=useState([]);
    const [query,setQuery]=useState("");
    const [sortBy,setSortBy]=useState("name");
    const [blockChange,setBlockChange]=useState('none')
    const [blockChange2,setBlockChange2]=useState('block')
        // console.log(query)

    const filterAppointments = appointList.filter(
        (item)=> {return (item.name.includes(query) || 
                            item.region.includes(query) || 
                            item.content.includes(query)||
                            `${item.MaxPeople}`.includes(query) ||
                            `${item.price}`.includes(query)||
                            item.productName.includes(query)
                            )})
    .sort((a,b)=> 
    {return sortBy==="date"? (a[sortBy] > b[sortBy] ? -1 : 1) : (a[sortBy] < b[sortBy] ? -1 : 1)}
    )
    

    const fetchData = useCallback(
        ()=>{
            fetch(`./data.json`)
            .then(response => response.json())
            .then(data=> setAppointList(data))
        },[]
    );


    useEffect(
        fetchData,[fetchData]
    )
    
    // network ->무한반복 ->sources->pause




        
    return(<>
            <button
            id="travelGuidance"
            onClick={()=>{ setBlockChange("block") 
            setBlockChange2("none")
        }}
            style={{display:`${blockChange2}`}}
            >국내 여행지 안내표</button>

        <Modal 
            blockChange={blockChange}
            setBlockChange={setBlockChange}
            setBlockChange2={setBlockChange2}
        />
        <article
        style={{display:`${blockChange2}`}}
        >
            <Search 
            query={query}
            onQueryChange={ myQuery=> setQuery(myQuery)}
            sortBy={sortBy}
            onSortChange={ (mySortBy)=>setSortBy(mySortBy)}
            />


            <div id="leftRight">
            <AddAppointment
            onSendAppointment = {
            myAppointment=> setAppointList([...appointList,myAppointment])
            }
            lastId={
            appointList.reduce((max, item) => Number(item.id) > max ? Number(item.id) :max,1)
            }
            />
            
            <span id="span">중간선</span>

            <div id="list">
        <ul>
            {
            filterAppointments.map(
            (appointment)=>
             (<Addinfo key={appointment.id} 
            appointment={appointment}
            onDelectAppoint ={ appointmentId =>
                setAppointList(
                    filterAppointments.filter(
                        appointment=> appointment.id !== appointmentId
                    )
                )
            }
            />
            ))
            }
        </ul>
            </div>
            </div>
        </article>

        </>
    )
}



export default App;