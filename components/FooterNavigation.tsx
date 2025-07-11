// components/FooterNavigation.tsx
'use client';

const FooterNavigation = () => {
  const handleBack = () => alert('Going back to Step 1');
  const handleNext = () => alert('Proceeding to Step 3');

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
          color: '#b03e44',
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
          color: '#333',
          cursor: 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default FooterNavigation;

