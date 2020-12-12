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
            <tr  className={styles.borderNone}>
                <th className={styles.header} scope="col"/>
                <th scope="col">Name<div style={{height:30}}/></th>
                <th scope="col">Score<div style={{height:30}}/></th>
                <th scope="col">Grade<div style={{height:30}}/></th>
                <th scope="col">Words<div style={{height:30}}/></th>

            </tr>
            </thead>
            <tbody>
            {data && data.map((item, index) => {
                return (<tr key={index}>
                    <th className={styles.normal} scope="row">
                        {index + 1}{'.'}
                    <i className={`fas fa-user ${styles.normal}`}></i>
                    </th>
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
