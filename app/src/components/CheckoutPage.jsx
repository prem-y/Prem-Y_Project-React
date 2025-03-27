import React, { useState } from "react";
import "../styles/CheckoutPage.css"

const CheckoutPage = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart"))
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim())
            newErrors.name = "Name is required";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            newErrors.email = "Enter a valid email";
        if (!formData.phone.match(/^\d{10}$/))
            newErrors.phone = "Enter a valid 10-digit phone number";
        if (!formData.address.trim()) 
            newErrors.address = "Address is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
        }
    };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <button type="submit" className="submit-button">Place Order</button>
        </form>
      ) : (
        <div className="summary">
          <h3>Order Summary</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          
          <h4>Cart Items:</h4>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.title} - ₹{item.price} x {item.quantity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
