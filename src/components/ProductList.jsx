import ProductItem from "./ProductItem";

function ProductList({ products, onViewDetail }) {
  return (
    <div className="product-list">      
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
}

export default ProductList;
