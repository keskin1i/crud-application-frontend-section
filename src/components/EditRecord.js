import React, { useState } from 'react';

const EditRecord = ({ record, updateRecord, setEditing }) => {
  const [editRecord, setEditRecord] = useState(record);

  const handleChange = (e) => {
    setEditRecord({ ...editRecord, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateRecord(editRecord.id, editRecord);
    setEditing(null);
  };

  return (
    <tr>
      <td>{editRecord.id}</td>
      <td>
        <input
          type="text"
          name="isim"
          value={editRecord.isim}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="soyisim"
          value={editRecord.soyisim}
          onChange={handleChange}
        />
      </td>
      <td> 
        <input
          type="date"
          name="dogumTarihi"
          value={editRecord.dogumTarihi}
          onChange={handleChange}
        />
      </td>
      <td>
        <select
          name="cinsiyet"
          value={editRecord.cinsiyet}
          onChange={handleChange}
        >
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          name="tuttuguTakim"
          value={editRecord.tuttuguTakim}
          onChange={handleChange}
        />
      </td>
      <td>
        <button className="update" onClick={handleUpdate}>Güncelle</button>
        <button className="cancel" onClick={() => setEditing(null)}>İptal</button>
      </td>
    </tr>
  );
};

export default EditRecord;
