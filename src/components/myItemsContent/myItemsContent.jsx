import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Form from "react-bootstrap/Form";
import "./myItemsContent.css";
import MyItemsTop from '../myItemsTop/myItemsTop'
import Img from '../myItemsContent/Headset.webp'
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from  '../details/details.jsx'

const MyItemsContent = () => {
  const [modalShow, setModalShow] = React.useState(false);

    return ( 
        <>
            <div className="myItems-Content">

                <div className="Content">
                    
                    <div className="Content-top">
                        <div className="Content-top-info">
                        <h3 className="item-order">Pedido: 15565-78</h3>
                        </div>
                        <div className="btn-top">
                            <Button variant="outline-warning" className="btn-help-order">AJUDA COM O PEDIDO</Button>{' '}
                            <Button variant="warning" className="btn-details" onClick={() => setModalShow(true)}>VER DETALHES</Button>{' '}
                        </div>
                    </div>
                   <div>
                    <div className="info-item">
                    <p className="status-item">Pedido Aprovado</p>
                    </div>
                    <div className="info-payment">
                    <p className="payment">Pagamento via PIX</p>
                    </div>
                    </div> 
                    <form className="form-content">
        
                        <img src={Img} alt="" srcset=""  className="img-content"/>
                        <h2 className="h1-form">HeadSet Top das Galaxias, Escuta o Som a 5Km, quando você respira com esse fone, você escuta o oxigenio conversando um com outro <br /> <p className="form-qtnd"> Quantidade </p></h2>
                    </form>
                </div>
            </div>  
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    );
}
 
export default MyItemsContent;