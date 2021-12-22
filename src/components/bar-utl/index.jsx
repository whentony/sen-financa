import React, { useState, useContext, useEffect } from 'react';
import styles from '../../assets/css/bar-util.module.css'
import { TableContext } from '../../common/context';

const BarUtil = () => {
    const [description, setDescription] = useState();
    const [type, setType] = useState('e');
    const [value, setValue] = useState();
    const [category, setCategory] = useState('Outros');
    const [total, setTotal] = useState(0);
    const { data, setData } = useContext(TableContext);

    useEffect(() => {
        let aux = 0
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].type)
                if (data[i].type == 'e') {
                    aux = aux + parseFloat(data[i].value)
                } else {
                    aux = aux - parseFloat(data[i].value)
                }
            }
            console.log(Number(aux))
            setTotal(aux)
        }
    }, [data]);

    const handleInsert = () => {
        setData(data => [...data, { description: description, type: type, category: category, value: value }])
    }

    return (
        <div className={styles.containerBarUtil}>

            <div className={styles.boxOutros}>
                <span className={styles.title}> Descrição </span>
                <input type='text' onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className={styles.boxOutros}>
                <span className={styles.title}> Tipo </span>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value='e'>Entrada</option>
                    <option value='s'>Saida</option>
                </select>
            </div>
            <div className={styles.boxOutros}>
                <span className={styles.title}> Categoria </span>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value='Alimentação'>Alimentação</option>
                    <option value='Lazer'>Lazer</option>
                    <option value='Transporte'>Transporte</option>
                    <option value='Família'>Família</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Outros'>Outros</option>

                </select>
            </div>
            <div className={styles.boxOutros}>
                <span className={styles.title}> Valor </span>
                <input type='number' onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.boxOutros}>
                <button onClick={() => handleInsert()}>Enviar</button>
            </div>
            <div className={styles.boxSaldo}>
                <span className={styles.title}>Saldo</span> {total.toFixed(2)}
            </div>
        </div>
    )
}

export default BarUtil;