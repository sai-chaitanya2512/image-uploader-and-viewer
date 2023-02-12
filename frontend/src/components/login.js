import "../styles/login.scss"
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom"


export default function Login (){
    const [logVal,setLogVal] = useState({
        email : "",
        password :""
    })

    const [result,setResult] = useState("")

    const onChange = (e)=>{

        setLogVal({...logVal,[e.target.name]:e.target.value})
    }

    const submit = async(e)=>{

        try {
            const body = {
                email : logVal.email,
                password : logVal.password
            }
            const newData = await axios.post("http://localhost:1000/user/login",{...body})


     
            if(newData){
               localStorage.setItem("id",newData.data._id)
            }
            const data = localStorage.getItem("id")
       
            if(data){
               setResult("/dash")
            }
            else{
               setResult("")
            }
        } catch (error) {
            console.log(error);
        }
   
    }
    return(
        <>
            <div className="loginContainer">
            <div>
                <p>Login</p>
                    <div>
                        <label >Email</label>
                        <input name="email" placeholder="Email" onChange={(e)=>onChange(e)}/>
                    </div>
                    <div>
                        <label >Password</label>
                        <input name="password" placeholder="Password" onChange={(e)=>onChange(e)}/>
                    </div>


                    <button onClick={submit}>
                        <Link to={result} style={{textDecoration:"none",color:"black"}}>
                            Submit
                        </Link>
                        </button>
                    <a>not having an account &nbsp;<u>
                        <Link to='/'>
                            Register    
                        </Link>
                        
                        </u></a>
                </div>
                <img src="https://media.istockphoto.com/id/1013435204/photo/businessman-filling-online-registration-form.jpg?s=612x612&w=0&k=20&c=OqVxHQngPfPHNV9baIcqChpiL7Iv5G86bK5Pg0urbTc=" />
            </div>
        </>
    )
}