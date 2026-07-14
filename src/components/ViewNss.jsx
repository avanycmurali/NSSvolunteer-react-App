import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewNss = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:2000/view-nss").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
     useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>

<table class="table">
                <thead>
                    <tr>
                        <th scope="col">volunteerID</th>
                        <th scope="col">fullName</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">dateofBirth</th>
                        <th scope="col">gender</th>
                        <th scope="col">bloodGroup</th>
                        <th scope="col">department</th>
                        <th scope="col">yearofStudy</th>
                        <th scope="col">campName</th>
                        <th scope="col">hours</th>
                        <th scope="col">address</th>
                        <th scope="col">unitNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value,index)=>{
                            return(
                                <tr>
                                    <th scope="row">{value.volunteerID}</th>

                                    
                                    <td>{value.fullName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.dateofBirth}</td>
                                    <td>{value.gender}</td>                                    
                                    <td>{value.bloodGroup}</td>                                
                                    <td>{value.department}</td>                                
                                    <td>{value.yearofStudy}</td>                                
                                    <td>{value.campName}</td>                                
                                    <td>{value.hours}</td>                                
                                    <td>{value.address}</td>  
                                    <td>{value.unitNumber}</td>                              

                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>

    </div>
  )
}

export default ViewNss