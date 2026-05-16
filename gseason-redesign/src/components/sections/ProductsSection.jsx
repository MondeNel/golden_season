import { useState } from 'react';
import { products } from '../../data/products';
import Reveal from '../ui/Reveal';
import ProductCard from '../ui/ProductCard';
import ProductModal from '../common/ProductModal';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-teal text-xs uppercase tracking-widest font-semibold">Product Ranges</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
            Built for the Field. Trusted Worldwide.
          </h2>
          <p className="text-muted mt-4 max-w-xl font-light">
            Engineered to NATO/STANAG and humanitarian standards, ensuring readiness in the harshest conditions on earth.
          </p>
        </Reveal>

        {/* Equal height grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12"
          style={{ gridAutoRows: '1fr' }}
        >
          {products.map((product, idx) => (
            <Reveal key={idx} delay={(idx % 3) + 1}>
              <ProductCard
                product={product}
                onClick={setSelectedProduct}
              />
            </Reveal>
          ))}
        </div>

        {/* Product detail modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}