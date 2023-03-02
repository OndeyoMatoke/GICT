import React, { useState, useEffect } from "react";
import axios from "axios";



export default function Tab2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://developers.gictsystems.com/api/dummy/items/", {
          headers: {
            Authorization: "ALDJAK23423JKSLAJAF23423J23SAD3",
          },
        });
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleEdit = (id) => {
    // handle edit 
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
