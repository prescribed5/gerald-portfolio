export default function GeraldPortfolioRevamp() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Google Ads',
    'Meta Ads',
    'GoHighLevel',
    'CRM Workflows',
    'Zapier Integrations',
    'Google Tag Manager',
    'Google Analytics',
  ];

  const workItems = [
  {
    title: 'Facebook Ads Results',
    description: 'Meta campaigns built for lead generation, budget scaling, and conversion tracking.',
    image: '/fb-ads.png'
  },
  {
    title: 'Google Ads Results',
    description: 'Search and display campaigns optimized for better conversions and stronger ROI.',
    image: '/google-ads.png'
  },
  {
    title: 'GoHighLevel Automations',
    description: 'CRM workflows, follow-up automations, and pipeline systems that improve response time.',
    image: '/ghl.png'
  },
];

  const educationItems = [
    {
      school: 'University of Southeastern Philippines - Main Campus',
      level: 'Bachelor of Science in Industrial Technology Major in Electrical Technology',
      period: '2022 - 2026',
      details: 'Dean\'s List, Cum laude candidate,',
    },
    {
      school: 'Brokenshire College Toril',
      level: 'Senior High School',
      period: '2018 - 2020',
      details: 'STEM, With Honors',
    },
  ];

  const cvFile = '/gerald-cv.pdf';
  const bookingLink = 'https://calendar.app.google/ckWEBNEWfk7Muye58';

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: #0a0d16;
          color: #ffffff;
        }
        a { text-decoration: none; }

        .site {
          min-height: 100vh;
          background: linear-gradient(180deg, #080b13 0%, #0b1020 100%);
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(14px);
          background: rgba(10, 13, 22, 0.88);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 0;
        }

        .brand {
          color: #fff;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 0.3px;
        }

        .brand span { color: #9be15d; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-links a {
          color: rgba(255,255,255,0.78);
          font-size: 15px;
          transition: 0.25s ease;
        }

        .nav-links a:hover { color: #9be15d; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 26px;
          border-radius: 999px;
          font-weight: 700;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border 0.2s ease;
          cursor: pointer;
        }

        .btn:hover { transform: translateY(-1px); }
        .btn-primary {
          background: #a3e635;
          color: #0b0f17;
          border: 1px solid #a3e635;
        }
        .btn-secondary {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.03);
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.08); }

        .hero {
          padding: 86px 0 70px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .eyebrow {
          color: #9be15d;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        h1 {
          font-size: clamp(46px, 7vw, 74px);
          line-height: 0.98;
          margin: 0;
          font-weight: 900;
        }

        .lead {
          color: rgba(255,255,255,0.78);
          font-size: 21px;
          line-height: 1.75;
          max-width: 720px;
          margin-top: 24px;
        }

        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .chip {
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.86);
          font-size: 14px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-photo-wrap {
          position: relative;
          min-height: 530px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(163, 230, 53, 0.08);
        }

        .orb.one { width: 520px; height: 520px; }
        .orb.two { width: 360px; height: 360px; }
        .dot {
          position: absolute;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #14d4a0;
          box-shadow: 0 0 24px rgba(20,212,160,0.5);
        }

        .dot.a { top: 90px; left: 78px; }
        .dot.b { top: 144px; right: 82px; }
        .dot.c { bottom: 102px; right: 118px; }
        .dot.d { bottom: 54px; right: 96px; }

        .photo-card {
          position: relative;
          z-index: 1;
          width: 390px;
          max-width: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 70px rgba(0,0,0,0.35);
          padding: 14px;
        }

        .photo-card img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: center;
          border-radius: 20px;
          display: block;
          background: #0f1320;
        }

        .section {
          padding: 92px 0;
        }

        .section-muted {
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .section-title {
          font-size: clamp(34px, 5vw, 56px);
          margin: 0;
          font-weight: 900;
        }

        .section-top {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: end;
          margin-bottom: 28px;
        }

        .section-text {
          color: rgba(255,255,255,0.76);
          font-size: 18px;
          line-height: 1.9;
          max-width: 820px;
        }

        .centered {
          text-align: center;
        }

        .cards-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-top: 34px;
        }

        .card {
          background: #11182a;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.2);
        }

        .card h3 {
          margin: 0 0 12px;
          font-size: 26px;
        }

        .card p {
          margin: 0;
          color: rgba(255,255,255,0.72);
          line-height: 1.8;
          font-size: 16px;
        }

        .work-preview {
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
}

        .timeline {
          display: grid;
          gap: 18px;
          margin-top: 34px;
        }

        .timeline-item {
          background: #11182a;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 28px;
        }

        .timeline-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .timeline-item h3 {
          margin: 0;
          font-size: 26px;
        }

        .timeline-item .sub {
          margin-top: 8px;
          color: rgba(255,255,255,0.74);
          font-size: 17px;
        }

        .badge {
          background: rgba(163,230,53,0.08);
          border: 1px solid rgba(163,230,53,0.24);
          color: #b7f36b;
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 700;
        }

        .timeline-item p {
          color: rgba(255,255,255,0.72);
          line-height: 1.8;
          font-size: 16px;
          margin: 18px 0 0;
        }

        .contact-box {
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
        }

        .contact-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        @media (max-width: 980px) {
          .navbar-inner,
          .section-top,
          .hero-grid {
            grid-template-columns: 1fr;
            display: grid;
          }

          .navbar-inner {
            justify-items: center;
            text-align: center;
          }

          .hero {
            padding-top: 54px;
          }

          .hero-grid {
            gap: 28px;
          }

          .hero-photo-wrap {
            min-height: 440px;
          }

          .cards-3 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .container { width: min(100% - 22px, 1120px); }
          .nav-links { gap: 12px; }
          .nav-links a { font-size: 14px; }
          .lead { font-size: 18px; }
          .btn { width: 100%; }
          .hero-actions, .contact-actions { flex-direction: column; }
          .photo-card img { height: 410px; }
          .orb.one { width: 360px; height: 360px; }
          .orb.two { width: 250px; height: 250px; }
          .section { padding: 74px 0; }
        }
      `}</style>

      <div className="site">
        <header className="navbar">
          <div className="container navbar-inner">
            <a className="brand" href="#home">Gerald<span>.</span></a>

            <nav className="nav-links">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
            </nav>

            <a className="btn btn-primary" href="#contact">Let&apos;s Talk</a>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="container hero-grid">
              <div>
                <div className="eyebrow">Digital Marketing Portfolio</div>
                <h1>I&apos;m Gerald Lester Salimbangan</h1>
                <p className="lead">
                  I help businesses scale through Google Ads, Meta Ads, and GoHighLevel. From lead generation to CRM systems, I build digital strategies that drive growth and measurable results.
                </p>

                <div className="chip-row">
                  {services.map((service) => (
                    <span className="chip" key={service}>{service}</span>
                  ))}
                </div>

                <div className="hero-actions">
                  <a className="btn btn-primary" href="#work">View My Work</a>
                  <a className="btn btn-secondary" href={cvFile} download>Download CV</a>
                </div>
              </div>

              <div className="hero-photo-wrap">
                <div className="orb one" />
                <div className="orb two" />
                <div className="dot a" />
                <div className="dot b" />
                <div className="dot c" />
                <div className="dot d" />

                <div className="photo-card">
                  <img src="/profile.png" alt="Gerald profile" />
                </div>
              </div>
            </div>
          </section>

          <section className="section section-muted" id="about">
            <div className="container centered">
              <div className="eyebrow">About Me</div>
              <h2 className="section-title">Who I Am</h2>
              <p className="section-text" style={{ margin: '22px auto 0' }}>
                I&apos;m a digital marketing specialist focused on Google Ads, Meta Ads, GoHighLevel, and automation systems. I help businesses improve lead generation, streamline their workflows, and scale with data-driven strategies that produce real business outcomes.
              </p>

              <div className="cards-3">
                <div className="card">
                  <h3>Paid Ads Strategy</h3>
                  <p>Launching and optimizing campaigns across Meta and Google with a strong focus on results.</p>
                </div>
                <div className="card">
                  <h3>Automation Systems</h3>
                  <p>Building CRM and follow-up automations to reduce manual work and improve conversion flow.</p>
                </div>
                <div className="card">
                  <h3>Growth Execution</h3>
                  <p>Turning strategy into measurable action with tracking, testing, and ongoing performance improvements.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="work">
            <div className="container">
              <div className="section-top">
                <div>
                  <div className="eyebrow">Portfolio</div>
                  <h2 className="section-title">My Work</h2>
                </div>
                <p className="section-text">
                  A showcase of campaign performance, ad optimization, and GoHighLevel automation implementation for business growth.
                </p>
              </div>

              <div className="cards-3">
                {workItems.map((item) => (
                  <div className="card" key={item.title}>
                    <img src={item.image} className="work-preview" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-muted" id="education">
            <div className="container">
              <div className="eyebrow">Education</div>
              <h2 className="section-title">Educational Attainment</h2>

              <div className="timeline">
                {educationItems.map((item) => (
                  <div className="timeline-item" key={item.school + item.level}>
                    <div className="timeline-top">
                      <div>
                        <h3>{item.school}</h3>
                        <div className="sub">{item.level}</div>
                      </div>
                      <div className="badge">{item.period}</div>
                    </div>
                    <p>{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="container">
              <div className="contact-box">
                <div className="eyebrow">Contact</div>
                <h2 className="section-title">Let&apos;s Build Your Growth System</h2>
                <p className="section-text" style={{ margin: '20px auto 0' }}>
                  Ready to scale your business with paid ads and GoHighLevel systems? Add your booking link, email, or contact form here.
                </p>

                <div className="contact-actions">
                  <a className="btn btn-primary" href={bookingLink} target="_blank" rel="noreferrer">Jump on a Call</a>
                  <a className="btn btn-secondary" href={cvFile} download>Download CV</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
