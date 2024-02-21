import LoginComponent from "./LoginComponent";
import LogoComponent from "./LogoComponent";
import MenuComponent from "./MenuComponent";
import SearchComponent from "./SearchComponent";

function HeaderBottomComonent(){
    return (
        <div className="container header-bottom">
            <LogoComponent />
            <MenuComponent/>
            <SearchComponent />
            <LoginComponent />
        </div>
    )
}

export default HeaderBottomComonent;