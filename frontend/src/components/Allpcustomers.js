import React, { useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import style from "./style.css"

//gg
export default function Allpcustomers(){

    const [PCustomers , setCustpmers] = useState([]);

    useEffect(() => {

        function getpcustomers(){

            axios.get("http://localhost:8070/PCustomer/").then((res) => {

                setCustpmers(res.data);
                
            }).catch((err) => {
                alert(err.message);
            })

        }

        getpcustomers();

    },[])
    

    return(
        <div class="container">
        <h1>All Privileged Customers</h1>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
        <tbody>
        {PCustomers.map((PCustomer) => (
            <tr key={PCustomer._id}>
            <td>{PCustomer.name}</td>
            <td>{PCustomer.address}</td>
            <td>{PCustomer.phoneNumber}</td>
            <td>
            <div>
                <Link to={`/PCustomer/delete/${PCustomer._id}`}>
                  Delete
                </Link>
            </div>
            </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
             
    )
}