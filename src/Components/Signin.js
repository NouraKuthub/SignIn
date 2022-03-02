import React from 'react';
import './Signin.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { RiGoogleLine } from "react-icons/ri";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

function Signin() {
    let navigate = useNavigate();
    const formSchema = Yup.object().shape({
        email: Yup.string().required('Email is mendatory'),
        password: Yup.string()
            .required('Password is mendatory')
            .min(5, 'Password must be at 5 char long'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    const onSubmit = (data) => {
        navigate("/home");
        return false
    }

    return (
        <div className='signinContainer'>
            <div className='signinMainContainer'>
                <p className='heading'>Sign In</p>
                <div className='user'>
                    <p>New User? </p>
                    <a href='' className='account'>Create an account</a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input
                            name="email"
                            type="text"
                            placeholder='Username or Email'
                            {...register('email')}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <div className="form-group2">
                        <input
                            name="password"
                            type="password"
                            placeholder='Password'
                            {...register('password')}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <div className='checkboxContainer'>
                        <input className='check' type='checkbox' />
                        <p className='checkbox'>Keep me sign in</p>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn">
                            Sign In
                        </button>

                    </div>
                </form>
                <div className='lineContainer'>
                    <div className='line'>
                        <p>Or Sign In With</p>
                    </div>
                    <div className='iconeContainer'>
                        <div className='icone1'>
                            <div className='icone'>
                                <RiGoogleLine />
                            </div>
                        </div>
                        <div className='icone1'>
                            <div className='icone'>
                                <FiFacebook />
                            </div>
                        </div>
                        <div className='icone1'>
                            <div className='icone'>
                                <FiLinkedin />
                            </div>
                        </div>
                        <div className='icone1'>
                            <div className='icone'>
                                <FiTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src='/Illustration.png' />
            </div>
        </div>
    )
}

export default Signin