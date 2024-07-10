import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { API_KEY_SUPABASE, URL_SUPABASE } from "../config/env";

const supabase = createClient(URL_SUPABASE, API_KEY_SUPABASE);

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log("error", error);
    }
    if (data) {
      console.log("data", data);
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.name}  <b>${product.cost}</b></p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
