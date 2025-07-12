import { anybody } from '../fonts';

const HeaderSection = () => {
  return (
    <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h4
        style={{
          background: 'linear-gradient(to right, #E42525 0%, #FFBFB2 50%, #E42525 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          margin: 0,
          fontWeight: 600
        }}
        className={anybody.className}
      >
        SERVICES
      </h4>

      <h1 className={anybody.className} style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>
        Start Your Two-Wheeler Training with Ease!
      </h1>
      <p style={{ color: '#555', lineHeight: 1.5 }}>
        Get on the road with confidence by choosing the perfect training options tailored to your needs.
        Follow these simple steps to customize your learning journey and master two-wheeler riding effortlessly.
      </p>
    </section>
  );
};

export default HeaderSection;
