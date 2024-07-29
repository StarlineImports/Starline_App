// Import Bibliotecas
import React, { useState, useEffect } from "react";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fireDB, fireStorage } from "../../../../firebase";
import { toast } from "react-hot-toast";

// Import CSS
import "./addProductModal.css";

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

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Adicionar Produto</h2>
        <form onSubmit={handleSubmit} className="row">
          <div className="form-group col-6">
            <label htmlFor="name">Nome do produto</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-3">
            <label htmlFor="stock">Quantidade</label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="form-control"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-3">
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
          <div className="form-group col-3">
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-3">
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
          <div className="form-group col-3">
            <label htmlFor="subcategory">Tamanho</label>
            <select
              id="subcategory"
              name="subcategory"
              className="form-control"
              value={formData.subcategory}
              onChange={handleChange}
              required
            >
              <option value="">Escolha um tamanho</option>
              <option value="p">P</option>
              <option value="m">M</option>
              <option value="g">G</option>
              <option value="gg">GG</option>
            </select>
          </div>
          <div className="form-group col-3">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              className="form-control"
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
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-8">
            <label htmlFor="image">Imagem</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="form-group col-1 d-flex mt15">
            <label htmlFor="image" className="mr10 mt10">
              Atacado
            </label>
            <input
              className="form-check-input mt15"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
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
