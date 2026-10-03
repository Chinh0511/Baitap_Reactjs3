function ProductModal({ product, onClose }) {
  if (!product) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" type="button" onClick={onClose}>
          ×
        </button>

        <img className="modal-image" src={product.image} alt={product.name} />
        <div className="modal-content">
          <h2 id="modal-title">{product.name}</h2>
          <p className="modal-price">${product.price}</p>
          <p>{product.description}</p>
          <p>
            <strong>Số lượng còn lại:</strong> {product.quantity}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
