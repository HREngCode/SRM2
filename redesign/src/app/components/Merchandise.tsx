import React from 'react';
import { products as productList, Product } from '../../data/products';

export function Merchandise() {
  return (
    <section id="merch" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold mb-6">Merchandise</h2>
      <p className="text-lg text-gray-900 mb-8">
        Check out our official merchandise! Browse our collection of premium apparel designed by Stallion Ranch Media. Click "Buy Now" to purchase directly from our Printful store.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((p) => (
          <div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col">
            <div className="h-40 w-full flex items-center justify-center mb-4 bg-white rounded">
              <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{p.name}</h3>
            <p className="text-sm text-gray-800 mb-3">{p.description}</p>
            <div className="mt-auto">
              <div className="text-sm font-medium text-gray-900 mb-2">${p.price.toFixed(2)}</div>
              {p.sizes && p.sizes.length > 0 && (
                <div className="text-xs text-gray-600 mb-3">
                  Sizes: {p.sizes.join(', ')}
                </div>
              )}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 transition-colors text-center block"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
