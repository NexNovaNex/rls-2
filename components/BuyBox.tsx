'use client';

import React, { useState } from 'react';

const pricing = {
  subscribe: {
    1: { price: 39, old: 49, percent: 20 },
    3: { price: 79, old: 89, percent: 11 },
    6: { price: 129, old: 159, percent: 19 }
  },
  once: {
    1: { price: 49, old: 49, percent: 0 },
    3: { price: 89, old: 89, percent: 0 },
    6: { price: 159, old: 159, percent: 0 }
  }
};

const checkoutLinks = {
  subscribe: {
    1: 'https://benebalance.com/products/bene-rls-supplement',
    3: 'https://benebalance.com/products/bene-rls-supplement',
    6: 'https://benebalance.com/products/bene-rls-supplement'
  },
  once: {
    1: 'https://benebalance.com/products/bene-rls-supplement',
    3: 'https://benebalance.com/products/bene-rls-supplement',
    6: 'https://benebalance.com/products/bene-rls-supplement'
  }
};

const BuyBox = () => {
  const [mode, setMode] = useState<'subscribe' | 'once'>('subscribe');
  const [bottles, setBottles] = useState<1 | 3 | 6>(1);
  const priceData = pricing[mode][bottles as 1 | 3 | 6];
  const showSavings = priceData.percent > 0;

  return (
    <section id="pricing-section" className="w-full flex flex-col items-center bg-white py-8 md:py-16 px-2 md:px-4">
      <div className="max-w-4xl w-full mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-teal-50 via-white to-purple-50 border-2 border-teal-200 p-0 md:p-0">
        <div className="px-6 md:px-12 pt-8 pb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-2">Get started with our powerful restless leg solution</h2>
          <div className="text-lg text-teal-500 mb-4 font-semibold">Limited Time Offer</div>
          
          {/* Product Image - Centered with purple background */}
          <div className="flex justify-center items-center mb-6 w-full">
            <div className="w-80 h-96 bg-purple-600 rounded-2xl shadow-lg flex items-center justify-center mx-auto p-8">
              <img 
                src="/bottle-placeholder.jpg" 
                alt="CALM LEGS Product bottle" 
                className="w-full h-full object-contain drop-shadow-lg" 
                width={320} 
                height={384} 
              />
            </div>
          </div>
          
          {/* Product Branding */}
          <div className="mb-6">
            
            
            <div className="text-lg text-purple-700 font-medium">Natural Formula For Nighttime Leg Comfort</div>
            <div className="text-sm text-purple-600">60 Capsules • Dietary Supplement</div>
          </div>
          
          {/* Toggle */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-2 rounded-full p-1 border-2 border-teal-300 bg-white">
              <button
                id="buyOnceBtn"
                className={`buy-toggle px-6 py-2 rounded-full font-bold border-2 transition ${mode === 'once' ? 'bg-teal-600 text-white border-teal-600' : 'bg-gray-100 text-teal-700 border-teal-300'}`}
                onClick={() => setMode('once')}
              >
                Buy Once
              </button>
              <button
                id="subscribeBtn"
                className={`buy-toggle px-6 py-2 rounded-full font-bold border-2 transition ${mode === 'subscribe' ? 'bg-teal-600 text-white border-teal-600' : 'bg-gray-100 text-teal-700 border-teal-300'}`}
                onClick={() => setMode('subscribe')}
              >
                Subscribe & Save{priceData.percent > 0 ? ` ${priceData.percent}%` : ''}
              </button>
            </div>
            
            {/* Features/Benefits Box */}
            <div className="w-full max-w-lg mx-auto mt-4">
              <ul id="benefitsList" className="border-2 border-teal-200 bg-white rounded-xl px-6 py-4 grid grid-cols-1 gap-3 text-base font-medium shadow">
                <li className={`flex items-center justify-between gap-2 ${mode === 'once' ? 'line-through text-gray-400 opacity-60' : ''}`} data-benefit="supply">
                  <span className={`flex items-center gap-2 ${mode === 'once' ? 'text-gray-400' : 'text-green-600 font-bold'}`}>✔ 30-day supply delivered monthly</span>
                  <span className="line-through text-teal-400">$49</span>
                </li>
                <li className={`flex items-center justify-between gap-2 ${mode === 'once' ? 'line-through text-gray-400 opacity-60' : ''}`} data-benefit="discount">
                  <span className={`flex items-center gap-2 ${mode === 'once' ? 'text-gray-400' : 'text-green-600 font-bold'}`}>✔ 30% off for life</span>
                  <span className="line-through text-teal-400">$20</span>
                </li>
                <li className={`flex items-center justify-between gap-2 ${mode === 'once' ? 'text-gray-400' : 'text-teal-600'}`} data-benefit="ebook">
                  <span className={`flex items-center gap-2 ${mode === 'once' ? 'text-gray-400' : 'text-teal-600'}`}>📚 <span className="font-bold">FREE</span> eBook guide</span>
                  <span className="line-through text-teal-400">$24</span>
                </li>
                <li className={`flex items-center justify-between gap-2 ${mode === 'once' ? 'text-gray-400 opacity-60' : ''}`} data-benefit="pillcase">
                  <span className={`flex items-center gap-2 ${mode === 'once' ? 'text-gray-400' : 'text-teal-600'}`}>💊 <span className="font-bold">FREE</span> on-the-go pill case</span>
                  <span className="line-through text-teal-400">$9</span>
                </li>
                <li className={`flex items-center justify-between gap-2 ${mode === 'once' ? 'line-through text-gray-400 opacity-60' : ''}`} data-benefit="shipping">
                  <span className={`flex items-center gap-2 ${mode === 'once' ? 'text-gray-400' : 'text-teal-600'}`}>🚚 <span className="font-bold">FREE</span> USA Shipping!</span>
                  <span className="line-through text-teal-400">$12</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottle Options */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
            {[1, 3, 6].map((n) => (
              <div
                key={n}
                id={`option${n}`}
                className={`bottle-option border-2 rounded-2xl p-6 text-center cursor-pointer transition relative ${bottles === n
                  ? 'border-teal-600 bg-teal-100 text-teal-900 shadow-lg'
                  : 'border-teal-300 bg-white text-teal-700 hover:shadow-lg'}`}
                onClick={() => setBottles(n as 1 | 3 | 6)}
              >
                {n === 3 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg border-2 border-yellow-400 z-10">MOST POPULAR</div>
                )}
                {n === 6 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-200 text-green-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg border-2 border-green-400 z-10">BEST VALUE</div>
                )}
                <div className="font-bold text-lg">{n} Bottle{n > 1 ? 's' : ''}</div>
                <div className="mb-2">{n * 30} day supply</div>
                <div className="text-2xl font-extrabold mb-1 break-words md:text-2xl text-xl">
                  <span className="line-through text-gray-400 text-lg mr-1">${pricing[mode][n as 1 | 3 | 6].old}</span> <span id={`price${n}`}>${pricing[mode][n as 1 | 3 | 6].price}</span>
                </div>
                <div className="text-xs">Per {n > 1 ? 'Pack' : 'Bottle'}</div>
              </div>
            ))}
          </div>
          
          {/* Savings Message */}
          {showSavings && (
            <div id="savingsMsg" className="bg-teal-100 border border-teal-300 rounded-xl px-4 py-2 mb-4 text-teal-700 font-semibold text-center text-base shadow">
              🎉 Congrats! You're saving <span id="savingsPercent">{priceData.percent}%</span>
            </div>
          )}
          
          {/* Add to Cart Button */}
          <a
            id="addToCartBtn"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-xl transition flex items-center justify-center gap-2 shadow-lg mt-2 mb-2"
            href={checkoutLinks[mode][bottles as 1 | 3 | 6]}
          >
            🛒 ADD TO CART - <span id="cartPrice">${priceData.price}</span> ▶
          </a>
          
          {/* Additional Guarantees */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Delivered monthly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>60-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyBox; 
