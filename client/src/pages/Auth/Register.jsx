import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Layout from "./..//../components/layout/Layout";
import { toast } from "react-toastify";
const Register = () => {
  const [name,setname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const [role,setRole] = useState("")
  const navigate = useNavigate("")

   // form submit funtion
   const hendlesubmit = async (e) =>{
     e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {name,email,password,phone,address})
        if(res.data.success){
          toast.success(res.data.message)
          navigate('/login')
        }else{
          toast.error(res.data.message)
        }
    }catch (error) {
      console.log(error)
      toast.error("Somthing waent wrong")
    }
   };

  return (
    <Layout title="Register - Craft-Supplies">
      <div className="form-container" style={{ minHeight: "10vh" }}>
        <form onSubmit={hendlesubmit} className="form">
          <h4 className="title text-center">REGISTER HERE</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form-control"
              id="exampleInputname"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value ={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputphone"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputaddress"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              className="form-control"
              id="exampleInputrole"
              placeholder="Enter you Role"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
          <button type="#" className="login btn ">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;