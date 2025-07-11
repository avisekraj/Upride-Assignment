// components/HeaderSection.tsx
const HeaderSection = () => {
  return (
    <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h4
  style={{
    background: 'linear-gradient(to right, red 0%, rgba(255,0,0,0.2) 50%, red 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',  // ✅ Add this
    margin: 0,
    fontWeight: 600
  }}
>
  SERVICES
</h4>

      <h1 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>
        Start Your Two-Wheeler Training with Ease!
      </h1>
      <p style={{ color: '#555', lineHeight: 1.5 }}>
        Get on the road with confidence by choosing the perfect training options tailored to your needs.
        Follow these simple steps to customize your learning journey and master two-wheeler riding effortlessly.
      </p>
    </section>
  )
}

export default HeaderSection;
