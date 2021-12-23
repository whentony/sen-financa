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
        //Get data in localstorage
     
       
        if(localStorage.getItem('p') == 'true'){
            console.log(data)
            setData(JSON.parse(localStorage.getItem("data")))
        }
        localStorage.setItem('p', true)

    }, [])

    useEffect(() => {
        
        let aux = 0
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == 'e') {
                    aux = aux + parseFloat(data[i].value)
                } else {
                    aux = aux - parseFloat(data[i].value)
                }
            }
            setTotal(aux)
        }
    }, [data]);

    const handleInsert = (e) => {
        e.preventDefault()
        setData(data => [...data, { description: description, type: type, category: category, value: value }])
        
    }

    return (
        <form onSubmit={(e) => handleInsert(e)}>
            <div className={styles.containerBarUtil}>

                <div className='boxOutros'>
                    <span className={styles.title}> Descrição </span>
                    <input type='text' onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className='boxOutros'>
                    <span className={styles.title}> Tipo </span>
                    <select onChange={(e) => setType(e.target.value)}>
                        <option value='e'>Entrada</option>
                        <option value='s'>Saida</option>
                    </select>
                </div>
                <div className='boxOutros'>
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
                <div className='boxOutros'>
                    <span className={styles.title}> Valor </span>
                    <input type='number' onChange={(e) => setValue(e.target.value)} placeholder='00,00' required />
                </div>
                <div className='boxOutros'>
                    <button type='submit'>Enviar</button>
                </div>

                <div className={total >= 0 ? 'entrada boxSaldo'  : 'saida boxSaldo' }>
                    <span className={styles.title}>Saldo</span> R$ {total.toFixed(2)}
                </div>
            </div>
        </form>
    )
}

export default BarUtil;