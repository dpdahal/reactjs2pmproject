import { Link } from "react-router-dom";
function MenuComponent(){
    return (
        <div className="coures-menu">
            <ul>
                <li>
                    <Link to="#" className="category-menu">
                    <i class="bi bi-grid-3x3-gap"></i> All Courses</Link>
                    <ul className="mega-menu">
                        <li>Course list here</li>
                    </ul>

                </li>
               
            </ul>
        </div>
    )
}

export default MenuComponent;