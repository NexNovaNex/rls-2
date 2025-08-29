'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much Bene do I need to take per day?",
    answer: "Take 2 capsules per day until your symptoms stop or greatly improve. The unique formula is designed so that you see immediate results. You'll get the best results when you take Bene consistently and long term because it works to replenish the vitamin/mineral/probiotic imbalances within your body."
  },
  {
    question: "Is Bene safe?",
    answer: "Yes, Bene is made with all-natural ingredients and is generally safe for most adults. However, as with any supplement, we recommend consulting with your healthcare provider before starting, especially if you have underlying health conditions or are taking medications."
  },
  {
    question: "When is the best time to take Bene?",
    answer: "Take Bene with a meal, preferably in the evening or before bedtime, as it's designed to help with sleep and restless leg symptoms that commonly occur at night."
  },
  {
    question: "What is the Bene Program?",
    answer: "The Bene Program is our monthly delivery service that automatically sends you a fresh bottle of Bene each month. This ensures you never run out and helps you maintain consistent results. You can cancel anytime with no commitments."
  },
  {
    question: "What's in Bene?",
    answer: "Bene contains a proprietary blend of natural ingredients including Turmeric Extract (95% Curcuminoids), Passionflower Extract, Lactobacillus plantarum probiotic, along with essential vitamins and minerals like Vitamin D3, Vitamin B6, Magnesium, and Vitamin K-2."
  },
  {
    question: "Can I take Bene with my current medication?",
    answer: "While Bene is made with natural ingredients, we always recommend consulting with your healthcare provider before combining any supplement with prescription medications to ensure there are no potential interactions."
  },
  {
    question: "Who makes this supplement?",
    answer: "Bene is manufactured by Pure Biogenics, LLC, a company dedicated to creating high-quality, natural supplements that address specific health concerns like restless leg syndrome."
  },
  {
    question: "Do you ship to international addresses?",
    answer: "Currently, we ship to the United States and Canada. For international shipping inquiries, please contact our customer service team at info@purebiogenics.com."
  },
  {
    question: "Do you have allergen information for Bene?",
    answer: "Bene contains no common allergens like gluten, dairy, soy, or nuts. However, if you have specific allergies, please review the ingredient list or contact us for detailed allergen information."
  },
  {
    question: "How much does shipping cost?",
    answer: "Shipping is FREE for all Bene Club members! For one-time purchases, standard shipping rates apply. We also offer expedited shipping options for faster delivery."
  },
  {
    question: "How do I know this will work for me?",
    answer: "We offer a 60-day money-back guarantee, so you can try Bene risk-free. Most customers start seeing results within 2-3 weeks of consistent use. If you're not satisfied, simply return the product for a full refund."
  },
  {
    question: "Where is it manufactured?",
    answer: "Bene is manufactured in the United States in an FDA-registered facility that follows strict quality control standards and Good Manufacturing Practices (GMP)."
  },
  {
    question: "How do I order Bene?",
    answer: "You can order Bene directly from our website by clicking the 'Add to Cart' or 'Join Now' buttons. Simply follow the checkout process and provide your shipping and payment information."
  },
  {
    question: "How do I cancel?",
    answer: "You can cancel your Bene Club membership at any time by emailing info@purebiogenics.com or calling our hotline at (877) 269-2694. There are no cancellation fees or commitments."
  },
  {
    question: "How long will it take to see results?",
    answer: "Most people start to see results in just 2-3 weeks of regular use, depending on the severity of their deficiency. For best results, take Bene consistently as directed."
  },
  {
    question: "Can I take Bene during pregnancy?",
    answer: "We recommend consulting with your healthcare provider before taking any supplement during pregnancy or while breastfeeding. Your doctor can best advise you on what's safe for you and your baby."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also accept bank transfers for certain orders. All payments are processed securely through our encrypted payment system."
  },
  {
    question: "How can I be sure my information is secure?",
    answer: "We use industry-standard 128-bit SSL encryption to protect all your personal and payment information. We never store your credit card details, and all orders are processed through secure payment gateways. Your privacy and security are our top priorities."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Can't find the answer to your question below? You can contact us at{' '}
          <a href="info@benebalance.com" className="text-blue-600 hover:underline">info@benebalance.com</a>{' '}
        </p>

        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                className="w-full py-4 px-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
                onClick={() => toggleItem(index)}
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-4 pb-4 bg-gray-50 transition-all duration-200 ${
                  openItems.includes(index) ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 