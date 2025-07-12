'use client';

import { useState, useEffect } from 'react';
import HeaderSection from './HeaderSection';
import StepNavigator from './StepNavigator';
import RideSelector from './RideSelector';
import CourseSelector from './CourseSelector';
import AddOnSelector from './AddOnSelector';
import PriceSummary from './PriceSummary';
import FooterNavigation from './FooterNavigation';
import { anybody, arimo } from '../fonts';

type Step = 'ride' | 'course';
type CourseType = 'beginner' | 'advanced' | 'custom';

const CourseFormWrapper = () => {
  const [step, setStep] = useState<Step>('course');
  const [selectedRide, setSelectedRide] = useState<'car' | 'bike' | 'auto' | 'truck'>('car');
  const [course, setCourse] = useState<CourseType>('beginner');
  const [addons, setAddons] = useState<string[]>([]);
  const [discount, setDiscount] = useState(0);

  // ✅ Scroll to top of the full page on refresh
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main
      className={arimo.className}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem',
      }}
    >
      {/* ✅ This will now be visible immediately after refresh */}
      <HeaderSection />

      <StepNavigator activeStep={step} setActiveStep={setStep} />

      {step === 'ride' ? (
        <RideSelector selected={selectedRide} setSelected={setSelectedRide} />
      ) : (
        <div
          style={{
            padding: '1.5rem',
            background: '#F2EAEA',
            borderRadius: '21px',
          }}
        >
          <p
            className={anybody.className}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Choose Your Perfect Course
          </p>

          <CourseSelector selected={course} setSelected={setCourse} />
          <AddOnSelector selected={addons} setSelected={setAddons} />
          <PriceSummary
            course={course}
            addons={addons}
            discount={discount}
            setDiscount={setDiscount}
          />
        </div>
      )}

      <FooterNavigation />
    </main>
  );
};

export default CourseFormWrapper;
