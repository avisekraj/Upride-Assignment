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
    course === 'beginner' ? 3000 :
    course === 'advanced' ? 4000 :
    0;

  const addonPrice = addons.includes('license') ? 2500 : 0;

  const subtotal = coursePrice + addonPrice;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst - discount;

  return (
    <div style={{
      marginTop: '2rem',
      padding: '1.5rem',
      borderRadius: '10px',
      backgroundColor: '#fbd8d8'
    }}>
      
      {/* ✅ Coupon Section at top of Price Summary */}
      <CouponSection
        code={couponCode}
        setCode={setCouponCode}
        setDiscount={setDiscount}
      />

      <h4 style={{
        marginBottom: '1rem',
        fontSize: '1rem',
        paddingBottom: '0.5rem'
      }}>
        Program Price
      </h4>

      <div style={rowStyle}>
        <span>Course Fee</span>
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
        fontWeight: 'bold',
        fontSize: '1.2rem',
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
