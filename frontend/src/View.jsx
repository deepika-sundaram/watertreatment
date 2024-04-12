import React, { useEffect, useState } from 'react';
import './view.css'


   
export function View() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/view`, {
                method: 'GET',
            });
            const result = await response.json();
            console.log(result);
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className='view'>
            <table className="entered_Data">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Temperature</th>
                        <th>PH</th>
                        <th>Chlorine Concentration</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((info) => (
                        <tr key={info.id}>
                            <td>{info.id}</td>
                            <td>{info.temperature}</td>
                            <td>{info.ph}</td>
                            <td>{info.chlorine_concentration}</td>
                            <td>{info.event_timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
