import React, {useState} from "react";
import axios from "axios";
import style2 from "./style2.css"

export default function AddprivilegedCustomer(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    function sendData(event){

        event.preventDefault();

        const newPrivilegedCustomer= {

            name,
            address,
            phoneNumber
            
        }

        axios.post("http://localhost:8070/PCustomer/add",newPrivilegedCustomer).then(()=>{

            alert ("Privileged Customer Added")   

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
    <div className="container">
        <form onSubmit={sendData}>
            <div className="form-group">

                <label for="Name" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" placeholder="Enter Customer Name" 
                onChange={(event) =>{
                
                    setName(event.target.value);
                
                }}/>

            </div>

            <div className="form-group">

                <label for="Address" className="form-label">Address</label>
                <input type="text" className="form-control" id="Address" placeholder="Enter Customer Address"
                onChange={(event) =>{
                
                    setAddress(event.target.value);
                
                }}/>

            </div>

            <div className="form-group">

                <label for="Phonenumber" className="form-label">Phonenumber</label>
                <input type="number" className="form-control" id="Phonenumber" placeholder="Enter Customer Phonenumber"
                onChange={(event) =>{
                
                    setphoneNumber(event.target.value);
                
                }}/>

            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}