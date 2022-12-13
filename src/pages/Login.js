import { Form } from 'antd'
import Input from 'antd/lib/input/Input'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../resources/authentication.css'
//import DefaultLayout from './components/DefaultLayout'
import axios from 'axios'

function Login() {
const navigate = useNavigate()
    const onFinish = async (values) => {
    
        try {
            const response = await axios.post('/api/login', values)
            localStorage.setItem('Komal_Money.user', JSON.stringify(response))
        //massage.success('Login Successful!');
        console.log('Login Successful')
            navigate('/')
        } catch (error) {
           //massage.error('Login failed!');
           console.log('Login failed!')
        }
    }

    return (
        <div className='register'>
            <div className="row justify-content-center align-items-center w-100  h-100">
                <div className="col-md-4">

                    <Form layout='vertical' onFinish={onFinish} >
                        <h1> KOMAL-MONEY LOGIN</h1>
                        <br />

                        <Form.Item label='Email' name='email' required>
                            <Input />

                        </Form.Item>
                        <Form.Item label='Password'  name='password' >
                            <Input />

                        </Form.Item>

                        <div className='d-flex justify-content-between align-item-center'>
                            <Link to='/register'> Not Registered Yet? Click here to Register </Link>
                            <button className='primary' type="submit">LOGIN</button>
                        </div>

                    </Form>
                </div>
                <div className="col-md-5">
                <div className='lottie'>
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_xx9zron9.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
                </div>
                </div> 
            </div>
        </div>
    )
}

export default Login