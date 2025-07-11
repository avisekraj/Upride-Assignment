'use client';

import styles from '@/styles/components/StepNavigator.module.css';

type Props = {
  activeStep: 'ride' | 'course';
  setActiveStep: (step: 'ride' | 'course') => void;
};

const StepNavigator = ({ activeStep, setActiveStep }: Props) => {
  return (
    <div className={styles.stepTabs}>
      <div
        className={`${styles.tab} ${activeStep === 'ride' ? styles.active : ''}`}
        onClick={() => setActiveStep('ride')}
      >
        Step 01 – Pick Your Perfect Ride
      </div>
      <div
        className={`${styles.tab} ${activeStep === 'course' ? styles.active : ''}`}
        onClick={() => setActiveStep('course')}
      >
        Step 02 – Choose Course
      </div>
    </div>
  );
};

export default StepNavigator;
