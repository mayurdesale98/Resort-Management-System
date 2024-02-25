import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
export default function RoomDetails() {

    const [newRoom, setNewRoom] = useState([]);
    const RoomType = useRef(null);
    const Capacity = useRef(null);
    const Price = useRef(null);
    const available = useRef(null);
    const roomImg = useRef(null);
    useEffect(() => {
        axios.get("http://localhost:7066/room/AllRoomData")
            .then((res) => {
                console.log(res.data);
                setNewRoom(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const registerHandle = () => {
        const formData = new FormData();
        formData.append('RoomType', RoomType.current.value);
        formData.append('capacity', Capacity.current.value);
        formData.append('pricePerNight', Price.current.value);
        formData.append('availability', available.current.value);
        formData.append('room_img', roomImg.current.files[0]);

        axios.post("http://localhost:7066/saveRoom", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const deleteHandle = (id) => {
        axios
            .delete(`http://localhost:7066/room/deleteRoom/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error deleting room:', err);
                alert('Failed to delete room. Please try again later.');
            });
    };
    
    return (
        <div className="container mb-2" >
            <div className="row justify-content-center">
                <div className="row">
                    <div className="p-5 border border-dark rounded">
                        <h1 className="text-center">Room Details</h1>
                        <div className="mb-3">
                            <label htmlFor="roomType" className="form-label">Room Type</label>
                            <input type="text" className="form-control" id="roomType" ref={RoomType} />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="capacity" className="form-label">Capacity</label>
                                <input type="text" className="form-control" id="capacity" ref={Capacity} />
                            </div>
                            <div className="col">
                                <label htmlFor="pricePerNight" className="form-label">Price per night</label>
                                <input type="text" className="form-control" id="pricePerNight" ref={Price} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="availability" className="form-label">Room Availability</label>
                                <input type="text" className="form-control" id="availability" ref={available} />
                            </div>
                            <div className="col">
                                <label htmlFor="roomImage" className="form-label">Room Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="roomImage"
                                    ref={roomImg}
                                    accept="image/*"
                                />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <button className="btn btn-primary user-add" onClick={registerHandle}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-3">
                        <table className="table table-striped border border-solid">
                            <thead>
                                <tr>
                                    <th>Room Id</th>
                                    <th>Room Type</th>
                                    {/* <th>Room Description</th> */}
                                    <th>Capacity</th>
                                    <th>Price Per Night</th>
                                    <th>Availability</th>
                                    <th>Room Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newRoom.map((room) => (
                                    <tr>
                                        <td>{room.roomId}</td>
                                        <td>{room.roomType}</td>
                                        {/* <td>{room.RoomDesc}</td> */}
                                        <td>{room.capacity}</td>
                                        <td>{room.pricePerNight}</td>
                                        <td>{room.availability}</td>
                                        <td>{room.roomImage}</td>
                                        <td><button type='btn btn-primary' onClick={() => deleteHandle(room.roomId)}>Delete</button></td>
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
