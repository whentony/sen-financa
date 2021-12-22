import React, {useState} from 'react';
import styles from '../../assets/css/bar-util.module.css'

const BarUtil = () => {
    const [description, setDescription] = useState();
    const [type, setType] = useState();
    const [value, setValue] = useState();
    
    return(
        <div className={styles.containerBarUtil}>
            <div>
                Digite os dados a seguir:
            </div>
            <div>
                Descricao:
                <input type='text' />
            </div>
            <div>
                Tipo: 
                <select>
                    <option value='e'>Entrada</option>
                    <option value='s'>Saida</option>
                </select>
            </div>
            <div>
                Valor:
                <input type='number' />
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default BarUtil;