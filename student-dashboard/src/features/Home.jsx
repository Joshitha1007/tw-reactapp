import React, { useState,useEffect } from "react";
function Home(){
    const [students,setStudents] = useState(0);
    const [courses,setCourses] = useState(0);

    useEffect(()=>
    {
        fetch("http://localhost:3000/students")
        .then(res=>res.json())
        .then(data=>setStudents(data.length));
    }, []);
    useEffect(()=>
    {
        fetch("http://localhost:3000/courses")
        .then(res=>res.json())
        .then(data=>setCourses(data.length));
    }, []);

    return (
        <div className="Home">
            <h2 style={{textAlign: 'center'}}>Welcome to Student Dashboard</h2><br/>
            <div className="Cardbox">
                <div className="Card"> 
                    <h2> Students </h2>
                    <h1>{students}</h1>

                </div>
                 <div className="Card"> 
                    <h2> Courses </h2>   
                    <h1>{courses}</h1>       

                </div>
                 
            </div>
        </div>
    )
}
export default Home;