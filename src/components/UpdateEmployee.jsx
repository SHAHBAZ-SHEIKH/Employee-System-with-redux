import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {updateUserDetails} from '../features/UserDetailsSlice'

const UpdateEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateData, setUpdateData] = useState({});
  const { users } = useSelector((state) => state.userDetails);
  
  const [form] = Form.useForm(); // Create form instance

  useEffect(() => {
    if (id) {
      const singleData = users.find((user) => user.id === id);
      setUpdateData(singleData);
      console.log("Single Data:", singleData);
    }
  }, []);

  
  useEffect(() => {
    if (updateData) {
      form.setFieldsValue(updateData); 
    }
  }, [updateData, form]);

  const handleSubmit = (values) => {
    console.log('Updated Employee Data:', values);
    
    dispatch(updateUserDetails({ ...values, id }));
    setTimeout(()=>{
      navigate("/");
    },1000)
  };

  return (
    <div className='w-[100%] bg-[#fff] flex justify-center flex-col items-center'>
      <div className='w-[50%] flex justify-center flex-col items-center bg-red-500 mt-[50px]'>
        <div className='mb-[20px]'>
          <h2 className='text-[#fff] font-bold text-[30px]'>Update Employee</h2>
        </div>
        <Form
          form={form} // Connect the form instance
          layout='vertical'
          className='w-[60%]'
          onFinish={handleSubmit} // Form's submit handler
        >
          <Form.Item
            name="name"
            label={<span className="text-[18px] text-[#fff]">Name</span>}
            className='w-[100%]'
          >
            <Input className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-[18px] text-[#fff]">Email</span>}
            className='w-[100%]'
          >
            <Input className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item
            name="phone"
            label={<span className="text-[18px] text-[#fff]">Phone</span>}
            className='w-[100%]'
          >
            <Input type='number' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item
            name="city"
            label={<span className="text-[18px] text-[#fff]">City</span>}
            className='w-[100%]'
          >
            <Input type='text' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item
            name="salary"
            label={<span className="text-[18px] text-[#fff]">Salary</span>}
            className='w-[100%]'
          >
            <Input type='number' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item
            name="designation"
            label={<span className="text-[18px] text-[#fff]">Designation</span>}
            className='w-[100%]'
          >
            <Input type='text' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item
            name="date"
            label={<span className="text-[18px] text-[#fff]">Date of joining</span>}
            className='w-[100%]'
          >
            <Input type='date' className='w-[100%] focus:outline-none focus:border-none hover:border-none' />
          </Form.Item>
          <Form.Item className='w-[100%]'>
            <Button
              htmlType='submit'
              className='bg-[#eb4034] w-[100%] text-[#fff] hover:!bg-[#d63031] hover:!text-[#ffffff] !border-none hover:!border-none'
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
