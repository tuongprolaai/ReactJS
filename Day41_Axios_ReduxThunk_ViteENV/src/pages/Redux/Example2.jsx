import http from "@/utils/http";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {actions as productActions} from "@/store/product";
import {actions as provinceActions} from "@/store/province";
const styles = {
  wrapper: { margin: 20 },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 20,
  },
  heading2: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 20,
  },
};

const Example2 = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);
  const provinces = useSelector((state) => state.product.list);
  useEffect(() => {
    (async () => {
      const response = await http.get("/products");
      dispatch(productActions.setList(response.data.items));
    })();
  }, [dispatch]);
  useEffect(() => {
    (async () => {
      const response = await http.get("/address/provinces");
      dispatch(provinceActions.setList(response.data));
    })();
  }, [dispatch]);
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Redux Demo 2</h1>
      <h2 style={styles.heading}>Products list</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <h2 style={styles.heading}>Provinces list</h2>
      <ul>
        {provinces.map((province) => (
          <li key={province.id}>{province.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example2;

// 1:27:41 -- 41