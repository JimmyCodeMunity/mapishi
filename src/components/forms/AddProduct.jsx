import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
    const [productname, setProductName] = useState('');
    const [price, setProductPrice] = useState('');
    const [description, setProductDescription] = useState('');
    const [file, setFile] = useState(null);

    const navigation = useNavigate()

    const addProduct = async (e) => {
        e.preventDefault();

        if (!productname || !price || !description || !file) {
            e.preventDefault();
            console.log("All fields are required");
            toast.error('Kindly fill all the inputs');
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('file', file[i]);
        }

        formData.append('productname', productname);
        formData.append('price', price);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:5000/api/v2/product/createproduct', formData);
            // console.log(response);
            console.log("Product added successfully");
            toast.success('Product added successfully');
            // Reset form fields after successful submission
            setProductName('');
            setProductPrice('');
            setProductDescription('');
            setFile(null);
            // Optionally navigate to another page after successful submission
            // navigation('/dashboard');
        } catch (error) {
            console.log("Error adding new product");
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
                <div className="justify-center items-center">
                    <h3 className="text-white font-poppins">Create Product</h3>
                </div>
                <form onSubmit={addProduct} encType="multipart/form-data">
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={productname} onChange={(e) => setProductName(e.target.value)} type="text" name="productname" id="productname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Product Name" />
                    </div>
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={price} onChange={(e) => setProductPrice(e.target.value)} type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Price" />
                    </div>
                    
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">

                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                        <input onChange={(e) => setFile(e.target.files)} type="file" name="file" multiple class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" />
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                    </div>




                    <div className="relative md:w-[70%] w-full justify-center items-center mb-5 group">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                        <textarea value={description} onChange={(e) => setProductDescription(e.target.value)} id="description" rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Describe the product..."></textarea>
                    </div>
                    <div className="relative w-full justify-center items-center mb-5 group">
                        <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Create Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;
