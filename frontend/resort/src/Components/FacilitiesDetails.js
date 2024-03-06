import React, {useEffect, useRef, useState } from 'react'
import axios from 'axios';
import '../Facilities.css'

export default function FacilitiesDetails() {

    const [facilities, setFacilities] = useState([]);

    const FacilityName = useRef(null);
    const FacilityDesc = useRef(null);
    const available = useRef(null);
    const FacilityImg = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:7066/facilities/AllFacilitiesData")
            .then((res) => {
                console.log(res.data);
                setFacilities(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const facilityHandle = () => {
        const formData = new FormData();
        formData.append('facilityName', FacilityName.current.value);
        formData.append('description', FacilityDesc.current.value);
        formData.append('availability', available.current.value);
        formData.append('image', FacilityImg.current.files[0]);
 
        
        axios
            .post("http://localhost:7066/saveFacilities",formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log(res.data);
                setFacilities(res.data);
                alert('Facilities saved successfully');
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong, please try again");
            });
    }

    const deleteHandle = (id) => {
        axios
            .delete(`http://localhost:7066/deleteFacility/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error deleting facility:', err);
                alert('Failed to delete facility. Please try again later.');
            });
            window.location.reload();
    };

    return (
        <div className="container mb-2 mt-3" >
            <div className="row justify-content-center">
                <div className="row">
                    <div className="p-5 border border-dark rounded">
                        <h1 className="text-center">Facilities Details</h1>
                        <div className="mb-3">
                            <label htmlFor="facilityName" className="form-label">Facility Name</label>
                            <input type="text" className="form-control" id="facilityName" ref={FacilityName} />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="description" className="form-label">Facility Description</label>
                                <input type="text" className="form-control" id="description" ref={FacilityDesc} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="availability" className="form-label">Availability</label>
                                <input type="text" className="form-control" id="availability" ref={available} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="img" className="form-label">Facility Image</label>
                                <input type="file" className="form-control" id="img" ref={FacilityImg} accept="image/*" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <button className="btn btn-primary user-add" onClick={facilityHandle}>Add</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-3">
                        <table className="table table-striped border border-solid">
                            <thead>
                                <tr>
                                <th>Facility Id</th>
                                    <th>Facility Name</th>
                                    <th>Description</th>
                                    <th>Availability</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facilities.map((facility) => (
                                    <tr>
                                        <td>{facility.facilityId}</td>
                                        <td>{facility.facilityName}</td>
                                        <td>{facility.description}</td>
                                        <td>{facility.availability}</td>
                                        <td>{facility.img}</td>
                                        <td><button type='btn btn-primary' onClick={() => deleteHandle(facility.facilityId)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
