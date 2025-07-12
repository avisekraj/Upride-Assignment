"use client";

import styles from "@/styles/components/AddOnSelector.module.css";

type Props = {
  selected: string[];
  setSelected: (addons: string[]) => void;
};

const AddOnSelector = ({ selected, setSelected }: Props) => {
  const addon = {
    key: "license",
    label: "Get Your 2W License Drive with Confidence!",
    price: 2500,
  };

  const isActive = selected.includes(addon.key);

  const toggleAddon = () => {
    if (isActive) {
      setSelected(selected.filter((item) => item !== addon.key));
    } else {
      setSelected([...selected, addon.key]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.card} ${isActive ? styles.active : ""}`}
        onClick={toggleAddon}
      >
        <p className={styles.title}>Add-Ons</p>

        <div className={styles.content}>
          <p className={styles.label}>{addon.label}</p>

          <div className={styles.priceRow}>
            <div
              className={`${styles.circle} ${
                isActive ? styles.circleActive : ""
              }`}
            >
              {isActive ? (
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.835754 3.7449L5.01059 7.91991L12.1865 0.744049"
                    stroke="white"
                    strokeWidth="1.4483"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
            <span className={styles.price}>
              ₹{addon.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnSelector;
