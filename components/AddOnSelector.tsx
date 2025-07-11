'use client';

import styles from '@/styles/components/AddOnSelector.module.css';

type Props = {
  selected: string[];
  setSelected: (addons: string[]) => void;
};

const AddOnSelector = ({ selected, setSelected }: Props) => {
  const addon = {
    key: 'license',
    label: 'Get Your 2W License Drive with Confidence!',
    price: 2500,
  };

  const isActive = selected.includes(addon.key);

  const toggleAddon = () => {
    if (isActive) {
      setSelected(selected.filter(item => item !== addon.key));
    } else {
      setSelected([...selected, addon.key]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.card} ${isActive ? styles.active : ''}`}
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
                >{isActive ? '✓' : ''}</div>
            <span className={styles.price}>₹{addon.price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnSelector;
