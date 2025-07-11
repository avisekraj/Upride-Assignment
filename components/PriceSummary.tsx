'use client';

import { useState } from "react";
import CouponSection from "./CouponSection";

type Props = {
  course: 'beginner' | 'advanced' | 'custom';
  addons: string[];
  discount: number;
  setDiscount: (value: number) => void; // ✅ Add this
};

const PriceSummary = ({ course, addons, discount, setDiscount }: Props) => {
  const [couponCode, setCouponCode] = useState('');

  const coursePrice =
    course === 'beginner' ? 8500 :
    course === 'advanced' ? 10000 :
    0;

  const addonPrice = addons.includes('license') ? 2500 : 0;

  const subtotal = coursePrice + addonPrice;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst - discount;

  return (
    <div style={{
      marginTop: '2rem',
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: '#F6DFDF'
    }}>
      
      {/* ✅ Coupon Section at top of Price Summary */}
      <CouponSection
        code={couponCode}
        setCode={setCouponCode}
        setDiscount={setDiscount}
      />

      

      <div style={{ ...rowStyle, fontSize: '16px',fontWeight: 700  }}
>
        <span>Program Price</span>
        <span>₹{coursePrice.toLocaleString()}</span>
      </div>

      {addonPrice > 0 && (
        <div style={rowStyle}>
          <span>Add-On: 2W License</span>
          <span>₹{addonPrice.toLocaleString()}</span>
        </div>
      )}

     

      <div style={rowStyle}>
        <span>GST (18%)</span>
        <span>₹{gst.toLocaleString()}</span>
      </div>

      {discount > 0 && (
        <div style={{ ...rowStyle, color: 'green' }}>
          <span>Discount</span>
          <span>-₹{discount.toLocaleString()}</span>
        </div>
      )}
       <div style={rowStyle}>
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>

      <hr style={{ margin: '1rem 0' }} />

      <div style={{
        ...rowStyle,
        fontWeight: '700',
        fontSize: '16px',
        color: '#000000ff'
      }}>
        <span>Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>
    </div>
  );
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem'
};

const rowStyleBold: React.CSSProperties = {
  ...rowStyle,
  fontWeight: 600
};

export default PriceSummary;
