
import React, { useState } from "react";

export default function Tab1() {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", address: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('fullname', 'email', 'phone', 'address')

    fetch("http://developers.gictsystems.com/api/dummy/submit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

      .then((response) => {
        if (response.ok) {
          alert("Success");
        } else {
          alert("Validation Error");
        }
      })

      .catch((error) => {
        alert("Error");
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="your full name" 
      value={formData.fullName} onChange={handleChange} required/><br/><br/>

      <input type="email" name="email" placeholder="email" 
      value={formData.email} onChange={handleChange} required/><br/><br/>

      <input type="tel" name="phone" placeholder="phone" 
      value={formData.phone} onChange={handleChange} required/><br/><br/>

      <input type="text" name="address" placeholder="address" 
      value={formData.address} onChange={handleChange} required/><br/><br/>

      <button type="submit">Submit</button>
    </form>
  );
}
