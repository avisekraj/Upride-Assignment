'use client';

import styles from '@/styles/components/StepNavigator.module.css';

type Props = {
  activeStep: 'ride' | 'course';
  setActiveStep: (step: 'ride' | 'course') => void;
};

const StepNavigator = ({ activeStep, setActiveStep }: Props) => {
  return (
    <div className={styles.stepTabs} role="tablist" aria-label="Course Steps">
      <button
        type="button"
        role="tab"
        aria-selected={activeStep === 'ride'}
        aria-controls="ride-panel"
        id="ride-tab"
        className={`${styles.tab} ${activeStep === 'ride' ? styles.active : ''}`}
        onClick={() => setActiveStep('ride')}
      >
        Step 01 – Pick Your Perfect Ride
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={activeStep === 'course'}
        aria-controls="course-panel"
        id="course-tab"
        className={`${styles.tab} ${activeStep === 'course' ? styles.active : ''}`}
        onClick={() => setActiveStep('course')}
      >
        Step 02 – Choose Course
      </button>
    </div>
  );
};

export default StepNavigator;
