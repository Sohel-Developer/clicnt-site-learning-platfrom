import React from 'react';

import { toast, ToastContainer } from 'react-toastify';

const CourseDetails = () => {


    const confirm= ()=>{
        toast("Wow so easy! That Awesome Course.");
    }
    return (
        <div className='text-center mt-12'>
            <button onClick={confirm} className="  btn btn-active btn-secondary">Confirm Course </button>
            <ToastContainer />
        </div>
    );
};

export default CourseDetails;