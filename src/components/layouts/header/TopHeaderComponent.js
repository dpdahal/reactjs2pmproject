import { Link } from "react-router-dom";
function TopHeaderCompoent() {
    return (
        <div className="top-header">
            <div className="container">
                <ul className="float-end d-flex">
                    <li><Link to="/">Resources</Link></li>
                    <li><Link to="/">Simplilearn for Business</Link></li>
                    <li><Link to="/">Become an Instructor</Link></li>
                    <li><Link to="/">Partners</Link></li>
                    <li><Link to="/">Reviews</Link></li>                  
                </ul>
            </div>
        </div>
    );
}
export default TopHeaderCompoent;