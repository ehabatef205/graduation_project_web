import { useState,useEffect } from "react";
import axios from "axios";

const ScheduleElement=()=>{

    const indexOf2dArray=(array2d, itemtofind)=> {
            var index = [].concat.apply([], ([].concat.apply([], array2d))).indexOf(itemtofind);
                        

        if (index === -1) { return false; }

         var numColumns = array2d[0].length;
        
      
         var row = parseInt(index / numColumns);
        
        
        var col = index % numColumns;
        
        return [row, col]; 
    }


    const [allcourses]=(JSON.parse(localStorage.getItem("data")).register)
    const [currentcourses,setcurrentcourses]=([])

    const [days]=useState(["sat","sun","mon","tue","wed","thu"])
    const [hours]=useState(["8 am","10 am","12 pm","2 pm","4 pm", "6 pm","8pm"])
    useEffect(()=>{
        for(let course of allcourses){
            if (course.register.registration_current){
            axios.get('/groups/view_group_by_course_id_and_group_number',{course_id:course},)

        }}
        const  arr= Array.from(Array(7), () => new Array(6 ));
        for(var day=0;day<days.length;day++){
           for (var hour=0;hours.length<7;hour++){
               arr[day][hour]=days[day]+" "+hours[hour]
           } 
        }
        for (var lesson =0;lesson<JSON.parse(localStorage.getItem("data")).register;lesson++){
            
            
            
            
            ///indexOf2dArray(arr,JSON.parse(localStorage.getItem("data")).register)

        }
    }
    )
    

    

    return(
        <tr>
              <th scope="row" className="text">
                08:00 am
              </th>
              <td></td>
              <td></td>
              <td class="table-warning">
                <p>Comp408: Artificial Intelligence</p>
                <p>Group: 3 </p>
                <p>Place: 16</p>
              </td>
              <td> </td>
              <td></td>
              <td class="table-primary">
                <p>Comp402: Cryptology</p>
                <p>Group: 1 </p>
                <p>Place: 16</p>
              </td>
              <td> </td>
            </tr>
    )}
export default ScheduleElement