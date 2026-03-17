import React,{useRef} from 'react';
import {useFormik} from  'formik';
import * as Yup from 'yup';
function StudentForm(){
    var fref=useRef();
    var studentform=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            email:"",
            phone:""
        },
        onSubmit:(values,{resetForm})=>{
            alert("form is submitted");
          resetForm()

        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("hi! plz enter your firstname"),
            age:Yup.number().test("age-check", "age must be at least 18", function(value) {
    return value >= 18;
  }),
  email:Yup.string().matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$","enter valid email"),
  phone:Yup.string().matches(/^[0-9]{10}$/, "Must be exactly 10 digits").required("must be submitted")

        })

    })
    return (
        
        <form onSubmit={studentform.handleSubmit} ref={fref}>
            <fieldset style={{textAlign:"center",fontSize:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <legend >Student Form</legend>
           {/*<p style={{border:"1px solid red"}}>{JSON.stringify(studentform)}</p>*/}
                      Name:<br></br><input type="text" style={studentform.touched.firstname && studentform.errors.firstname?{border:" 5px solid red", backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/1828/1828843.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "10px",
    paddingLeft: "5px"}:studentform.touched.firstname?{border:" 5px solid green",backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/845/845646.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"right 10px center",
        backgroundSize: "10px",
    paddingLeft: "5px"

    }:{}}
            {...studentform.getFieldProps("firstname")}/>
           <br></br>
            {
                studentform.touched.firstname && studentform.errors.firstname ?(
                    <>
                    <b style={{color:"red"}}>{studentform.errors.firstname}</b>
                    </>
                ):studentform.touched.firstname?(
                    <>
                    <b style={{color:"green"}}>oh! very good</b>
                    </>
                ):""
            }<br>
            </br>
            Lastname:<br></br><input type="text" 
            {...studentform.getFieldProps("lastname")}/>
            <br></br>
            Age:<br></br><input type="text" style={studentform.touched.age && studentform.errors.age?{border:" 5px solid red", backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/1828/1828843.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "10px",
    paddingLeft: "5px"}:studentform.touched.age?{border:" 5px solid green",backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/845/845646.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"right 10px center",
        backgroundSize: "10px",
    paddingLeft: "5px"

    }:{}}
            {...studentform.getFieldProps("age")}/>
             <br></br>
            {
                studentform.touched.age && studentform.errors.age ?(
                    <>
                    <b style={{color:"red"}}>{studentform.errors.age}</b>
                    </>
                ):studentform.touched.age?(
                    <>
                    <b style={{color:"green"}}>oh! very good</b>
                    </>
                ):""
            }<br>
            </br>
            <br></br>
             Email:<br></br><input type="text" style={studentform.touched.email && studentform.errors.email?{border:" 5px solid red", backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/1828/1828843.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "10px",
    paddingLeft: "5px"}:studentform.touched.email && studentform.values.email?{border:" 5px solid green",backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/845/845646.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"right 10px center",
        backgroundSize: "10px",
    paddingLeft: "5px"

    }:{}}
    
            {...studentform.getFieldProps("email")}/>
             <br></br>
            {
                studentform.touched.email && studentform.errors.email ?(
                    <>
                    <b style={{color:"red"}}>{studentform.errors.email}</b>
                    </>
                ):studentform.touched.email && studentform.values.email?(
                    <>
                    <b style={{color:"green"}}>oh! very good</b>
                    </>
                ):""
            }<br>
            </br>
            <br></br>
           Phone:<br></br> <input type="text"  style={studentform.touched.phone && studentform.errors.phone?{border:" 5px solid red", backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/1828/1828843.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "10px",
    paddingLeft: "5px"}:studentform.touched.phone?{border:" 5px solid green",backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/845/845646.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"right 10px center",
        backgroundSize: "10px",
    paddingLeft: "5px"

    }:{}}
    
            {...studentform.getFieldProps("phone")}/>
            <br></br>
             {
                studentform.touched.phone && studentform.errors.phone ?(
                    <>
                    <b style={{color:"red"}}>{studentform.errors.phone}</b>
                    </>
                ):studentform.touched.phone?(
                    <>
                    <b style={{color:"green"}}>oh! very good</b>
                    </>
                ):""
            }<br>
            </br>

            <button type="submit">Submit Data</button>
            </fieldset>
        </form>
    )
}
export default StudentForm;