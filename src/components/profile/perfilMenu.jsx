import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./perfilMenu.css";
import { IoMdMenu } from "react-icons/io";

function ProfileOverlay() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="profile-ofcanvas">
        <Button variant="primary" onClick={handleShow}>
          <IoMdMenu />
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Perfil</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <button>aaaa</button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default ProfileOverlay;
