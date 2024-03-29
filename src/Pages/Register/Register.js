import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
import useToken from '../../Hooks/useToken';
import { GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateDisplayName, providerGoogleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate('/');
    }

    /* google sign in */
    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);

            })
    }

    const handleRegister = data => {
        console.log(data);
        setError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully User Created!');
                updateDisplayName(data.name)
                    .then(() => {
                        saveUser(data.name, data.email,data.role);
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    const saveUser = (name, email,role) => {
        const user = { name, email ,role};
        fetch('https://black-market-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { 
                
                setCreatedUserEmail(email)
            })
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8  text-gray-700 my-10">
            <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>
            <p className="text-sm text-center text-gray-400">Already have account?
                <Link to="/login" className="focus:underline hover:underline"> Login here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={handleGoogleSignIn} ariaLabel="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>

            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-400" />
                <p className="px-3 text-gray-400">OR</p>
                <hr className="w-full text-gray-400" />
            </div>
            <form onSubmit={handleSubmit(handleRegister)} >
                <div className="space-y-4">
                    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                        <InputLabel id="demo-select-small">Role</InputLabel>
                        <Select name="role"
                            {
                            ...register("role")
                            }
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value="seller">Seller</MenuItem>
                            <MenuItem value="buyer">Buyer</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="name"
                            {...register("name",
                                {
                                    required: "Name is Required"
                                }
                            )}
                            className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                        {errors.name && <p className='text-red-700'>{errors.name.message}</p>}

                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input
                            type="email" name="email" id="email" placeholder="email"
                            {...register("email",
                                {
                                    required: "Email Address is required"
                                }
                            )}
                            className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}

                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })}
                            className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                    </div>

                </div>
                {error && <p className='text-red-600'>{error}</p>}
                <input className='btn btn-accent w-full px-8 py-3 mt-5 font-semibold rounded-md bg-gray-400 text-gray-100 cursor-pointer' value="Register" type="submit" />

            </form>
        </div>
    );
};

export default Register;