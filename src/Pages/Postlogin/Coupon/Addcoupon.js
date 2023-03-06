import React from 'react'
import { Button, CardContent, TextField, Typography ,Card } from '@mui/material';
import Switch from '@mui/material/Switch';



const showDate=new Date()
const todaydate=showDate.toDateString();
const todaytime=showDate.toLocaleTimeString();

 const disableDate=()=>{
    let today,dd,mm,yyyy;
    today=new Date()
    dd=today.getDate()+1;
    mm=today.getMonth()+1;
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd
 }

const Addcoupon = () => {

  return (
    <div>
        <div>
            <Typography>Add Coupon</Typography>
        </div>
    <Card sx={{width : 500}}>
        <CardContent>
        <div>
        <div className='subcontainer'>
                <Typography>Coupon Code</Typography>
                <TextField variant='outlined' label="enter add coupon code" />
        </div>
        <div className='subcontainer'>
            <Typography>select discount</Typography>
            <div>
            <Typography>percent
            <Switch />
            flat</Typography>
            </div>
        </div>
        <div className='subcontainer'>
                 <Typography>Coupon Price</Typography>
                <TextField variant='outlined' label="enter add coupon price" />
 
        </div>
        <div className='subcontainer'>
        <Typography>start Date</Typography>
        <input type="text" value={todaydate} readOnly="true"/>
        <input type="text" value={todaytime} readOnly="true"/>
        </div>
        

        <div className='subcontainer'>
        <Typography>end date</Typography>
        <input type="datetime-local" value={todaydate} min={disableDate()} onChange={(e)=>(e.target.value)}/>
        </div>
        <Button variant='contained' color="success">Add Customer</Button>
    </div>
        </CardContent>
    </Card>
    </div>
   
  )
}

export default Addcoupon