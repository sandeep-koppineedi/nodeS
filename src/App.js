// src/App.js
import React from 'react';
import NewspaperForm from './NewspaperForm';
import NewspaperList from './NewspaperList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center my-8 font-bold">
        Newspaper Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <NewspaperForm />
        </div>
        <div className="md:col-span-2">
          <NewspaperList />
        </div>
      </div>
    </div>
  );
}

export default App;
