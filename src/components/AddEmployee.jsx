import React,{useState} from 'react'
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '../features/UserDetailsSlice';
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    const handleSubmit = (values) => {
        console.log("Employee Data:", values)
        dispatch(addUserDetails(values))
        navigate("/")
    
    }
    
    


    return (
        <div className='w-[100%] bg-[#fff] flex justify-center flex-col items-center'>
            <div className='w-[50%] flex justify-center flex-col items-center bg-red-500 mt-[50px]'>
                <div className='mb-[20px]'>
                    <h2 className='text-[#fff] font-bold text-[30px]'>Add Employee</h2>
                </div>
                <Form layout='vertical' className='w-[60%]' onFinish={handleSubmit} >
                    <Form.Item
                        name="name"
                        label={<span className="text-[18px] text-[#fff]">Name</span>}
                        className='w-[100%]'>
                        <Input  className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label={<span className="text-[18px] text-[#fff]">Email</span>}
                        className='w-[100%]'>
                        <Input  className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label={<span className="text-[18px] text-[#fff]">Phone</span>}
                        className='w-[100%]'>
                        <Input  type='number' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item
                        name="city"
                        label={<span className="text-[18px] text-[#fff]">City</span>}
                        className='w-[100%]'>
                        <Input  type='text' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item
                        name="salary"
                        label={<span className="text-[18px] text-[#fff]">Salary</span>}
                        className='w-[100%]'>
                        <Input  type='number' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item
                        name="designation"
                        label={<span className="text-[18px] text-[#fff]">Designation</span>}
                        className='w-[100%]'>
                        <Input  type='text' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item
                        name="date"
                        label={<span className="text-[18px] text-[#fff]">Date of joining</span>}
                        className='w-[100%]'>
                        <Input  type='date' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
                    </Form.Item>
                    <Form.Item className='w-[100%]'>
                        <Button htmlType='submit'
                            className='bg-[#eb4034] w-[100%] text-[#fff] hover:!bg-[#d63031] hover:!text-[#ffffff] !border-none hover:!border-none'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AddEmployee
