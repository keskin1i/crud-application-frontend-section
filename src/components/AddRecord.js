import React, { useState } from 'react'; 

const AddRecord = ({ addRecord }) => {
  const [newRecord, setNewRecord] = useState({ isim: '', soyisim: '', dogumTarihi: '', cinsiyet: '', tuttuguTakim: '' });

  const handleChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(newRecord);
    setNewRecord({ isim: '', soyisim: '', dogumTarihi: '', cinsiyet: '', tuttuguTakim: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="isim"
        value={newRecord.isim}
        onChange={handleChange}
        placeholder="İsim"
      />
      <input
        type="text"
        name="soyisim"
        value={newRecord.soyisim}
        onChange={handleChange}
        placeholder="Soyisim"
      />
      <input
        type="date"
        name="dogumTarihi"
        value={newRecord.dogumTarihi}
        onChange={handleChange}
        placeholder="Doğum Tarihi"
      />
      <select
        name="cinsiyet"
        value={newRecord.cinsiyet}
        onChange={handleChange}
      >
        <option value="Erkek">Erkek</option>
        <option value="Kadın">Kadın</option>
      </select>
      <input
        type="text"
        name="tuttuguTakim"
        value={newRecord.tuttuguTakim}
        onChange={handleChange}
        placeholder="Tuttuğu Takım"
      />
      <button className="add" type="submit">Ekle</button>
    </form>
  );
};

export default AddRecord;
