'use client';

import styles from '@/styles/components/RideSelector.module.css';

type RideType = 'car' | 'bike' | 'auto' | 'truck';

type Props = {
  selected: RideType;
  setSelected: (value: RideType) => void;
};

const RideSelector = ({ selected, setSelected }: Props) => {
  const rides: RideType[] = ['car', 'bike', 'auto' , 'truck'];

  return (
    <div className={styles.wrapper}>
      {rides.map((ride) => (
        <label
          key={ride}
          className={`${styles.card} ${selected === ride ? styles.active : ''}`}
        >
          <input
            type="radio"
            name="ride"
            checked={selected === ride}
            onChange={() => setSelected(ride)}
          />
          <span className={styles.labelText}>
            {ride.charAt(0).toUpperCase() + ride.slice(1)}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RideSelector;
