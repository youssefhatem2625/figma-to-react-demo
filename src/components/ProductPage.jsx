import React, { useState } from 'react';
import { product } from '../data/product';
import { ImageGallery } from './ImageGallery';
import { RatingStars } from './RatingStars';
import { ColorPicker } from './ColorPicker';
import { SizePicker } from './SizePicker';
import {
  ShoppingBag,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  ShieldCheck,
  Minus,
  Plus,
  Check,
} from 'lucide-react';

export const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const incQty = () => setQuantity((q) => Math.min(q + 1, 10));
  const decQty = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Minimal Navbar */}
      <nav className="bg-white border-b border-zinc-200/80 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <span className="font-black text-xl tracking-tight text-zinc-900">STRYDE</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#" className="hover:text-zinc-900">Men</a>
          <a href="#" className="hover:text-zinc-900">Women</a>
          <a href="#" className="hover:text-zinc-900">Collections</a>
          <a href="#" className="hover:text-zinc-900">Sale</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-zinc-600 hover:text-zinc-900"><Heart className="w-5 h-5" /></button>
          <button className="p-2 text-zinc-600 hover:text-zinc-900 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-zinc-900 rounded-full"></span>
          </button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <p className="text-xs text-zinc-400">
          Home &rsaquo; Running &rsaquo; <span className="text-zinc-700 font-medium">{product.name}</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT: Image Gallery */}
          <ImageGallery images={product.colors[selectedColor].images} />

          {/* RIGHT: Product Details */}
          <div className="flex flex-col gap-6">

            {/* Brand + Name + Category */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                  {product.brand} · {product.category}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setWishlist(!wishlist)}
                    className={`p-2 rounded-full border transition-all ${
                      wishlist
                        ? 'bg-rose-50 border-rose-200 text-rose-500'
                        : 'border-zinc-200 text-zinc-400 hover:border-zinc-300'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlist ? 'fill-rose-500' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full border border-zinc-200 text-zinc-400 hover:border-zinc-300 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">{product.name}</h1>
            </div>

            {/* Rating */}
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-zinc-900">${product.price}</span>
              <span className="text-lg text-zinc-400 line-through">${product.originalPrice}</span>
              <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-xs font-bold rounded-lg">
                -{product.discount}%
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-100" />

            {/* Color Picker */}
            <ColorPicker
              colors={product.colors}
              selected={selectedColor}
              onSelect={(i) => { setSelectedColor(i); }}
            />

            {/* Size Picker */}
            <SizePicker
              sizes={product.sizes}
              outOfStock={product.outOfStock}
              selected={selectedSize}
              onSelect={setSelectedSize}
            />

            {/* Size error nudge */}
            {!selectedSize && (
              <p className="text-xs text-zinc-400 -mt-2">← Please select a size to continue</p>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white">
                <button onClick={decQty} className="px-3 h-12 text-zinc-500 hover:bg-zinc-50 transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-zinc-900">{quantity}</span>
                <button onClick={incQty} className="px-3 h-12 text-zinc-500 hover:bg-zinc-50 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 h-12 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  addedToCart
                    ? 'bg-emerald-500 text-white'
                    : selectedSize
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.98]'
                    : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <><Check className="w-4 h-4 stroke-[3]" /> Added to Bag!</>
                ) : (
                  <><ShoppingBag className="w-4 h-4" /> Add to Bag</>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: 'Free Shipping', sub: 'Orders over $100' },
                { icon: RotateCcw, label: '30-Day Returns', sub: 'Hassle-free' },
                { icon: ShieldCheck, label: '2 Year Warranty', sub: 'Full coverage' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center p-3 bg-white rounded-xl border border-zinc-100">
                  <Icon className="w-4 h-4 text-zinc-600 mb-1" />
                  <span className="text-xs font-semibold text-zinc-800">{label}</span>
                  <span className="text-xs text-zinc-400">{sub}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="border-t border-zinc-100 pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900">About this product</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{product.description}</p>
              <ul className="space-y-1.5">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 stroke-[3]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
