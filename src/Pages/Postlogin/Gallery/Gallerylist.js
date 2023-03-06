import React from 'react'
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
    { id: "Gallery_Name", label: "Gallery Name" },
   
    {
      id: "status",
      label: "Status",
      format: (value) => value.toFixed(2),
    },
    {
      id: "action",
      label: "Action",
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(Gallery_Name, status, action) {
    return { Gallery_Name, status, action };
  }
  
  const rows = [
    createData("India",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("China",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Italy",<Button variant='contained' color='success'>Active</Button> ,<i class="fa-solid fa-pen-to-square"></i>),
    createData("United States",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Canada",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Australia",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Germany", <Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Ireland",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i> ),
    createData("Mexico",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Japan", <Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("France",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("United Kingdom",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Russia",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Nigeria",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    createData("Brazil",<Button variant='contained' color='success'>Active</Button>,<i class="fa-solid fa-pen-to-square"></i>),
    
  ];
  

const Gallerylist = () => {
    const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="Product_Top_container">
        <div>
          <h3>Gallery</h3>
        </div>
              </div>
      {/* Top container closed */}
      <div className="card-container">
        <Card>
          <CardContent>
            <div className="options-container">
              <TextField variant="outlined" label="search" />
           <Button variant="contained">Search</Button>
            </div>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>

          </CardContent>
        </Card>
      </div>
    </div>

  )
}

export default Gallerylist