import React,{useEffect} from 'react'
import { Button } from 'antd'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {getData,deleteuser} from "../features/UserDetailsSlice"


const EmployeeList = () => {
    const {users} = useSelector((state) => state.userDetails)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getData())

    },[])
    console.log("Employees:", users)
    return (
        <div className='w-[100%]'>
            <div className='w-[100%] container mx-auto text-center'>
                <h2 className='text-[#000] font-bold text-[30px]'>Employee List</h2>
            </div>
            <div className='mt-[50px] ml-[40px]'>
                <Link to='/addEmployee' ><Button className='bg-[#000] text-[#fff] hover:!bg-[#000] hover:!text-[#ffffff] borber-none hover:border-none'>Add Employee</Button></Link>
            </div>

            <div>
                <table className='w-[100%] container mx-auto mt-[50px] border border-gray-300'>
                    <thead>
                        <tr className='border border-gray-300 '>
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Name</th>
                            
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Email</th>
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Phone</th>
                            
                            <th className='w-[10%] border border-gray-300 p-[10px]'>City</th>
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Salary</th>
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Designation</th>
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Date of Joining</th>
                            <th className='w-[10%] border border-gray-300 p-[10px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users && users.map((user) => (
                                <tr className='border border-gray-300'>
                                    <td className='border border-gray-300 text-[#fff]'>{user.name}</td>
                                    
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>{user.email}</td>
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>{user.phone}</td>
                                    
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>{user.city}</td>
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>{user.salary}</td>
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>{user.designation}</td>
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>{user.date}</td>
                                    <td className='border border-gray-300 p-[10px] text-[#fff]'>
                                        <Button className='bg-[#000] text-[#fff] hover:!bg-[#000] hover:!text-[#ffffff] borber-none hover:border-none' onClick={()=>navigate(`/updateEmployee/${user.id}`)}>Edit</Button>
                                        <Button onClick={()=>dispatch(deleteuser(user.id))} className='bg-[#000] text-[#fff] hover:!bg-[#000] hover:!text-[#ffffff] borber-none hover:border-none'>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        

                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList
