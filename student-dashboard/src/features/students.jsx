import React,{useState,useEffect,useRef, useCallback} from "react";
function Students() {
    var [students,setStudents] = useState([]);
    var l=students.length;
    const nref=useRef()
    const aref=useRef()
    const cref=useRef()
    useEffect(()=>
    {        fetch("http://localhost:3000/students")
        .then(res=>res.json())
        .then(data=>{setStudents(data)
            console.log(data);
        });
    },[])
   const delref=useCallback((id)=>{
    
    {
        fetch(`http://localhost:3000/students/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            if(data){
                alert("Student deleted successfully");
                setStudents(students.filter(student=>student.id!==id));
            }})
    }
   }) 
    const insref=useCallback(()=>{
    
   
var obj={
    'id':++l,
    'name':nref.current.value,
    'age':aref.current.value,
    'course':cref.current.value
}
fetch('http://localhost:3000/students/',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(res=>res.json()).then(data=>{
if(data){
    alert('student added sucessfully')
    setStudents((stu)=>{
        
        return [...stu,obj]
    })
}
})
    })
   
    
return (    
        <div className="Students ">
      <h2 style={{textAlign: 'center'}}>Student List</h2>
           <table style={{width:'100%',textAlign:'center',height:'100%'}}>
            <thead>
                <tr>
                    <th style={{fontSize:'20px'}}>Name</th>
                    <th style={{fontSize:'20px'}}>Age</th>
                    <th style={{fontSize:'20px'}}>Course</th>
                    <th style={{fontSize:'20px'}}>Delete</th>
                </tr>
            </thead>

            {

                students?.map(student=>{
                    return <tr>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.course}</td>
                        <td><button onClick={()=>{delref(student.id)}}>Delete</button></td>
                    </tr>
                })
            } 
            </table>
            <div className="studetails">
             Name: <input type='text' ref={nref}></input><br></br>
              Age:<input type='number' ref={aref}></input><br/>
              Course:<input type='text' ref={cref}></input><br/>
                <button onClick={()=>{insref()}}> Add Stu</button>

           
            </div>
             

        </div>    );
}
export default Students;