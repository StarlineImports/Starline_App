import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent.jsx";
import ProfileOverlay from "../../components/profile/perfilMenu.jsx";
import MyItems from "../myItems/myItems.jsx";
import ProfileInfo from "../../components/profileInfo/perfilInfo.jsx";
import "../../components/profileInfo/perfilInfo.css"

function Perfil() {
    return (
        <>
            <HeaderComponent />
            <div>
                <div className=".profile-info-box">
                    
                    <ProfileInfo/>
                </div>
                
                <MyItems/>
            </div>
            <div>
                <form></form>
            </div>
        </>
    );
}
 
export default Perfil;