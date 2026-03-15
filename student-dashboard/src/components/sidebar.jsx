import React from "react";
import { Link } from "react-router-dom";
function Sidebar(){
    return (
        <div className="Sidebar">
            <h2 className="border rounded" style={{color: 'white'}}>Sidebar</h2>
            <ul className="list-group list-unstyled">
                 <li style={{textAlign:'center' }}><Link style={{fontSize:'20px',textDecoration:"none",color:'white'}} to="/home">Home</Link></li>
                <li style={{textAlign:'center' }}><Link style={{fontSize:'20px',textDecoration:"none",color:'white'}} to="/students">Students</Link></li>
                <li style={{textAlign:'center'}}><Link style={{fontSize:'20px',textDecoration:"none",color:'white'}} to="/courses">Courses</Link></li>

            </ul>

        </div>)
}
export default Sidebar;