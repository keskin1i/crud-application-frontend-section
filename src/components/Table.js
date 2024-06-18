import React from 'react';
import EditRecord from './EditRecord';

const Table = ({ records, setEditing, deleteRecord, updateRecord, editing }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Doğum Tarihi</th>
            <th>Cinsiyet</th>
            <th>Tuttuğu Takım</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            editing && editing.id === record.id ? (
              <EditRecord
                key={record.id}
                record={record}
                updateRecord={updateRecord}
                setEditing={setEditing}
              />
            ) : (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.isim}</td>
                <td>{record.soyisim}</td>
                <td>{record.dogumTarihi}</td>
                <td>{record.cinsiyet}</td>
                <td>{record.tuttuguTakim}</td>
                <td>
                  <button className="edit" onClick={() => setEditing(record)}>Düzenle</button>
                  <button className="delete" onClick={() => deleteRecord(record.id)}>Sil</button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
