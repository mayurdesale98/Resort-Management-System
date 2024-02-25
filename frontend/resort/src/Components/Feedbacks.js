import React from 'react'

export default function Feedbacks() {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border'>dsf</td>
                        <td className='border'>sdf</td>
                        <td className='border'>sdf</td>
                        <td className='border'>sdf</td>
                        <td className='border'>sdf</td>
                        <td className='border'>sdf</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
