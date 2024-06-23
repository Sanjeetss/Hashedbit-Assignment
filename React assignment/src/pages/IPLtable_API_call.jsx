import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/IPLtable_API_call.css'; 

function IPL_PointTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData(){
        try{
            const response = await axios.get("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
            const data = response.data.sort((a, b) =>a.NRR - b.NRR);
            setData(data);
            setLoading(false);
        }
        catch(error){
            console.error("Error getting data", error);
        }
    }
    getData();
  }, []);
  const col = [
    {Headers: 'No', accessor: 'No' },
    {Headers: 'Team', accessor: 'Team' },
    {Headers: 'Matches', accessor: 'Matches' },
    {Headers: 'Won', accessor: 'Won' },
    {Headers: 'Lost', accessor: 'tses' },
    {Headers: 'NRR', accessor: 'NRR' },
    {Headers: 'Points', accessor: 'Points' },
  ];

  return (
    <div className='page_body'>
        <h1>IPL-2022 Points Table</h1>
        {loading? (<p>Loading...</p>):(
            <table className='table'>
                <thead>
                    <tr>
                        {col.map((item, index) => (
                            <th key={index}>{item.Headers}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.No}</td>
                            <td>{item.Team}</td>
                            <td>{item.Matches}</td>
                            <td>{item.Won}</td>
                            <td>{item.Lost}</td>
                            <td>{item.NRR}</td>
                            <td>{item.Points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}
export default IPL_PointTable;