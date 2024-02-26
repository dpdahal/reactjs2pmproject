import React from "react";
import LoginComponent from "./LoginComponent";
import LogoComponent from "./LogoComponent";
import MenuComponent from "./MenuComponent";
import SearchComponent from "./SearchComponent";

function HeaderBottomComonent() {
    return (
        <React.Fragment>
            <div className="container header-bottom">
                <LogoComponent />
                <MenuComponent />
                <SearchComponent />
                <LoginComponent />
            </div>
        </React.Fragment>
    )
}

export default HeaderBottomComonent;