import { useState, useEffect } from 'react'
import axios from 'axios'



import './App.css';

function App() {
  const [management, setManagement] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:8000/api/management', {
      header: {
        "Access-Control-Allow-Origin:": "*"
      }
    });
    setManagement(data)
    // await axios.get('localhost:8000/api/management').then((res) => {
    //   // setManagement(res.data)
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err)
    // })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className='table-danger'>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Telephone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            management.map((data, key) => {
              return (
                <tr>
                  <th scope="row" className='table-primary'>{key + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.department}</td>
                  <td>{data.telephone} <br />{data.additionalTelephone ? "," + data.additionalTelephone : null}</td>
                  <td>{data.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
