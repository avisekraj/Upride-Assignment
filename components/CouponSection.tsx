"use client";

import { useState } from "react";
import styles from "@/styles/components/CouponSection.module.css";
import { Anybody } from 'next/font/google';

// ✅ Must be at module scope (outside the component)
const anybody = Anybody({
  subsets: ['latin'],
  weight: ['400', '600'],
});

type Props = {
  code: string;
  setCode: (value: string) => void;
  setDiscount: (value: number) => void;
};

const CouponSection = ({ code, setCode, setDiscount }: Props) => {
  const [error, setError] = useState("");

  const handleApply = () => {
    if (code.trim().toLowerCase() === "save10") {
      setDiscount(10); // Assume 10% discount
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid coupon");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Available Offers</h3>
      <p className={styles.offerLine}>
        Flat 10% Off – Get 10% off on your course fee. Learn
        more, save more! 🚀 
      </p>

      <h3 className={styles.heading}>Apply Coupons</h3>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Coupon"
          className={styles.input}
        />
        <button onClick={handleApply} className={`${styles.applyBtn} ${anybody.className}`}>
          Apply <span className={styles.arrow}>→</span>
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default CouponSection;
