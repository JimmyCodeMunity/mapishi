import React, { useState } from 'react';
import { Icon } from '../Icon';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SendNotifications = () => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [department, setDepartment] = useState('');
    const [usertype,setUserType] = useState('');
    const navigation = useNavigate()

    const addSingleNotification = async (e) => {
        e.preventDefault();

        if (!username || !title || !message || !department) {
            e.preventDefault();
            console.log("All fields are required");
            toast.error('Kindly fill all the inputs');
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('title', username);


        try {
            const response = await axios.post('http://localhost:5000/api/v2/user/createuser', formData);
            // console.log(response);
            console.log("Notification added successfully");
            toast.success('Notification added successfully');
            // Reset form fields after successful submission
            setUsername('');
            // Optionally navigate to another page after successful submission
            // navigation('/dashboard');
        } catch (error) {
            console.log("Error adding new user");
            console.log(error);
            toast.error('Error adding user');
        }
    };
    const addMultipleNotifications = async (e) => {
        e.preventDefault();

        if (!username || !title || !message || !department) {
            e.preventDefault();
            console.log("All fields are required");
            toast.error('Kindly fill all the inputs');
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('title', username);


        try {
            const response = await axios.post('http://localhost:5000/api/v2/user/createuser', formData);
            // console.log(response);
            console.log("Notification added successfully");
            toast.success('Notification added successfully');
            // Reset form fields after successful submission
            setUsername('');
            // Optionally navigate to another page after successful submission
            // navigation('/dashboard');
        } catch (error) {
            console.log("Error adding new user");
            console.log(error);
            toast.error('Error adding user');
        }
    };
    return (
        <div>
            <div className="flex-1 flex-col mb-8 justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
                <div className="justify-center items-center">
                    <h3 className="text-white font-poppins">Single User Notification</h3>
                </div>
                <form action="" method="POST" onSubmit={addSingleNotification} encType="multipart/form-data" >
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="numeric" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            name="department"
                            id="department"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                        >
                            <option value="" disabled selected>Select Department</option>
                            <option value="department1">Department 1</option>
                            <option value="department2">Department 2</option>
                            <option value="department3">Department 3</option>
                            {/* Add more options as needed */}
                        </select>
                        <label for="department" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
                    </div>


                    <div className="relative w-full justify-center items-center mb-5 group">
                        <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Send To One</button>
                    </div>
                </form>

            </div>
            <div className="flex-1 flex-col mb-8 justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
                <div className="justify-center items-center">
                    <h3 className="text-white font-poppins">Send Multiple Notifications</h3>
                </div>
                <form action="" method="POST" onSubmit={addMultipleNotifications} encType="multipart/form-data" >
                    
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="numeric" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <select
                            value={usertype}
                            onChange={(e) => setUserType(e.target.value)}
                            name="department"
                            id="department"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                        >
                            <option value="" disabled selected>Select User Type</option>
                            <option value="department1">Clients</option>
                            <option value="department2">Talented</option>
                            <option value="department3">Professionals</option>
                            <option value="department3">Business</option>
                            <option value="department3">All Users</option>
                            {/* Add more options as needed */}
                        </select>
                        <label for="department" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            name="department"
                            id="department"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                        >
                            <option value="" disabled selected>Select Department</option>
                            <option value="department1">Mapishi Makeup Team</option>
                            <option value="department2">Tech Team</option>
                            <option value="department3">Support Team</option>
                            <option value="department3">Security Team</option>
                            {/* Add more options as needed */}
                        </select>
                        <label for="department" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
                    </div>


                    <div className="relative w-full justify-center items-center mb-5 group">
                        <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Send To Many</button>
                    </div>
                </form>

            </div>
        </div>
    );

}

export default SendNotifications;
