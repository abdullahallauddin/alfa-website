import { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import HeroImage from "../Assets/Images/facility/downloads-hero.webp";

const DOWNLOADS = [
  {
    title: "ALFA Company Profile",
    description:
      "Group profile and divisions overview in PDF format. Suitable for procurement teams and pre-qualification submissions.",
    file: "/Downloads/profile.pdf",
    fileType: "PDF",
    sizeNote: "Updated 2025",
  },
  {
    title: "ALFA Logo (SVG)",
    description: "Vector logo for high-resolution print and digital use.",
    file: "/Downloads/logo.svg",
    fileType: "SVG",
    sizeNote: "Vector",
  },
  {
    title: "ALFA Logo (PNG)",
    description: "Raster logo for general digital use.",
    file: "/Downloads/logo.png",
    fileType: "PNG",
    sizeNote: "Raster",
  },
];

const DownloadCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="company-overview downloads-page">
      <Seo
        title="Downloads | ALFA Marine & Industrial Services"
        description="Download ALFA's company profile and brand assets. Files are provided as PDF, SVG, and PNG."
        path="/download-center"
      />

      <section
        className="inner-hero inner-hero--compact"
        style={{ "--inner-hero-image": `url(${HeroImage})` }}
      >
        <div className="section-shell inner-hero__content">
          <p className="eyebrow">Downloads</p>
          <h1>ALFA company profile and brand assets.</h1>
          <p>
            Pre-prepared resources for procurement teams, partners, and
            communications use.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="company-overview__section-header">
          <p className="eyebrow">Available Resources</p>
          <h2>Click to download.</h2>
        </div>
        {DOWNLOADS.length === 0 ? (
          <div className="downloads-empty">
            <p>Download resources will be added soon.</p>
            <p>
              In the meantime, contact ALFA to request a copy of the company
              profile.
            </p>
            <Link className="btn btn-primary" to="/contact">
              Request Profile
            </Link>
          </div>
        ) : (
          <div className="downloads-grid">
            {DOWNLOADS.map((item) => (
              <article key={item.title} className="download-card">
                <div className="download-card__head">
                  <span className="download-card__type">{item.fileType}</span>
                  <small>{item.sizeNote}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.file}
                  className="btn btn-primary download-card__action"
                  download
                  rel="noopener"
                >
                  Download {item.fileType}
                </a>
              </article>
            ))}
          </div>
        )}
        <p className="downloads-helper">
          Need something else? <Link to="/contact">Contact ALFA</Link> for
          additional documentation.
        </p>
      </section>
    </main>
  );
};

export default DownloadCenter;
