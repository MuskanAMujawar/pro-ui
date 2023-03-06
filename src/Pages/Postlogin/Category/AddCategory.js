import { CardContent, Typography,Button,Card, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import React from 'react'
import "./Addcategory.css"

const AddCategory = () => {
    const [selectcategory, setselectcategory] = React.useState("");

    const handleChange = (event) => {
        setselectcategory(event.target.value);
      };
  return (
    <div className="Product_main_container">
    <div className="Product_Top_Add_container">
      <div>
        <h3>Add Category</h3>
      </div>
     
    </div>
    {/* top nav end */}
    <Card sx={{width : 500}}>
        <CardContent>
            <div  className='subcontainer'>
            <Typography >Parent Category</Typography>
            <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">select category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectcategory}
                  label="select category"
                  onChange={(e)=>setselectcategory(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              </div>
              <div  className='subcontainer'>
              <Typography className='typography_contain'>Category Name</Typography>
              <TextField variant='outlined' label="category name"/>
              </div>
              <div >
              <Typography>Product Category Image</Typography>
              <div>
                <Typography>media</Typography>
                <Button variant='contained'>upload media</Button>
              </div>
              </div>
              <Typography>Custom Attribute</Typography>
              <div>
                <div className='subcontainer'>
                <Typography>Group name</Typography>
                <TextField variant='outlined' label="group name"/>
                </div>
                <div className='subcontainer'>
                <Typography >Field label</Typography>
                <TextField variant='outlined' label="field label"/>
                </div>
                <div className='subcontainer'>
                <Typography>Field name</Typography>
                <TextField variant='outlined' label="field name"/>
                </div>
                <div className='subcontainer'>
                <Typography >field type</Typography>
                <FormControl sx={{ width: 200 }}>

                <InputLabel id="demo-simple-select-label">select box</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectcategory}
                  label="select box"
                  onChange={(e)=>setselectcategory(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              </div>
              <div className='subcontainer'>
              <Typography>Field value</Typography>
              <TextField variant='outlined' label="field value"/>
              </div>
              <div className='subcontainer'>
              <Typography>Is_variant_key</Typography>
              <div>
              <input type="radio" name="Y" />
                <label>Y</label>
              <input type="radio" name="N" />
                <label>N</label>
                </div>
                </div>
                <Button variant='contained' color='error'>Remove</Button>
                <Button variant='contained' >Add</Button>
              </div>
              <Button variant='contained' color='success'>Add Category</Button>
        </CardContent>
    </Card>

    </div>

  )
}

export default AddCategory