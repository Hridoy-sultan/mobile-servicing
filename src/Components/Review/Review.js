import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../Booking/booking.css';
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);

    }
    const handleFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile)

    }
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceName', info.serviceName)
        formData.append('name', info.name)
        formData.append('discretion', info.discretion)
        formData.append('img', file.name)


        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        alert('thanks for review')

    }
    return (
        <div style={{ height: "700px", backgroundColor: "#24a0ed" }} className=' text-white'>
            <div className="formContinar  ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center'>
                        Review</h3>
                    <input onBlur={handleBlur} placeholder=' service name which you taken' name="serviceName" />
                    <input onBlur={handleBlur} type='text' placeholder='Your Name' name="name" />
                    <textarea onBlur={handleBlur} type='text' rows="10" cols='53' placeholder='Lets review' name="discretion"></textarea>
                    <input type="file" name='file' onChange={handleFile} />
                    <input type="submit" />

                </form>
            </div>
        </div>
    );
};

export default Review;