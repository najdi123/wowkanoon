import React, {useEffect, useState} from 'react';
import  styles from './table.module.css'
import axios from 'axios'

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://wow.kanoon.ir/api/contest/winners',
        })
            .then((res) => {
                setData(res.data['winners'])
            }).catch(err => console.log(err));
    }, [])

    return (
        <table className="table table-striped mt-4">
            <thead>
            <tr className={styles.borderNone}>
                <th scope="col"/>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Grade</th>
                <th scope="col">Words</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item, index) => {
                return (<tr key={index}>
                    <th scope="row">{index + 1}{'.'}</th>
                    <td>{item.Name}</td>
                    <td>{item.Score}</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>)
            })}
            </tbody>
        </table>
    );
};

export default Table;
