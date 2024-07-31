// Imports bibliotecas
import React, { useState, useEffect } from 'react';

// Import Css
import './adminCategoryModal.css'
import '../../../../AdminGlobal.css'

// Imports de Icones
import { IoMdImages } from 'react-icons/io';
import { MdArrowDropDown } from "react-icons/md";

const adminCategoryModal = ({ onClose }) => {
    const [previewImage, setPreviewImage] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        subcategory: '',
        image: null
    });

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

                        <div className="form-dropdow">
                            <label htmlFor="Prefix">Prefixação <i><MdArrowDropDown /></i></label>
                            <form className="form-dropdow-prefix">
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='1'
                                        name='1'
                                    />
                                    <label id='1' htmlFor="Prefix">1</label>
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
                                        id='5'
                                        name='5'
                                    />
                                    <label id='5' htmlFor="Prefix">5</label>
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
                                        id='checkbox-8'
                                        name='checkbox-8'
                                    />
                                    <label htmlFor="checkbox-8">8</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-8'
                                        name='price-8'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox-12'
                                        name='checkbox-12'
                                    />
                                    <label htmlFor="checkbox-12">12</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-12'
                                        name='price-12'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox-25'
                                        name='checkbox-25'
                                    />
                                    <label htmlFor="checkbox-25">25</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-25'
                                        name='price-25'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox-40'
                                        name='checkbox-40'
                                    />
                                    <label htmlFor="checkbox-40">40</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-40'
                                        name='price-40'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox-70'
                                        name='checkbox-70'
                                    />
                                    <label htmlFor="checkbox-70">70</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-70'
                                        name='price-70'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                                <div className="form-inputs">
                                    <input
                                        className='Form-check-input'
                                        type="checkbox"
                                        id='checkbox-100'
                                        name='checkbox-100'
                                    />
                                    <label htmlFor="checkbox-100">100</label>
                                    <input
                                        className='form-price'
                                        type="text"
                                        id='price-100'
                                        name='price-100'
                                        placeholder="Adicione o preço do produto"
                                    />
                                </div>
                            </form>

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
