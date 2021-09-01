import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    const [ServiceInfo, setServiceInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...ServiceInfo };
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo);

    }
    const handleFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
        console.log('hand flis', newFile);

    }
    console.log('file', file);

    const onSubmit = () => {
        const formData = new FormData()
        formData.append('serviceFile', file)
        formData.append('name', ServiceInfo.name)
        formData.append('discretion', ServiceInfo.discretion)
        formData.append('img', file.name)


        fetch('http://localhost:5000/addService', {
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
        alert('Service Added Successfully')

    }
    return (
        <div style={{ height: "700px", backgroundColor: "white" }} className=' text-white mt-4'>
            <div className="formContinar  ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center'>
                        Add Service</h3>
                    <input onBlur={handleBlur} type='text' placeholder='Service Type' name="name" />
                    <textarea onBlur={handleBlur} type='text' rows="5" cols='53' placeholder='discretion' name="discretion"></textarea>
                    <input type="file" name='file' onChange={handleFile} />
                    <input type="submit" />

                </form>
            </div>
        </div>
    )
};

export default AddService;