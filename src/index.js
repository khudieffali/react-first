import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {BasketProvider} from './contexts/BasketContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ChakraProvider } from '@chakra-ui/react';
import store from './pages/Redux/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <LanguageProvider>
      <ChakraProvider>
      <App />
      </ChakraProvider>
      </LanguageProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
