import SideBar from "../../../components/SideBar/SideBar";
import { Button, DatePicker, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import "../AdminPage/AdminPage.css";

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(
        "http://157.245.145.162:8080/api/produt"
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Admin">
      <SideBar></SideBar>

      <div className="admin-content">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.imgURL1} alt="" />
              <p>{product.description}</p>
              <p>{product.type}</p>
              <p>{product.metal}</p>
              <p>{product.karat}</p>
              <p>{product.importDate}</p>
              <p>{product.giaReportNumber}</p>
              <p>{product.shape}</p>
              <p>{product.carat}</p>
              <p>{product.color}</p>
              <p>{product.clarity}</p>
              <p>{product.cut}</p>
              <p>{product.dateOfIssues}</p>
              <p>{product.cost}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
