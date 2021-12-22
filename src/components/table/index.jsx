import React, { useState, useContext, useEffect } from 'react';
import styles from '../../assets/css/table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TableContext } from '../../common/context';
const Table = () => {
    const { data, setData } = useContext(TableContext);

    useEffect(() => (
      
       console.log(data)
    ), [data])

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
                        <tr key={key}>
                            <td>{value.description}</td>
                            <td>{value.type == 'e' ? 'Entrada' : 'Saída'}</td>
                            <td>{value.category}</td>
                            <td>{value.value}</td>
                            <td><FontAwesomeIcon icon={faEdit} /> <FontAwesomeIcon icon={faTrash} /></td>
                        </tr>
                    ))
                    }
              </tbody>

            </table>
        </div>
    )
}

export default Table;