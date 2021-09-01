import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('admin', data);
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            })

        alert('Admin Added Successfully')

    }

    return (
        <div>
            <form className="formContinar mt-4 text-white " onSubmit={handleSubmit(onSubmit)} >
                <h3 className='text-center'>Make Admin</h3>
                <input type='email' placeholder='Email' {...register("email", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAdmin;