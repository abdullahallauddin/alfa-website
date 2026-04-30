const HeroSection = () => {
  return (
    <section className="alfa-hero" aria-label="ALFA Marine hero video">
      <video
        src="/Alpha Web V5.webm"
        className="alfa-hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        title="ALFA Marine and industrial services overview video"
        aria-label="ALFA Marine and industrial services overview video"
      />
    </section>
  );
};

export default HeroSection;
