import { Link } from "react-router-dom";
function MenuComponent() {
    return (
        <div className="coures-menu">
            <ul>
                <li>
                    <Link to="#" className="category-menu">
                        <i class="bi bi-grid-3x3-gap"></i> All Courses</Link>
                    <ul className="mega-menu">
                        <div className="mega-menu-left" id="style-4">
                            <div className="menu-title">Categories</div>
                            <ul id="style-4">
                                <li><Link to="#">Data Science & Business Analytics</Link></li>
                                <li><Link to="#">Digital Marketing</Link></li>
                                <li><Link to="#">Programming & Development</Link></li>
                                <li><Link to="#">Project Management</Link></li>
                                <li><Link to="#">Finance & Accounting</Link></li>
                                <li><Link to="#">IT & Software</Link></li>
                                <li><Link to="#">Marketing</Link></li>
                                <li><Link to="#">Personal Development</Link></li>
                                <li><Link to="#">Design</Link></li>
                                <li><Link to="#">Lifestyle</Link></li>
                                <li><Link to="#">Photography</Link></li>
                                <li><Link to="#">Health & Fitness</Link></li>
                                <li><Link to="#">Music</Link></li>
                                <li><Link to="#">Teaching & Academics</Link></li>
                                <li><Link to="#">Language</Link></li>
                                <li><Link to="#">Office Productivity</Link></li>
                                <li><Link to="#">Humanities</Link></li>
                                <li><Link to="#">Engineering</Link></li>
                                <li><Link to="#">Science</Link></li>
                                <li><Link to="#">Social Science</Link></li>
                                <li><Link to="#">Mathematics</Link></li>
                                <li><Link to="#">Education</Link></li>
                                <li><Link to="#">Food & Nutrition</Link></li>
                                <li><Link to="#">Beauty & Makeup</Link></li>
                                <li><Link to="#">Travel</Link></li>


                            </ul>
                        </div>

                        <div className="mege-menu-right">
                            <div className="right-box-top" id="rscroll">
                            <div className="course-list-box">
                                    <div className="right-course"></div>
                                    <div className="right-course"></div>
                                    <div className="right-course"></div>
                                    <div className="right-course"></div>
                                    <div className="right-course"></div>
                                    <div className="right-course"></div>
                                </div>
                            </div>

                            <div className="right-box-bottom">
                                this is footer section
                            </div>

                        </div>
                    </ul>

                </li>

            </ul>
        </div>
    )
}

export default MenuComponent;