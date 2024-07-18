// src/NewspaperList.js
import React, { useState, useEffect } from 'react';

const NewspaperList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      };;
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mt-12">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-12">
        <p className="text-red-600">
          Failed to load data: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-12">
      {data.length === 0 ? (
        <p className="text-center text-lg">
          No records to display
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">S No</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Language</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{row.name}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={`https://via.placeholder.com/100?text=${row.username}`} alt={row.username} className="h-12" />
                  </td>
                  <td className="py-2 px-4 border-b">{row.email}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-600 hover:underline mr-2">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewspaperList;
