'use client';

import { useState } from 'react';
import HeaderSection from './HeaderSection';
import StepNavigator from './StepNavigator';
import RideSelector from './RideSelector';
import CourseSelector from './CourseSelector';
import AddOnSelector from './AddOnSelector';
import PriceSummary from './PriceSummary';
import FooterNavigation from './FooterNavigation';

type Step = 'ride' | 'course';
type CourseType = 'beginner' | 'advanced' | 'custom';

const CourseFormWrapper = () => {
  // ✅ State Management
  const [step, setStep] = useState<Step>('course');
  const [selectedRide, setSelectedRide] = useState<'car' | 'bike' | 'auto' | 'truck'>('car');
  const [course, setCourse] = useState<CourseType>('beginner');
  const [addons, setAddons] = useState<string[]>([]);
  const [discount, setDiscount] = useState(0);

  return (
    <>
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem',
      }}
    >
      {/* Header */}
      <HeaderSection />

      {/* Step Navigator */}
      <StepNavigator activeStep={step} setActiveStep={setStep} />

      {/* Step 1: Ride Selection */}
      {step === 'ride' ? (
        <RideSelector selected={selectedRide} setSelected={setSelectedRide} />
      ) : (
        // Step 2: Course Selection and Price Summary
        <div
          style={{
            padding: '1.5rem',
            background: 'rgba(200, 184, 184, 0.38)',
            borderRadius: '10px',
          }}
        >
          {/* Title */}
          <p
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Choose Your Perfect Course
          </p>

          {/* Course Selector */}
          <CourseSelector selected={course} setSelected={setCourse} />

          {/* Add-On Selector */}
          <AddOnSelector selected={addons} setSelected={setAddons} />

          {/* Price Summary with Coupon Integration */}
          <PriceSummary
            course={course}
            addons={addons}
            discount={discount}
            setDiscount={setDiscount}
          />
        </div>
      )}

      {/* Footer (Navigation Buttons) */}
      <FooterNavigation />
    </main>
    </>
  );
};

export default CourseFormWrapper;
