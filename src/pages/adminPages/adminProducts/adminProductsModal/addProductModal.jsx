// Import Bibliotecas
import React, { useState, useEffect } from "react";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fireDB, fireStorage } from "../../../../firebase";
import { toast } from "react-hot-toast";

// Import CSS
import "./addProductModal.css";
import "../../../../AdminGlobal.css";

// Imports de Icones
import {
    MdCategory,
} from "react-icons/md";
import { IoMdImages } from "react-icons/io";

const AddProductModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        subcategory: "",
        image: "",
        cost: "",
        category: "",
        description: "",
    });
    const [categories, setCategories] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryCollection = collection(fireDB, "category");
                const categorySnapshot = await getDocs(categoryCollection);
                const categoryList = categorySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCategories(categoryList);
            } catch (error) {
                toast.error("Erro ao buscar categorias: ", error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "category") {
            const selectedCategory = categories.find(
                (category) => category.name === value
            );
            if (selectedCategory) {
                setFormData({
                    ...formData,
                    [name]: value,
                    price: selectedCategory.preço || formData.price,
                });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = Date.now().toString();

        let imageUrl = "";
        if (formData.image) {
            try {
                const storageRef = ref(fireStorage, `products/${id}`);
                await uploadBytes(storageRef, formData.image);
                imageUrl = await getDownloadURL(storageRef);
                toast.success("Imagem carregada com sucesso:", imageUrl);
            } catch (uploadError) {
                toast.error("Erro ao carregar a imagem:", uploadError);
                return;
            }
        }

        try {
            await setDoc(doc(fireDB, "products", id), {
                ...formData,
                image: imageUrl,
                id,
            });
            toast.success("Produto adicionado com sucesso");
            onClose();
        } catch (error) {
            toast.error("Erro ao adicionar produto: ", error);
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
        <div className="modal-overlay" id="modalOverlay">
            <div className="modal-content" id="modal">
                <h2>Adicionar Produto</h2>
                <form onSubmit={handleSubmit} className="form-add-product">
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
                        <div className="form-product">
                            <label htmlFor="name">Nome do produto</label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome do produto"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="stock">Quantidade</label>
                            <input
                                className="form-control"
                                type="number"
                                id="stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-seçao-2">
                        <div className="form-custo">
                            <label htmlFor="cost">Valor de Custo</label>
                            <input
                                id="cost"
                                name="cost"
                                className="form-control"
                                value={formData.cost}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-price">
                            <label htmlFor="price">Preço Unit</label>
                            <input
                                className="form-control"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-checkbox">
                            <input
                                className="Form-control"
                                type="checkbox"
                                value="Atacado"
                                id="flexCheckDefault"
                            ></input>
                            <label htmlFor="flexCheckDefault">Atacado</label>
                        </div>
                    </div>
                    <div className="form-seçao-2">
                        <div className="form-dropdow">
                            <label htmlFor="subcategory">Tamanho</label>
                            <select
                                className=""
                                id="subcategory"
                                name="subcategory"
                                value={formData.subcategory}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Tamanho</option>
                                <option value="p">P</option>
                                <option value="m">M</option>
                                <option value="g">G</option>
                                <option value="gg">GG</option>
                            </select>
                        </div>
                        <div className="form-dropdow">
                            <label htmlFor="category">Categoria</label>
                            <select
                                id="category"
                                name="category"
                                className=""
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione uma categoria</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            className="btn-category"
                            type="button"
                        >
                            <i>
                                <MdCategory />
                            </i>{" "}
                            Adicionar Categoria
                        </button>
                    </div>

                    <div className="form-descrition">
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-add-img">
                        <i><IoMdImages /></i>
                        <input
                            className="form-control"
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            required
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
    );
};

export default AddProductModal;
