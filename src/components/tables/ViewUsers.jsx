import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";



const ViewUsers = () => {
    const [activeTab, setActiveTab] = useState('professional');
    const [userdata, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/v2/user/allusers')
            const data = response.data;
            setUserdata(data)
            // console.log(response.data)
            setLoading(false);
            // toast.success("data fetched");

        } catch (error) {
            console.log(error)
            toast.error("error getting users")

        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div className="flex justify-center mb-4">
                            <button
                                className={`mr-4 ${activeTab === 'client' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('client')}
                            >
                                Client
                            </button>
                            <button
                                className={`mr-4 ${activeTab === 'talented' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('talented')}
                            >
                                Talented
                            </button>
                            <button
                                className={`mr-4 ${activeTab === 'professional' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('professional')}
                            >
                                Professional
                            </button>
                            <button
                                className={`mr-4 ${activeTab === 'business' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('business')}
                            >
                                Business
                            </button>
                            <button
                                className={`mr-4 ${activeTab === 'company' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('company')}
                            >
                                Company
                            </button>
                        </div>
                        <div class="overflow-hidden">
                            {activeTab === 'client' && (
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <div className="sm:px-6">
                                        <h1 className="text-white font-semibold">Clients</h1>
                                    </div>
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Name</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Phone</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {
                                            userdata.map((user) => {
                                                return (
                                                    <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.username}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phone}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.address}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}


                                    </tbody>
                                </table>
                            )}

                            {
                                activeTab === 'talented' && (

                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <div className="sm:px-6">
                                            <h1 className="text-white font-semibold">Talented</h1>
                                        </div>
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">UserName</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Phone</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {
                                                userdata.map((user) => {
                                                    return (
                                                        <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.username}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phone}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.address}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}


                                        </tbody>
                                    </table>
                                )
                            }
                            {
                                activeTab === 'professional' && (

                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <div className="sm:px-6">
                                            <h1 className="text-white font-semibold">Professionals</h1>
                                        </div>
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">UserName</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Phone</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {
                                                userdata.map((user) => {
                                                    return (
                                                        <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.username}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phone}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.address}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}


                                        </tbody>
                                    </table>
                                )
                            }
                            {
                                activeTab === 'business' && (

                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <div className="sm:px-6">
                                            <h1 className="text-white font-semibold">Business</h1>
                                        </div>
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">UserName</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Phone</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {
                                                userdata.map((user) => {
                                                    return (
                                                        <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.username}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phone}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.address}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}


                                        </tbody>
                                    </table>
                                )
                            }
                            {
                                activeTab === 'company' && (

                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <div className="sm:px-6">
                                            <h1 className="text-white font-semibold">Company</h1>
                                        </div>
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">UserName</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Phone</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {
                                                userdata.map((user) => {
                                                    return (
                                                        <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.username}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phone}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.address}</td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}


                                        </tbody>
                                    </table>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewUsers;
