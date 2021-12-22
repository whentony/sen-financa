import React from 'react';
import styles from '../../assets/css/table.module.css';

const Table = () => {
    return (
        <div className={styles.containerTable}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Descricao</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Acoes</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Germany</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;