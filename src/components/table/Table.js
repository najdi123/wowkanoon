import React, {useEffect, useState} from 'react';
import  styles from './table.module.css';
import axios from 'axios';

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const Url = 'http://wow.kanoon.ir/api/contest/winners';
        axios({
            method: 'GET',
            url: proxyUrl+Url,
        })
            .then((res) => {
                console.log("res: ",res)
                setData(res.data['winners'])
            }).catch(err => console.log(err));
    }, [])

    return (
     <div className='container'>
         <table className="table table-striped mt-4">
             <thead>
             <tr  className={styles.borderNone}>
                 <th className={styles.header} scope="col"/>
                 <th scope="col">Name<div className={styles.header}/></th>
                 <th scope="col">Score<div className={styles.header}/></th>
                 <th scope="col">Grade<div className={styles.header}/></th>
                 <th scope="col">Words<div className={styles.header}/></th>
                 <th scope="col"><div className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
                 <th scope="col"><div  className={styles.header}/></th>
             </tr>
             </thead>
             <tbody>
             {data && data.map((item, index) => {
                 return (<tr className={styles.row} key={index}>
                     <th className={styles.index} scope="row">
                         {index + 1}{'.'}
                         <i className={`fas fa-user ${styles.icon}`}></i>
                     </th>
                     <td>{item.Name}{'  '}{item.Family}</td>
                     <td>{item.Score}</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                 </tr>)
             })}
             </tbody>
         </table>

     </div>
    );
};

export default Table;
