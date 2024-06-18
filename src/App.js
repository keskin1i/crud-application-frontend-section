import React, { useState, useEffect } from 'react';
import KisiService from './services/KisiService';
import Table from './components/Table';
import AddRecord from './components/AddRecord';
import './App.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const response = await KisiService.getAllKisiler();
    setRecords(response.data);
  };

  const addRecord = async (record) => {
    const response = await KisiService.createKisi(record);
    setRecords([...records, response.data]);
  };

  const updateRecord = async (id, updatedRecord) => {
    const response = await KisiService.updateKisi(id, updatedRecord);
    setRecords(records.map((record) => (record.id === id ? response.data : record)));
  };

  const deleteRecord = async (id) => {
    await KisiService.deleteKisi(id);
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="App">
      <h1>Muhammet Keskin - CRUD Uygulaması</h1>
      <AddRecord addRecord={addRecord} />
      <Table 
        records={records} 
        setEditing={setEditing} 
        deleteRecord={deleteRecord} 
        updateRecord={updateRecord} 
        editing={editing}
      />
    </div>
  );
};

export default App;
