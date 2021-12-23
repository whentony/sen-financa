import React, { useState, useContext, useEffect } from 'react';
import styles from '../../assets/css/table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TableContext } from '../../common/context';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const Table = () => {
    const [description, setDescription] = useState();
    const [type, setType] = useState('e');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('Outros');
    const [keyC, setKeyC] = useState(0);
    const [dataOld, setDataOld] = useState()
    const { data, setData } = useContext(TableContext);
    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal(key, value) {
        setIsOpen(true);

        let d = data.filter(function (item) {
            return item === value
        });
        console.log()
        setDataOld(d[0])
        setDescription(d[0].description)
        setValue(d[0].value)
        setType(d[0].type)
        setCategory(d[0].category)
        setKeyC(key)
    }


    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        //set data in localstorage
        localStorage.setItem("data", JSON.stringify(data));
    }, [data])

    
    //Método de Edição do item da tabela
    const handleEdit = (e) => {
        e.preventDefault()
        console.log(data.indexOf(dataOld))
        var index = data.indexOf(dataOld);
        let d = []
        if (index !== -1) {
           let d = data[index] = { description: description, type: type, category: category, value: value };
        }

         setData([...data])
         setIsOpen(false);
    }

    //Método de Remoção do item da tabela
    const handleRemove = ( value) => {
        let d = data.filter(function (item) {
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
                            <td><FontAwesomeIcon onClick={() => openModal(key, value)} icon={faEdit} />  <FontAwesomeIcon onClick={() => handleRemove(value)} icon={faTrash} /></td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center'>Editar</h2>
                <form onSubmit={(e) => handleEdit(e)}>
                <div className='boxOutros'>
                    <span className={styles.title}> Descrição </span>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className='boxOutros'>
                    <span className={styles.title}> Valor </span>
                    <input type='number' value={value} onChange={(e) => setValue(e.target.value)} placeholder='00,00' required />
                </div>
                <div className='boxOutros'>
                    <button type='submit'>Enviar</button>
                </div>
                </form>
            </Modal>
        </div>
    )
}

export default Table;