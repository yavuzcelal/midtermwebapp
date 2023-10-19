import React, { useState } from 'react';
import './App.css';
const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: '',
        });
    };

    return (
        <div className="container">
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="electronics">Electronics</option>
                        <option value="apparel">Apparel</option>
                        <option value="food">Food</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;