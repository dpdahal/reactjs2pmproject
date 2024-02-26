import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Style from './scss/Style.scss';
import HeaderComponent from './components/layouts/HeaderComponent';
import FooterComponent from './components/layouts/FooterComponent';
import RouterComponents from './routers/RouterComponents';
function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <RouterComponents />
      <FooterComponent />     
    </React.Fragment>
  );
}

export default App;
