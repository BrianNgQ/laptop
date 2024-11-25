import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng 'react-dom/client' thay vì 'react-dom'
import App from "./App";
import "./styles/App.css"; // Đảm bảo đường dẫn CSS

// Tạo root và render ứng dụng vào phần tử có id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
