import React from "react";
import Sidebar from '../Sidebar'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Customer.css";
import {userData} from '../../Data/Data'

  
const Customer = () => {
  return (
    <div className="AppGlass">
        <Sidebar idx={1}/>
        <div className="Table MainDash">
      
            <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 8px 20px 0px #80808029" , borderRadius:"20px" , backgroundColor:"rgba(255, 255, 255, 0.54)"}}
            >

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="left">Last Name</TableCell>
                    <TableCell align="left">Address</TableCell>
                    <TableCell align="left">city</TableCell>
                    <TableCell align="left">state</TableCell>
                </TableRow>
                </TableHead>
                <TableBody style={{ color: "white" }}>
            
                {userData.map((row) => (
                    <TableRow
                    key={row.name.firstName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name.firstName}
                    </TableCell>
                    <TableCell align="left">{row.name.lastName}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{row.city}</TableCell>
                    <TableCell align="left">
                        <span className="status">{row.state}</span>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            
        </div>
      </div>
  );
};

export default Customer;