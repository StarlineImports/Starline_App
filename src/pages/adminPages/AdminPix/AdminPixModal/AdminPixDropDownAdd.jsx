// Imports Bibliotecas
import React, { useState } from 'react'
import InputMask from 'react-input-mask';

// Import CSS
import './AdminPixDropDownAdd.css'
import "../../../../AdminGlobal.css"

// Imports icons e imagens
import { MdSave } from "react-icons/md";


const AdminPixDropDownAdd = ({ isOpen }) => {
    if (!isOpen) return null;

    // Estado para armazenar a chave selecionada
    const [selectedKey, setSelectedKey] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSelectKey = (e) => {
        setSelectedKey(e.target.value);
        setInputValue('');
    };

    const renderInput = () => {
        switch (selectedKey) {
            case 'cpf':
                return <InputMask mask="999.999.999-99" placeholder="000.000.000-00" />;
            case 'cnpj':
                return <InputMask mask="99.999.999/9999-99" placeholder="00.000.000/0000-00" />;
            case 'telefone':
                return <InputMask mask="(99) 99999-9999" placeholder="(00) 00000-0000" />;
            case 'email':
                return <input type="email" placeholder="exemplo@dominio.com" />;
            case 'aleatoria':
                return <input type="text" placeholder="Chave Aleatória" readOnly />;
            default:
                return null;
        }
    };

    return (
        <main className="container-pix-menu-dropdown">
            <div className="DropDown-pix-add-container">
                <h2>Selecione o tipo de chave pix desejada!</h2>
                <select
                    name="chave pix"
                    id="chave-pix"
                    onChange={handleSelectKey}
                    value={selectedKey}
                >
                    <option value="selecione">Selecione</option>
                    <option value="cpf">CPF</option>
                    <option value="cnpj">CNPJ</option>
                    <option value="email">E-mail</option>
                    <option value="telefone">Telefone</option>
                    <option value="aleatoria">Chave Aleatória</option>s
                </select>
                {renderInput()}
                <button   
                    className="save-button"
                >
                    <MdSave />
                    Salvar
                </button>
            </div>
        </main>
    )
}

export default AdminPixDropDownAdd

