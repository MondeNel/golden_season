import { products } from '../../data/products';
import Reveal from '../ui/Reveal';
import ProductCard from '../ui/ProductCard';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4 md:px-10 bg-navy">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-teal text-xs uppercase tracking-widest font-semibold">Product Ranges</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
            Built for the Field. Trusted Worldwide.
          </h2>
          <p className="text-muted mt-4 max-w-xl font-light">
            Engineered to NATO/STANAG and humanitarian standards...
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {products.map((product, idx) => (
            <Reveal key={idx} delay={(idx % 3) + 1}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}