import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";

const PRODUCT_API = "https://apistore.cybersoft.edu.vn/api/Product";

function App() {
  // Ban đầu chưa có sản phẩm. Khi setProducts nhận dữ liệu, React render lại danh sách.
  const [products, setProducts] = useState([]);
  // null = chưa chọn sản phẩm => Modal sẽ được ẩn.
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    async function getProducts() {
      // Lấy dữ liệu từ API rồi chuyển JSON thành object JavaScript.
      const response = await fetch(PRODUCT_API);
      const result = await response.json();

      // API trả về object, với content là mảng sản phẩm.
      setProducts(result.content);
    }

    getProducts();
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <a className="brand" href="#top">
            Shoe Shop
          </a>
        </div>
      </header>

      <main id="top" className="container shop">
        <h1>Shoe Shop</h1>
        <ProductList products={products} onViewDetail={setSelectedProduct} />
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;
