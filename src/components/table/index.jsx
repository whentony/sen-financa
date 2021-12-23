import React, { useState, useContext, useEffect } from 'react';
import styles from '../../assets/css/table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TableContext } from '../../common/context';
const Table = () => {
    const { data, setData } = useContext(TableContext);

    useEffect(() => {
        //set data in localstorage
        localStorage.setItem("data", JSON.stringify(data));
    }, [data])

    const handleRemove = (key, value) => {
        let d = data.filter(function(item) {
            return item !== value
        });
       setData([...d])
    }
    return (
        <div className={styles.containerTable}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th>Descrição</th>
                        <th>Tipo</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => (
                        <tr className={value.type == 'e' ? 'entrada' : 'saida'} key={key}>
                            <td>{value.description}</td>
                            <td>{value.type == 'e' ? 'Entrada' : 'Saída'}</td>
                            <td>{value.category}</td>
                            <td >R$ {value.value}</td>
                            <td><FontAwesomeIcon icon={faEdit} />  <FontAwesomeIcon onClick={() => handleRemove(key, value)} icon={faTrash} /></td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Table;