import { Typography, TextField, Button } from '@mui/material'
import React , {useState}from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../../../Redux/Actions/customerAction'


const Addcustomer = () => {
        const [customerData,setCustomerData]=useState({})
        
        const dispatch=useDispatch()

        const handlesubmit = ()=>{
                dispatch( addCustomer(customerData))
               setCustomerData({
                fname : "",
                lname : "",
                mobile : "",
                email : "",
                gender :"",
               })
                console.log(customerData)
        }
  return (
    <div>
        <Typography>Add New Customer</Typography>
        <div>
            <Typography>Customer Details</Typography>
        <div className='subcontainer'>
                <Typography>first name</Typography>
                <TextField variant='outlined' label="enter first name" value={customerData.fname} onChange={(e)=>setCustomerData({...customerData,fname:(e.target.value)})}/>
                </div>

        <div className='subcontainer'>
                <Typography>last name</Typography>
                <TextField variant='outlined' label="enter last name" value={customerData.lname} onChange={(e)=>setCustomerData({...customerData,lname:(e.target.value)})}/>
                </div>

        <div className='subcontainer'>
                <Typography>email</Typography>
                <TextField variant='outlined' label="enter email" value={customerData.email} type="email" onChange={(e)=>setCustomerData({...customerData,email:(e.target.value)})}/>
                </div>

        <div className='subcontainer'>
                <Typography>Mobile number</Typography>
                <TextField variant='outlined' label="enter mobile number"  value={customerData.mobile} type="number" onChange={(e)=>setCustomerData({...customerData,mobile:(e.target.value)})}/>
                </div>
        <div className='subcontainer'>
                <Typography>Gender</Typography>
                <div>               
                 <input type="radio" name="gender" value="male" checked={customerData.gender=="male"} onChange={(e)=>setCustomerData({...customerData,gender:e.target.value})} />
                <label>Male</label>
                <input type="radio" name="gender" value="female" checked={customerData.gender=="female"} onChange={(e)=>setCustomerData({...customerData,gender : e.target.value})}/>
                <label>female</label>
                <input type="radio" name="gender" value="other" checked={customerData.gender=="other"} onChange={(e)=>setCustomerData({...customerData,gender : e.target.value})} />
                <label>other</label>
                </div>

                </div>

                <Button variant='contained' color='success' onClick={handlesubmit}>Add Customer</Button>
                </div>

    </div>
  )
}

export default Addcustomer
