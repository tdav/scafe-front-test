import React from 'react';
import { CartItem, PaymentMethod } from '../types';
import { PAYMENT_METHODS } from '../constants';
import { CreditCard, Wallet, Banknote, Trash2 } from 'lucide-react';

interface OrderPanelProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
}

export const OrderPanel: React.FC<OrderPanelProps> = ({ cart, onRemove }) => {
  const subTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subTotal * 0.04; // Mock tax 4%
  const total = subTotal + tax;

  return (
    <div className="w-[400px] bg-white h-screen border-l border-gray-100 flex flex-col flex-shrink-0 shadow-xl z-20">
      {/* Header */}
      <div className="p-8 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Invoice</h2>
      </div>

      {/* Cart Items List */}
      <div className="flex-1 overflow-y-auto px-8">
        <div className="space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border border-gray-100 shadow-sm"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                  <div className="flex items-center text-xs text-gray-400 mt-1 gap-2">
                    <span className="font-semibold text-gray-500">{item.quantity}x</span>
                    <span>Dont Add Vegetables</span> {/* Hardcoded note from design */}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-bold text-gray-800 text-sm">${(item.price * item.quantity).toFixed(1)}</span>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-gray-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer / Payment Section */}
      <div className="p-8 bg-gray-50/50">
        <h3 className="font-bold text-gray-800 mb-4">Payment Summary</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Sub Total</span>
            <span className="font-bold text-gray-800">${subTotal.toFixed(1)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Tax</span>
            <span className="font-bold text-gray-800">${tax.toFixed(1)}</span>
          </div>
          <div className="flex justify-between text-sm pt-4 border-t border-dashed border-gray-300">
            <span className="text-gray-400">Total Payment</span>
            <span className="font-bold text-gray-800 text-lg">${total.toFixed(1)}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {PAYMENT_METHODS.map((method) => (
            <button key={method.id} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 text-gray-400 transition-all gap-2">
              {method.icon === 'credit-card' && <CreditCard size={20} />}
              {method.icon === 'wallet' && <Wallet size={20} />}
              {method.icon === 'cash' && <Banknote size={20} />}
              <span className="text-[10px] font-medium">{method.name}</span>
            </button>
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all">
          Place An Order
        </button>
      </div>
    </div>
  );
};