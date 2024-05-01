import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function DeletePcustomer() {


    function Deletedata(event){

        event.preventDefault();

        const PCustomerId = useParams.id;
        const Url= `http://localhost:8070/PCustomer/delete/${PCustomerId}`;

        axios.delete(Url).then(()=>{

            alert("Privileged Customer deleted")   

        }).catch((err)=>{
            alert(err)
        })

    }
    return (
        <div>
            <div>Delete PCustomer</div>
            <button onClick={Deletedata}>Delete</button>
        </div>
    );
}