import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";

import { initialData } from '../database/products';

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Teslo-Shop - Home"}
      pageDescription={"Your products here"}
    >
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All Products</Typography>
      <ProductList 
        products={ initialData.products as any }
      />

    </ShopLayout>
  );
};

export default Home;
