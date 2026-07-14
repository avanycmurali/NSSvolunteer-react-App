import axios from 'axios'
import React, { useState } from 'react'

const AddNss = () => {
    const [input, changeInput] = useState(
        {
            volunteerID: "",
            fullName: "",
            email: "",
            phone: "",
            dateofBirth: "",
            gender: "",
            bloodGroup: "",
            department: "",
            yearofStudy: "",
            campName: "",
            hours: "",
            address: "",
            unitNumber: ""
        }
         )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:2000/add-nss", input).then(

            (response) => {
                alert("NSS volunteer added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding volunteer", error)
                alert("failed to add volunteer")
            }
        )
    }

  return (
    <div>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">volunteer ID</label>
                                <input type="text" className="form-control" name="volunteerID" value={input.volunteerID} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">full Name</label>
                                <input type="text" className="form-control" name="fullName" value={input.fullName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">email</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">phone</label>
                                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">date of Birth</label>
                                <input type="date" className="form-control" name="dateofBirth" value={input.dateofBirth} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">gender</label>
                                <input type="text" className="form-control" name="gender" value={input.gender} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">blood Group</label>
                                <select name="" id="" className="form-control" name="bloodGroup" value={input.bloodGroup} onChange={inputHandler}>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="O+">O+</option>
                                    <option value="AB+">AB+</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">department</label>
                                <select name="" id="" className="form-control"name="department" value={input.department} onChange={inputHandler}>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MTECH">MTECH</option>
                                    <option value="BTECH">BTECH</option>
                                </select>

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">year of Study</label>
                                <input type="text" className="form-control" name="yearofStudy" value={input.yearofStudy} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">camp Name</label>
                                <input type="text" className="form-control" name="campName" value={input.campName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">hours</label>
                                <input type="date" className="form-control" name="hours" value={input.hours} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">address</label>
                                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default AddNss