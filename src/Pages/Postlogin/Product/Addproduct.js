import React,{useState} from 'react'
import {
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./AddProduct.css";
import JoditEditorComp from "jodit-react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const column = [
  { id: "product", label: "Product" },
  { id: "product_type", label: "Product Type" },
  {
    id: "category",
    label: "category",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];


const Addproduct = () => {
    const [value, setvalue] = useState("");
    const [status, setstatus] = useState("");
    const [category, setcategory] = useState([
      {
        name: "Accessories",
        expand: false,
        subcategory: [
          {
            name: "Wallets",
          },
          {
            name: "perfumes",
          },
        ],
      },
      {
        name: "mens",
        expand: true,
        subcategory: [
          {
            name: "formal shirt",
          },
          {
            name: "top wear",
          },
          {
            name: "bottom wear",
          },
        ],
      },
    ]);
  
    const config = {
      readonly: false,
      placeholder: "start typing...",
    };
    const handleexpandchange = (index, preexpand) => {
      const changeData = category.map((item, ind) => {
        if (index == ind) {
          return {
            ...item,
            expand: !preexpand,
          };
        } else {
          return {
            ...item,
            expand: false,
          };
        }
      });
      setcategory(changeData);
    };
  return (
    <div className="Product_main_container">
    <div className="Product_Top_Add_container">
      <div>
        <h3>Product</h3>
      </div>
      <div className="Product-Top-button">
        <Button variant="contained" color="success">
          Add Product
        </Button>
      </div>
    </div>
    {/* top container closed */}
    <div className="Add_Product">
      <Grid container spacing={4} sx={{ mt: 0.1 }}>
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <TextField label="Title" variant="outlined" />
              <Typography>short product description</Typography>
              <JoditEditorComp
                setvalue={setvalue}
                value={value}
                config={config}
              />
              <Typography>long product description</Typography>
              <JoditEditorComp
                setvalue={setvalue}
                value={value}
                config={config}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>media</Typography>
              <Button variant="contained">upload media</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="status"
                  onChange={(e) => setstatus(e.target.value)}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={0}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>Product Categories</Typography>
              <ul>
                {category.map((item, index) => {
                  return (
                    <li>
                      <span
                        onClick={() => handleexpandchange(index, item.expand)}
                      >
                        {item.expand ? "-" : "+"}
                        {item.name}
                      </span>
                      <ul>
                        {item.expand &&
                          item.subcategory.map((elem) => {
                            return (
                              <li>
                                <input type="radio" name="category" />
                                <label>{elem.name}</label>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <Typography>Tags</Typography>
              <TextField label="enter tags" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{mt:3}}>
        <CardContent>
          <Typography>Product Information</Typography>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Typography>SKU</Typography>
              <TextField label="sku" />
            </Grid>
            <Grid item xs={3}>
              <Typography>model number</Typography>
              <TextField label="model" />
            </Grid>
            <Grid item xs={3}>
              <Typography>Product Quantity</Typography>
              <TextField label="quantity" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mt:3}}>
        <CardContent>
          <Typography>Pricing</Typography>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Typography>Base price</Typography>
              <TextField label="base" />
            </Grid>
            <Grid item xs={3}>
              <Typography>original price</Typography>
              <TextField label="original" />
            </Grid>
            <Grid item xs={3}>
              <Typography>selling price</Typography>
              <TextField label="selling" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mt:3}}>
        <CardContent>
          <Typography>shipping information</Typography>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Typography>shipping charges</Typography>
              <TextField label="shipping" />
            </Grid>
            <Grid item xs={3}>
              <Typography>product weight</Typography>
              <TextField label="product weight" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mt:3}}>
        <CardContent>
          <Typography>Tax information</Typography>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Typography>Tax amount</Typography>
              <TextField label="tax" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mt:3}}>
        <CardContent>
          <Typography>SEO</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <label>Meta Tags</label>
              <TextField label="meta tags" />
            </Grid>
            <Grid item xs={12}>
              <label>Description</label>
              <TextField label="description" />
            </Grid>
            <Grid item xs={12}>
              <label>Keyword</label
              >
              <TextField label="keyword" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Paper sx={{mt:3}}>
        <Typography>FAQ</Typography>
        <TableContainer>
          <Table>

            <TableBody>
              <TableRow>
                <TableCell>
                    <Typography>Question</Typography>
                  <TextField label="Question"/>
                </TableCell>
                <TableCell>
                    <Typography>Answer</Typography>
                  <TextField label="Answer"/>
                </TableCell>
                <TableCell>
                  <Button variant="outlined">Remove</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="outlined">Add</Button>
      </Paper>
    </div>
  </div>

  )
}

export default Addproduct