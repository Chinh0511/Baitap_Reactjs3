function ProductItem({ product, onViewDetail }) {
  // product: dữ liệu của đúng sản phẩm do ProductList truyền xuống.
  // onViewDetail truyền qua ProductList => gọi để mở Modal.
  return (

    //  Bọc ảnh và tên+thông tin sản phẩm trong button để có thể mở Modal khi click vào ảnh 
    <article className="product-card">      
      <button
        className="product-image-button"
        type="button"
        onClick={() => onViewDetail(product)}
        aria-label={`Xem chi tiết ${product.name}`}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
        />
      </button>

      <div className="product-content">        
        <button
          className="product-details-button"
          type="button"
          onClick={() => onViewDetail(product)}
          aria-label={`Xem chi tiết ${product.name}`}
        >
          <h2>{product.name}</h2>
          <p>{product.shortDescription}</p>
        </button>
        <div className="product-footer">
          <strong>${product.price}</strong>          
          <button type="button">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default ProductItem;
