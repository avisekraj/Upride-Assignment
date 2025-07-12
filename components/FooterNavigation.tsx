// components/FooterNavigation.tsx
'use client';


type Props = {
  step: 'ride' | 'course';
  setStep: (step: 'ride' | 'course') => void;
};


const FooterNavigation = ({ step, setStep }: Props) => {
  const handleBack = () =>  (step === 'course')? setStep('ride'):alert("Step 1")
  const handleNext = () => (step === 'ride')? setStep('course'):alert('Step 2');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start', // Align both buttons to the left,
        marginTop:'1rem',
        gap: '1rem',
        background:'transparent',
        fontSize:'16px',
      }}
    >
      <button
        onClick={handleBack}
        style={{
          background:'none',
          border: 'none',
          color: '#E42525',
          cursor: 'pointer',
        }}
      >
        Back
      </button>

      <button
        onClick={handleNext}
        style={{
          background:'none',
          border: 'none',
          color: '#718096',
          cursor: 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default FooterNavigation;

