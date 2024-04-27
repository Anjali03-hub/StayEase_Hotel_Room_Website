import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function ViewContact()
{
    const[users,Setusers]=useState([]);
   
//     View booking
    useEffect(()=>
    {
        axios.get("http://localhost:8000/viewcontact")
        .then((result)=>Setusers(result.data))

        .catch((err)=>{console.log(err)})

    })
    //  Delete 
    const HandleDelete=(id)=>
    {
        axios.delete("http://localhost:8000/deletecontact/" + id)
        .then((result)=>console.log("Delete Hogaya"))
        .catch((err)=>{console.log(err)})

    }
    return(
        <>
       <div class="m-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">


                        <h2 class='pic'>StayEase</h2>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">

                            <div class="navbar-nav ms-auto">
                                <a class="nav-link" href="/reguser"><font color="white">View User</font>  </a>
                                <a class="nav-link" href="/viewbooking"><font color="white">View Bookings</font>  </a>
                                <a class="nav-link" href="/viewcontact"><font color="white">Contact Detail</font>  </a>
                                <a href="/admin" className="btn btn-light ml-2">LOG OUT</a>
                            </div>
                        </div>

                    </div>

                </nav>
            </div>


<div class="content">
<h2 class="fw-bold h-font text-center" >Contact Detail</h2>

            <div className="w-70 vh-40 bg-white justify-content-center rounded p-4 ">
                
              <table class="table  border-1 table-hover ">
                <thead>
                    <th>
                        Id
                    </th>
                    <th>
                         Name
                    </th>
                    <th>
                     Email
                    </th>
                    
                    <th>
                       Message
                
                    </th>
                    <th>
                        Action
                    </th>
                    
                </thead>
                <tbody >
             
                {
                    users.map((user)=>{
                        return <tr><td>{user._id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.message}</td><td>
                            <Link to=''className="btn btn-outline" onClick={(e)=>HandleDelete(user._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></Link></td>
                            </tr>
                    })

                }
                </tbody>
                 </table>
                </div>
            </div>

        </>
    )
}
export default ViewContact ;