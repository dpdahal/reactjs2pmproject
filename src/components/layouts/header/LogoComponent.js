import Logo from '../../../image/Logo.svgz';
function LogoComponent(){
    
    return (
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
    )
}


export default LogoComponent;