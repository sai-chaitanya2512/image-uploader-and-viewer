import "../styles/register.scss"
import {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Register (){

    const [regVal,setRegVal] = useState({
        email : "",
        password :"",
        phone:""
    })



    const onChange = (e)=>{

        setRegVal({...regVal,[e.target.name]:e.target.value})
    }

    const submit = ()=>{
     const newData =   axios.post("http://localhost:1000/user/addUser",{...regVal})
    }
    return(
        <>
            <div className="registerContainer">
                <div>
                <p>Register</p>
                    <div>
                        <label >Email</label>
                        <input name="email" placeholder="Email" onChange={(e)=>onChange(e)}/>
                    </div>
                    <div>
                        <label >Password</label>
                        <input name="password" placeholder="Password" onChange={(e)=>onChange(e)}/>
                    </div>
                    <div>
                        <label >Phone</label>
                        <input name="phone" placeholder="Phone" onChange={(e)=>onChange(e)}/>
                    </div>

                    <button onClick={submit}>
                        <Link to='login' style={{textDecoration:"none",color:"black"}}>
                            Submit
                        </Link>
                    </button>
                    <a>Already a user &nbsp;<u>
                        <Link to='/login'>
                            Login
                        </Link>
                        </u></a>
                </div>
                <img src="https://media.istockphoto.com/id/1013435204/photo/businessman-filling-online-registration-form.jpg?s=612x612&w=0&k=20&c=OqVxHQngPfPHNV9baIcqChpiL7Iv5G86bK5Pg0urbTc=" />
            </div>
        </>
    )
}