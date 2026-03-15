import React,{useState,useEffect} from "react";
function Courses() {
    var [courses,setCourses] = useState([]);
    useEffect(()=>
    {        fetch("http://localhost:3000/courses")
        .then(res=>res.json())
        .then(data=>setCourses(data));
    })
return (    
        <div className="Courses ">
      <h2 style={{textAlign: 'center'}}>Courses List</h2>
           <table style={{width:'100%',textAlign:'center',height:'100%'}}>
            <thead>
                <tr>
                    <th style={{fontSize:'20px'}}>Course</th>
                    <th style={{fontSize:'20px'}}>Duration</th>
                    
                </tr>
            </thead>
            
            {

                courses?.map(course=>{
                    return <tr>
                        <td>{course.name}</td>
                        <td>{course.duration}</td>
                    </tr>
                })
            } 
            </table>


        </div>    );
}
export default Courses;