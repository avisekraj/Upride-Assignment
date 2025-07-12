// components/CourseFormWrapper.tsx
'use client';

import { useState } from 'react';
import HeaderSection from './HeaderSection';
import StepNavigator from './StepNavigator';
import RideSelector from './RideSelector';
import CourseSelector from './CourseSelector';
import AddOnSelector from './AddOnSelector';
import PriceSummary from './PriceSummary';
import FooterNavigation from './FooterNavigation';

import { Arimo } from 'next/font/google';
import { Anybody } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';

// Fonts
const anybody = Anybody({ subsets: ['latin'], weight: ['400', '600'] });
const arimo = Arimo({ subsets: ['latin'], weight: ['400', '600'] });

type Step = 'ride' | 'course';
type CourseType = 'beginner' | 'advanced' | 'custom';

const CourseFormWrapper = () => {
  const [step, setStep] = useState<Step>('course');
  const [selectedRide, setSelectedRide] = useState<'car' | 'bike' | 'auto' | 'truck'>('car');
  const [course, setCourse] = useState<CourseType>('beginner');
  const [addons, setAddons] = useState<string[]>([]);
  const [discount, setDiscount] = useState(0);

  return (
    <main className={arimo.className} style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem' }}>
      {/* Header */}
      <HeaderSection />

      {/* Step Navigation */}
      <StepNavigator activeStep={step} setActiveStep={setStep} />

      {/* Step Content with Animation */}
      <AnimatePresence mode="wait">
        {step === 'ride' ? (
          <motion.div
            key="ride"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
          >
            <RideSelector selected={selectedRide} setSelected={setSelectedRide} />
          </motion.div>
        ) : (
          <motion.div
            key="course"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: '1.5rem',
              background: '#F2EAEA',
              borderRadius: '21px',
            }}
          >
            {/* Title */}
            <p className={anybody.className} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>
              Choose Your Perfect Course
            </p>

            {/* Course & Add-ons */}
            <CourseSelector selected={course} setSelected={setCourse} />
            <AddOnSelector selected={addons} setSelected={setAddons} />
            <PriceSummary course={course} addons={addons} discount={discount} setDiscount={setDiscount} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Navigation */}
      <FooterNavigation step={step} setStep={setStep} />

    </main>
  );
};

export default CourseFormWrapper;
