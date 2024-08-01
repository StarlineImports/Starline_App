// Imports bibliotecas
import React, { useState, useEffect } from 'react';

// Import Css
import './adminCategoryModal.css'
import '../../../../AdminGlobal.css'

// Imports de Icones
import { IoMdImages } from 'react-icons/io';
import { MdArrowDropDown } from "react-icons/md";

const adminCategoryModal = ({ onClose }) => {
    
    // Função para mostrar e esconder o dropdown prefixação de preço
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };
    // Implementando efeito de mostrar o dropdown de prefixação de preço
    useEffect(() => {
        const dropdown = document.getElementById("dropdown");

        if (dropdown) {
            if (isDropdownVisible) {
                setTimeout(() => {
                    dropdown.classList.add("dropdown-show");
                }, 10);
            } else {
                dropdown.classList.remove("dropdown-show");
            }
            }
    }, [isDropdownVisible]);


    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        subcategory: '',
        image: null
    });
    
    // Função para adicionar imagem
    const [previewImage, setPreviewImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Implementando efeito de showModal
    useEffect(() => {
        const overlay = document.getElementById("modalOverlay");
        const modal = document.getElementById("modal");

        setTimeout(() => {
            overlay.classList.add("show");
            modal.classList.add("show");

        }, 5);

        return () => {
            overlay.classList.remove("show");
            modal.classList.remove("show");
        };
    }, []);

    return (
        <div className="modal-overlay modal-category" id="modalOverlay">
            <div className="modal-content" id="modal">
                <h2>Adicionar Categoria</h2>
                <form onSubmit={""} className="form-add-category">
                    <div className="form-seçao-1">
                        <div className="form-img">
                            {previewImage && (
                                <div className="image-preview">
                                    <img
                                        className="modal-image "
                                        src={previewImage}
                                        alt="Preview"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="form-add-img">
                            <i><IoMdImages /></i>
                            <input
                                className="form-control"
                                type="file"
                                id="image"
                                alt='Imagem do produto'
                                name="image"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-category">
                        <label htmlFor="name">Nome da categoria</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Adicione o nome da categoria"
                            required
                        />
                    </div>

                    <div className="form-seçao-2">

                        <div className="form-dropdow-category">
                            <button type='button' onClick={toggleDropdown}>
                                Prefixação de preço por Atacado
                                <i><MdArrowDropDown /></i>
                            </button>
                            <div id='dropdown' className={`form-dropdow-prefix ${isDropdownVisible ? 'dropdown-show' : ''}`}>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label id='price' htmlFor="Prefix">1 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label id='price' htmlFor="Prefix">5 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label htmlFor="checkbox">8 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label htmlFor="checkbox">12 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label htmlFor="checkbox">25 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label htmlFor="checkbox">40 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label htmlFor="checkbox">70 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price'
                                        name='price'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox'
                                        name='checkbox'
                                    />
                                    <label htmlFor="checkbox">100 UND</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-100'
                                        name='price-100'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="form-descrition">
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Adicione a descrição do produto"
                        />
                    </div>


                    <div className="modal-buttons">
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default adminCategoryModal
