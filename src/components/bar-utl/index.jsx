import React, { useState, useContext, useEffect } from 'react';
import styles from '../../assets/css/bar-util.module.css'
import { TableContext } from '../../common/context';

const BarUtil = () => {
    const [description, setDescription] = useState();
    const [type, setType] = useState();
    const [value, setValue] = useState();
    const [category, setCategory] = useState();
    const [total, setTotal] = useState(0);
    const { data, setData } = useContext(TableContext);
    
    useEffect(() => {
        let aux = 0
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].type)
                if(data[i].type == 'e')
                aux = parseFloat(data[i].value) + aux
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
       
            <div>
                Descricao:
                <input type='text' onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                Tipo:
                <select onChange={(e) => setType(e.target.value)}>
                    <option value='e'>Entrada</option>
                    <option value='s'>Saida</option>
                </select>
            </div>
            <div>
                Categoria:
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                </select>
            </div>
            <div>
                Valor:
                <input type='number' onChange={(e) => setValue(e.target.value)} />
            </div>
            <div>
                <button onClick={() => handleInsert()}>Enviar</button>
            </div>
            <div>
                Saldo: {total.toFixed(2)}
            </div>
        </div>
    )
}

export default BarUtil;