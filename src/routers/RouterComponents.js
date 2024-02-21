import {Routes,Route} from 'react-router-dom';
import HomeComponent from '../components/pages/HomeComponent';

function RouterComponents() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
            </Routes>
        </div>
    );
}

export default RouterComponents;