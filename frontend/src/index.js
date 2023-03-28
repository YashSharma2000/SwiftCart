import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginContextProvider from './context/LoginContext';
import NavbarContextProvider from './context/NavbarContext';
import { AllProductsContextProvider, ProductDetailContextProvider } from './context/ProductContext';
import RegisterContextProvider from './context/RegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RegisterContextProvider>
    <LoginContextProvider>
      <AllProductsContextProvider>
        <ProductDetailContextProvider>
          <NavbarContextProvider>
            <App />
          </NavbarContextProvider>
        </ProductDetailContextProvider>
      </AllProductsContextProvider>
    </LoginContextProvider>
  </RegisterContextProvider>
);

