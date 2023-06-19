import { useState,useEffect } from "react";
import axios from "axios";

const ScheduleElement=()=>{
  let  table= Array.from({length: 6},()=> Array.from({length: 7}, () => null))
  let  codes= Array.from({length: 6},()=> Array.from({length: 7}, () => null))
    const indexOf2dArray=(array2d, itemtofind)=> {
            var index = [].concat.apply([], ([].concat.apply([], array2d))).indexOf(itemtofind);
                        

        if (index === -1) { return false; }

         var numColumns = array2d[0].length;
        
      
         var row = parseInt(index / numColumns);
        
        
        var col = index % numColumns;
        
        return [row, col]; 
    }


    const [allcourses,setall]=useState(JSON.parse(localStorage.getItem("data")).register)
    const [currenttable,setcurrenttable]=useState([])
    const [ca,setca]=useState([])

    const [days]=useState(["sat","sun","mon","tue","wed","thu"])
    const [hours]=useState(["8 am","10 am","12 pm","2 pm","4 pm", "6 pm","8pm"])
    useEffect(()=>{
      let pulled=[]
        for(let course of allcourses){
            if (course.register.registration_current){
            axios.get('/groups/view_group_by_course_id_and_group_number',{course_id:course.course_id,group_number: course.group_number},
            { headers: { authorization: localStorage.token } }
            ).then(res=>{
              pulled.push(res.data.respone)
            })

        }}
        console.log(pulled)
        let  arr= Array.from({length: 6},()=> Array.from({length: 7}, () => null))
        for(var day=0;day<days.length;day++){
           for (var hour=0;hours.length<7;hour++){
               arr[day][hour]=days[day]+" "+hours[hour]
           } 
        }
        for (let c in pulled){
          if(indexOf2dArray(arr,c.teacher.time)){
            var[x,y]=indexOf2dArray(arr,c.teacher.time)
            console.log(x,y)
          table[x][y]=c.teacher
          codes[x][y]=c}
          if(indexOf2dArray(arr,c.session.time_session)){
            var[s,d]=indexOf2dArray(arr,c.session.time_session)
          table[s][d]=c.session
          codes[s][d]=c}
        }
        console.log(codes)
        setca(codes)
        setcurrenttable(table)


    },[]
    )
    

    

    return(
     /* days.map((day,key)=>(
        <tr>
        <th scope="row" className="text">
          {day}
        </th>
        <td>({currenttable[key][0]})?
        <p>{ca[key][0].course_id}</p>
          <p>Group: {ca[key][0].group_number} </p>
          <p>Place: {currenttable[key][0].hall ||currenttable[key][0].session_hall}</p>
          :<p></p></td>

          <td>({currenttable[key][1]})?
        <p>{ca[key][1].course_id}</p>
          <p>Group: {ca[key][1].group_number} </p>
          <p>Place: {currenttable[key][1].hall ||currenttable[key][1].session_hall}</p>
          :<p></p></td>
          <td>({currenttable[key][2]})?
        <p>{ca[key][2].course_id}</p>
          <p>Group: {ca[key][2].group_number} </p>
          <p>Place: {currenttable[key][2].hall ||currenttable[key][2].session_hall}</p>
          :<p></p></td>
          <td>(currenttable[key][3])?
        <p>{ca[key][3].course_id}</p>
          <p>Group: {ca[key][3].group_number} </p>
          <p>Place: {currenttable[key][3].hall ||currenttable[key][3].session_hall}</p>
          :<p></p></td>
          <td>(currenttable[key][4])?
        <p>{ca[key][4].course_id}</p>
          <p>Group: {ca[key][4].group_number} </p>
          <p>Place: {currenttable[key][4].hall ||currenttable[key][4].session_hall}</p>
          :<p></p></td>
          <td>(currenttable[key][5])?
        <p>{ca[key][5].course_id}</p>
          <p>Group: {ca[key][5].group_number} </p>
          <p>Place: {currenttable[key][5].hall ||currenttable[key][5].session_hall}</p>
          :<p></p></td>
          <td>(currenttable[key][6])?
        <p>{ca[key][6].course_id}</p>
          <p>Group: {ca[key][6].group_number} </p>
          <p>Place: {currenttable[key][6].hall ||currenttable[key][6].session_hall}</p>
          :<p></p></td>
      </tr>
      ))*/<div></div>
       
    )}
export default ScheduleElement