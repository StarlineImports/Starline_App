// Imports Bibliotecas 
import React, { useEffect, useRef, useState } from 'react'

// Import Css
import './AdminPix.css'

// Imports Components
import AdminPixDropDownAdd from './AdminPixModal/AdminPixDropDownAdd';
import AdminDropDownPixDel from './AdminPixModal/AdminDropDownlPixDel';

// Imports Icons imgs e assets
import LogoPix from '../../../assets/LogoPix.png'
import { MdMoreVert, MdOutlineAdd, MdKey, MdEmail, MdSmartphone } from "react-icons/md";

const Adminpix = () => {
    const dropdownAddRef = useRef(null);
    const dropdownDelRef = useRef(null);

    const [isDropdownAddOpen, setIsDropdownAddOpen] = useState(false);
    const toggleDropdownAdd = () => {
        setIsDropdownAddOpen(PrevState => !PrevState);
    }; // Alterna o estado de aberto/fechado do dropdown  
    const [pixKeys, setPixKeys] = useState([
        { h4Text: 'Chave aleatória', spanText: '4d6a7f8d-9e10-11e1-a9e2-3f4g5h6i7j8k', icon: <MdKey /> },
        { h4Text: 'E-mail', spanText: 'fulanodetal@gmail.com', icon: <MdEmail /> },
        { h4Text: 'Celular', spanText: '(98)-99884-3251', icon: <MdSmartphone /> }
    ]);
    const [selectedKey, setSelectedKey] = useState({ h4Text: '', spanText: '' });

    // Estado do dropdown icone para Del
    const [isDropdownDelOpen, setIsDropdownDelOpen] = useState(false);
    const toggleDropdownDel = (h4Text, spanText) => {
        setSelectedKey({ h4Text, spanText });
        setIsDropdownDelOpen(prevState => !prevState);
    };

    const handleDeletePixKey = () => {
        setPixKeys(pixKeys.filter(key => key.h4Text !== selectedKey.h4Text || key.spanText !== selectedKey.spanText));
        setIsDropdownDelOpen(false);
    };

    // Fecha o dropdown ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownAddRef.current && !dropdownAddRef.current.contains(event.target)) {
                setIsDropdownAddOpen(false);
            }
            if (dropdownDelRef.current && !dropdownDelRef.current.contains(event.target)) {
                setIsDropdownDelOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownAddRef, dropdownDelRef]);


    // Função para adicionar nova chave Pix
    const handleSavePixKey = (selectedKey, inputValue) => {
        setPixKeys([...pixKeys, { h4Text: selectedKey, spanText: inputValue, icon: <MdKey /> }]);
        setIsDropdownAddOpen(false);
    };

    return (
        <main className='container-pix-geral'>
            <div className="container-pix">
                <div className="Pix-Logo">
                    <img src={LogoPix} alt="Logo Pix" />
                    <div className="Pix-Text">
                        <p>Com PIX, você receberá suas transferências a qualquer hora do dia!</p>
                        <p>Cadastre agora mesmo sua chave Pix!</p>
                    </div>
                </div>
                <div className="pix-minhas-chaves-container">
                    <div className="pix-minhas-chaves">
                        <h2>Minhas Chaves</h2>
                        <div className="dropdown-container" ref={dropdownAddRef}>
                            <MdOutlineAdd
                                onClick={toggleDropdownAdd}
                            />
                            <AdminPixDropDownAdd
                                isOpen={isDropdownAddOpen}
                                onSave={handleSavePixKey}
                            />
                        </div>
                    </div>
                    {pixKeys.map((key, index) => (
                        <div key={index} className="pix-info">
                            <div className="conatiner-pix-flex">
                                {key.icon}
                                <h4>{key.h4Text}</h4>
                                <div className="Pix-i-flex">
                                    <MdMoreVert onClick={() => toggleDropdownDel(key.h4Text, key.spanText)} />
                                </div>
                            </div>
                            <span>{key.spanText}</span>
                        </div>
                    ))}
                </div>
                <div className="dropdown-container" ref={dropdownDelRef}>
                    <AdminDropDownPixDel
                        h4Text={selectedKey.h4Text}
                        spanText={selectedKey.spanText}
                        isOpen={isDropdownDelOpen}
                        onDelete={handleDeletePixKey}
                    />
                </div>
            </div>

        </main>
    )
}

export default Adminpix
