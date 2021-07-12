import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

function PhoneBookForm({
  name,
  lastName,
  phone,
  setName,
  setLastName,
  setPhone,
  submit,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        defaultValue={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        defaultValue={lastName}
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        defaultValue={phone}
        type="text"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        onClick={submit}
      />
    </form>
  );
}

function InformationTable({ info }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {info
          .sort((a, b) => a.lastName.localeCompare(b.name))
          .map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
      </thead>
    </table>
  );
}

function Application(props) {
  const [name, setName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');
  const [info, setInfo] = useState([]);

  const handleSubmit = () => {
    setInfo((oldArr) => [
      ...oldArr,
      {
        id: oldArr.length,
        name: name,
        lastName: lastName,
        phone: phone,
      },
    ]);
  };

  return (
    <section>
      <PhoneBookForm
        setName={setName}
        setLastName={setLastName}
        setPhone={setPhone}
        submit={handleSubmit}
        name={name}
        lastName={lastName}
        phone={phone}
      />

      <InformationTable info={info} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById('root'));
