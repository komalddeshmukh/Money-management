import { Form, message } from 'antd'
import Input from 'antd/lib/input/Input'
import { Link } from 'react-router-dom'
import React from 'react'
import '../resources/authentication.css'
//import DefaultLayout from './components/DefaultLayout'
import axios from 'axios'


function Register() {

     const onFinish = async (values) => {
          // console.log(values);
          try {
               await axios.post ('/api/users/register', values)
               //message.success('Register successful!!');
               console.log('Register successful!!');
          
              } catch (error) {
               //   massage.error('something went wrong!');
               console.log('Something Went Wrong!' );
               }
     }
     return (
          <div className='register'>
               <div className="row justify-content-center align-items-center w-100  h-100">
                    <div className="col-md-5">
                         <div className='lottie'>
                              <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_xx9zron9.json" background="transparent" speed="1" loop autoplay></lottie-player>
                         </div>
                    </div>
                    <div className="col-md-5">

                         <Form layout='vertical' onFinish={onFinish} >
                              <h1> KOMAL-MONEY REGISTER</h1>
                              <br />
                              <Form.Item label='Name' name='name' required>
                                   <Input />

                              </Form.Item>
                              <Form.Item label='Email' name='email' required>
                                   <Input />

                              </Form.Item>
                              <Form.Item label='Password' name='password' >
                                   <Input />

                              </Form.Item>

                              <div className='d-flex justify-content-between align-item-center'>
                                   <Link to='/login'>Already Registered, Click here to login </Link>
                                   <button className='primary' type="submit">REGISTER</button>
                              </div>

                         </Form>
                    </div>
               </div>
          </div>
     )
}
export default Register