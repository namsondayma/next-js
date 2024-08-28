import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductsPageProps = {
  products: Product[];
};

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={100} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
