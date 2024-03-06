import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Feedbacks() {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:7066/feedback/feedback/AllFeedbackData")
            .then((res) => {
                console.log(res.data);
                setFeedback(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
        []);

        const deleteHandle = (feedbackId) => {
            axios
                .delete("http://localhost:7066/feedback/deleteFeedback/"+ feedbackId)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    alert(err);
                });
        };

    return (
        <div className='container'>
            <div className="row">
                <div className=" border border-solid">
                    <div className="row text-center">
                        <h2>Feedback detail</h2>
                    </div>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr className='border'>
                                <th>feedback_id</th>
                                <th>user_id</th>
                                <th>booking_id</th>
                                <th>rating</th>
                                <th>comments</th>
                                <th>date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback && feedback.map((feedbacks) => (
                                <tr key={feedback.id}>
                                    <td className='border'>{feedbacks.feedbackId}</td>
                                    <td className='border'>{feedbacks.user.userId}</td>
                                    <td className='border'>{feedbacks.booking.bookingId}</td>
                                    <td className='border'>{feedbacks.rating}</td>
                                    <td className='border'>{feedbacks.comments}</td>
                                    <td className='border'>{feedbacks.date}</td>
                                    <td className='border'><button className='btn btn-primary btn-sm' onClick={()=>{deleteHandle(feedbacks.feedbackId)}}>delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
