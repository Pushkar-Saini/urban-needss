"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    looking: "1.5 Ton AC",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Enquiry sent! We will contact you soon.");
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #F8F8F8;
          --bg2: #F0F0F0;
          --ink: #111111;
          --ink2: #555555;
          --accent: #111111;
          --accent2: #444444;
          --white: #FFFFFF;
          --card-bg: #FFFFFF;
          --border: #DDDDDD;
          --radius: 16px;
          --shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          background: var(--bg);
          color: var(--ink);
          overflow-x: hidden;
        }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 48px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          font-weight: 700; font-size: 1.5rem;
          letter-spacing: -0.02em; color: #111111; text-decoration: none;
        }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a {
          text-decoration: none; color: var(--ink2);
          font-size: 0.95rem; font-weight: 500; transition: color 0.2s;
        }
        .nav-links a:hover { color: #111111; }
        .nav-cta {
          background: #111111; color: var(--white) !important;
          padding: 10px 22px; border-radius: 100px;
          font-weight: 600 !important;
          transition: background 0.2s, transform 0.15s !important;
        }
        .nav-cta:hover { background: #333333 !important; transform: translateY(-1px); }

        .hero {
          min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; padding: 120px 48px 80px;
          gap: 48px; position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; top: -120px; right: -120px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero h1 {
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 700; line-height: 1.07;
          letter-spacing: -0.03em; margin-bottom: 24px;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .hero h1 em {
          font-style: normal; color: #111111;
          position: relative; display: inline-block;
        }
        .hero h1 em::after {
          content: ''; position: absolute; left: 0; bottom: 2px; right: 0; height: 4px;
          background: #BBBBBB; border-radius: 2px; opacity: 0.6;
        }
        .hero p {
          font-size: 1.15rem; color: var(--ink2);
          line-height: 1.7; max-width: 480px; margin-bottom: 40px;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .hero-actions {
          display: flex; gap: 16px; flex-wrap: wrap;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .btn-primary {
          background: #111111; color: var(--white);
          padding: 16px 32px; border-radius: 100px;
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          font-size: 1rem; font-weight: 600; border: none; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }
        .btn-primary:hover { background: #333333; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.22); }
        .btn-secondary {
          background: transparent; color: var(--ink);
          padding: 16px 32px; border-radius: 100px;
          font-size: 1rem; font-weight: 600;
          border: 1.5px solid var(--border); cursor: pointer;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-secondary:hover { border-color: #111111; color: #111111; }
        .hero-stats {
          display: flex; gap: 32px; margin-top: 48px;
          animation: fadeUp 0.6s 0.4s ease both;
        }
        .stat-num { font-size: 1.9rem; font-weight: 800; color: var(--ink); }
        .stat-num span { color: #555555; }
        .stat-label { font-size: 0.82rem; color: var(--ink2); margin-top: 2px; }

        .hero-visual { position: relative; animation: fadeUp 0.7s 0.2s ease both; }
        .hero-card-main {
          background: var(--card-bg); border-radius: 24px;
          border: 1px solid var(--border); box-shadow: var(--shadow);
          overflow: hidden; aspect-ratio: 4/3;
          display: flex; flex-direction: column; position: relative;
        }
        .hero-card-img {
          flex: 1;
          background: linear-gradient(135deg, #E8EEF4 0%, #D0DCE8 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 7rem;
        }
        .hero-card-body { padding: 20px 24px; }
        .hero-card-body h3 { font-weight: 700; font-size: 1.1rem; }
        .hero-card-body .price { color: #111111; font-weight: 700; font-size: 1.2rem; margin-top: 4px; }
        .hero-card-body .old-price { text-decoration: line-through; color: var(--ink2); font-size: 0.85rem; margin-left: 8px; }
        .hero-card-body .condition {
          display: inline-block; background: #F0F0F0; color: #333333;
          font-size: 0.75rem; font-weight: 600; border-radius: 100px;
          padding: 3px 10px; margin-top: 8px;
        }
        .hero-badge-float {
          position: absolute; top: -16px; right: -16px;
          background: #111111; color: white; font-weight: 700; font-size: 0.8rem;
          padding: 10px 14px; border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          line-height: 1.3; text-align: center;
        }
        .hero-mini-card {
          position: absolute; bottom: -20px; left: -20px;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 16px; padding: 14px 18px;
          box-shadow: var(--shadow); display: flex; align-items: center;
          gap: 12px; min-width: 200px;
        }
        .hero-mini-icon { font-size: 2rem; }
        .hero-mini-text { font-size: 0.8rem; color: var(--ink2); }
        .hero-mini-text strong { display: block; font-size: 0.9rem; color: var(--ink); font-weight: 600; }

        .trust-bar {
          background: var(--ink); padding: 18px 48px;
          display: flex; align-items: center; justify-content: center;
          gap: 48px; flex-wrap: wrap;
        }
        .trust-item { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.75); font-size: 0.9rem; }
        .trust-item .ti { font-size: 1.2rem; }

        section { padding: 96px 48px; }
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #555555; margin-bottom: 16px;
        }
        .section-label::before { content: ''; display: block; width: 20px; height: 2px; background: #555555; }
        .section-title {
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 700;
          letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 16px;
        }
        .section-sub { color: var(--ink2); font-size: 1.05rem; line-height: 1.7; max-width: 560px; }

        #products { background: var(--bg2); }
        .products-header {
          display: flex; justify-content: space-between;
          align-items: flex-end; margin-bottom: 48px; flex-wrap: wrap; gap: 16px;
        }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .product-card {
          background: var(--card-bg); border-radius: var(--radius);
          border: 1px solid var(--border); overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s; cursor: pointer;
        }
        .product-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,18,8,0.13); }
        .product-img {
          height: 200px; display: flex; align-items: center;
          justify-content: center; font-size: 5rem; position: relative;
        }
        .product-img.blue { background: linear-gradient(135deg, #E3EDF5, #C9DDE9); }
        .product-img.green { background: linear-gradient(135deg, #E3F2E8, #C8E6D0); }
        .product-img.warm { background: linear-gradient(135deg, #FBF0E5, #F5DFC8); }
        .product-img.purple { background: linear-gradient(135deg, #EDE8F5, #D8CEE9); }
        .product-tag {
          position: absolute; top: 12px; left: 12px;
          font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 100px;
        }
        .tag-good { background: #EFEFEF; color: #333333; }
        .tag-like-new { background: #E8E8E8; color: #111111; }
        .tag-excellent { background: #F5F5F5; color: #444444; }
        .product-info { padding: 20px; }
        .product-brand { font-size: 0.75rem; font-weight: 600; color: var(--ink2); text-transform: uppercase; letter-spacing: 0.06em; }
        .product-name { font-size: 1.05rem; font-weight: 700; margin-top: 4px; }
        .product-spec { font-size: 0.85rem; color: var(--ink2); margin-top: 4px; }
        .product-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; }
        .product-price { font-size: 1.3rem; font-weight: 700; color: var(--ink); }
        .product-price .mrp { font-size: 0.8rem; font-weight: 400; color: var(--ink2); text-decoration: line-through; display: block; }
        .product-price .save { font-size: 0.75rem; color: #333333; font-weight: 600; }
        .add-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: #111111; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.3rem;
          transition: background 0.2s, transform 0.15s;
        }
        .add-btn:hover { background: #333333; transform: scale(1.08); }

        #how { background: var(--bg); }
        .how-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px; margin-top: 56px; }
        .how-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 32px 28px;
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .how-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
        .how-num { font-size: 4rem; font-weight: 700; color: #E0E0E0; line-height: 1; margin-bottom: 16px; }
        .how-icon { font-size: 2.2rem; margin-bottom: 16px; }
        .how-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
        .how-card p { font-size: 0.9rem; color: var(--ink2); line-height: 1.6; }

        #why { background: var(--ink); color: var(--white); }
        #why .section-label { color: #AAAAAA; }
        #why .section-label::before { background: #AAAAAA; }
        #why .section-title { color: var(--white); }
        #why .section-sub { color: rgba(255,255,255,0.65); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; margin-top: 56px; }
        .why-features { display: flex; flex-direction: column; gap: 24px; }
        .why-item { display: flex; gap: 20px; }
        .why-item-icon {
          flex-shrink: 0; width: 52px; height: 52px; border-radius: 14px;
          background: rgba(255,255,255,0.07); display: flex;
          align-items: center; justify-content: center; font-size: 1.5rem;
        }
        .why-item-text h4 { font-weight: 700; font-size: 1rem; margin-bottom: 6px; }
        .why-item-text p { font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
        .why-visual {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px; padding: 40px; text-align: center;
        }
        .why-visual .big-icon { font-size: 6rem; margin-bottom: 16px; }
        .why-visual p { color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.7; }
        .rating-display { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 24px; }
        .stars { color: #FFB800; font-size: 1.3rem; letter-spacing: 2px; }
        .rating-num { font-size: 2rem; font-weight: 800; }
        .rating-sub { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

        #testimonials { background: var(--bg2); }
        .testi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; margin-top: 48px; }
        .testi-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 28px; transition: transform 0.2s;
        }
        .testi-card:hover { transform: translateY(-4px); }
        .testi-stars { color: #FFB800; font-size: 1rem; letter-spacing: 2px; margin-bottom: 16px; }
        .testi-text { font-size: 0.95rem; line-height: 1.7; color: var(--ink2); margin-bottom: 20px; font-style: italic; }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; font-weight: 700; color: white;
        }
        .av1 { background: #111111; }
        .av2 { background: #444444; }
        .av3 { background: #777777; }
        .testi-name { font-weight: 700; font-size: 0.95rem; }
        .testi-loc { font-size: 0.8rem; color: var(--ink2); }

        #contact { background: var(--bg); }
        .contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .contact-info p { color: var(--ink2); line-height: 1.7; margin-bottom: 32px; }
        .contact-details { display: flex; flex-direction: column; gap: 16px; }
        .contact-item { display: flex; align-items: center; gap: 14px; }
        .contact-item-icon { font-size: 1.4rem; }
        .contact-item-text { font-size: 0.95rem; color: var(--ink2); }
        .contact-item-text strong { display: block; color: var(--ink); font-weight: 600; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--ink); }
        .form-group input, .form-group textarea, .form-group select {
          background: var(--card-bg); border: 1.5px solid var(--border);
          border-radius: 10px; padding: 12px 16px;
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          font-size: 0.95rem; color: var(--ink);
          transition: border-color 0.2s; outline: none;
        }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--accent); }
        .form-group textarea { resize: vertical; min-height: 100px; }

        footer {
          background: var(--ink); color: rgba(255,255,255,0.6);
          padding: 48px; display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
        }
        .footer-brand p { font-size: 0.88rem; line-height: 1.7; max-width: 260px; }
        .footer-col h4 { font-size: 0.9rem; font-weight: 700; color: white; margin-bottom: 16px; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-col ul a { text-decoration: none; color: rgba(255,255,255,0.55); font-size: 0.88rem; transition: color 0.2s; }
        .footer-col ul a:hover { color: #444444; }
        .footer-bottom {
          background: var(--ink); border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 48px; display: flex; justify-content: space-between;
          align-items: center; font-size: 0.82rem; color: rgba(255,255,255,0.4);
        }

        .whatsapp-btn {
          position: fixed; bottom: 28px; right: 28px; z-index: 999;
          background: #25D366; color: white; border-radius: 100px;
          padding: 14px 20px 14px 16px; display: flex; align-items: center;
          gap: 10px; text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          font-weight: 600; font-size: 0.95rem;
          transition: transform 0.2s, box-shadow 0.2s;
          animation: waPop 0.5s 1s ease both;
        }
        .whatsapp-btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 28px rgba(37,211,102,0.55); }
        .whatsapp-label { white-space: nowrap; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes waPop {
          from { opacity: 0; transform: translateY(16px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 900px) {
          nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
          .hero-visual { display: none; }
          section { padding: 64px 24px; }
          .why-grid, .contact-wrap, footer { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .trust-bar { padding: 16px 24px; gap: 24px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; gap: 8px; text-align: center; }
        }
        @media (max-width: 600px) {
          .whatsapp-btn { padding: 14px; border-radius: 50%; }
          .whatsapp-label { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">Urban<span>Needs</span></a>
        <ul className="nav-links">
          <li><a href="/browse">Products</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Cool Down for <em>Less</em> this Summer</h1>
          <p>Quality second-hand ACs and home appliances — inspected, serviced, and delivered. Save up to 60% vs. new.</p>
          <div className="hero-actions">
            <a href="/browse" className="btn-primary">Browse ACs →</a>
            <a href="#how" className="btn-secondary">⚡ How it works</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">60<span>%</span></div>
              <div className="stat-label">Average Savings</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">4.9<span>★</span></div>
              <div className="stat-label">Customer Rating</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-main">
            <div className="hero-card-img">❄️</div>
            <div className="hero-card-body">
              <h3>Voltas 1.5T Split AC</h3>
              <div className="price">₹18,500 <span className="old-price">₹38,000</span></div>
              <span className="condition">✓ Like New · Fully Serviced</span>
            </div>
            <div className="hero-badge-float">SAVE<br />51%</div>
          </div>
          <div className="hero-mini-card">
            <div className="hero-mini-icon">🚚</div>
            <div className="hero-mini-text">
              <strong>Free Delivery</strong>
              Within Delhi NCR
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item"><span className="ti">✅</span> Every unit QC tested</div>
        <div className="trust-item"><span className="ti">🔧</span> Professional installation</div>
        <div className="trust-item"><span className="ti">🚚</span> Free delivery in Delhi NCR</div>
      </div>

      {/* PRODUCTS */}
      <section id="products">
        <div className="products-header">
          <div>
            <div className="section-label">Inventory</div>
            <h2 className="section-title">Featured Products</h2>
            <p className="section-sub">Handpicked, tested, and ready for your home — all at unbeatable prices.</p>
          </div>
          <a href="#contact" className="btn-secondary" style={{ flexShrink: 0 }}>View All →</a>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img blue">❄️<span className="product-tag tag-like-new">Like New</span></div>
            <div className="product-info">
              <div className="product-brand">Voltas</div>
              <div className="product-name">1.5 Ton 3-Star Split AC</div>
              <div className="product-spec">2021 Model · Copper Condenser</div>
              <div className="product-footer">
                <div className="product-price">
                  <span className="mrp">₹38,000 MRP</span>₹18,500
                  <span className="save">Save ₹19,500</span>
                </div>
                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img green">🌬️<span className="product-tag tag-excellent">Excellent</span></div>
            <div className="product-info">
              <div className="product-brand">Daikin</div>
              <div className="product-name">1.0 Ton 5-Star Inverter</div>
              <div className="product-spec">2022 Model · Energy Efficient</div>
              <div className="product-footer">
                <div className="product-price">
                  <span className="mrp">₹42,000 MRP</span>₹22,000
                  <span className="save">Save ₹20,000</span>
                </div>
                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img warm">❄️<span className="product-tag tag-good">Good</span></div>
            <div className="product-info">
              <div className="product-brand">LG</div>
              <div className="product-name">2.0 Ton Split AC</div>
              <div className="product-spec">2020 Model · Auto Clean</div>
              <div className="product-footer">
                <div className="product-price">
                  <span className="mrp">₹52,000 MRP</span>₹24,500
                  <span className="save">Save ₹27,500</span>
                </div>
                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img purple">🌀<span className="product-tag tag-like-new">Like New</span></div>
            <div className="product-info">
              <div className="product-brand">Samsung</div>
              <div className="product-name">1.5 Ton Inverter AC</div>
              <div className="product-spec">2023 Model · Wind-Free Tech</div>
              <div className="product-footer">
                <div className="product-price">
                  <span className="mrp">₹48,000 MRP</span>₹26,000
                  <span className="save">Save ₹22,000</span>
                </div>
                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="section-label">Process</div>
        <h2 className="section-title">How UrbanNeeds Works</h2>
        <p className="section-sub">Simple. Transparent. Hassle-free. From browsing to cooling — we&apos;ve got every step covered.</p>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-num">01</div>
            <div className="how-icon">🔍</div>
            <h3>Browse & Select</h3>
            <p>Browse our curated inventory online or call us. Filter by brand, tonnage, budget, and condition grade.</p>
          </div>
          <div className="how-card">
            <div className="how-num">02</div>
            <div className="how-icon">🔬</div>
            <h3>Quality Checked</h3>
            <p>Every appliance goes through a 30-point inspection by certified technicians before listing.</p>
          </div>
          <div className="how-card">
            <div className="how-num">03</div>
            <div className="how-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Free delivery within Delhi NCR. Scheduled at your convenience — weekdays or weekends.</p>
          </div>
          <div className="how-card">
            <div className="how-num">04</div>
            <div className="how-icon">🔧</div>
            <h3>Pro Installation</h3>
            <p>Our technicians handle full installation and setup, so your AC is running perfectly from day one.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="section-label">Our Advantage</div>
        <h2 className="section-title">Why Choose UrbanNeeds?</h2>
        <p className="section-sub">We&apos;re not just resellers — we&apos;re a trusted service that makes quality accessible.</p>
        <div className="why-grid">
          <div className="why-features">
            <div className="why-item">
              <div className="why-item-icon">🛡️</div>
              <div className="why-item-text">
                <h4>Trusted by Hundreds</h4>
                <p>Hundreds of happy customers across Delhi NCR trust UrbanNeeds for quality appliances.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon">✅</div>
              <div className="why-item-text">
                <h4>30-Point Quality Inspection</h4>
                <p>Cooling efficiency, gas levels, compressor health, wiring — all verified by experts.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon">💸</div>
              <div className="why-item-text">
                <h4>Transparent Pricing</h4>
                <p>No hidden costs. What you see is what you pay — including delivery and installation.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon">♻️</div>
              <div className="why-item-text">
                <h4>Eco-Friendly Choice</h4>
                <p>Buying refurbished reduces e-waste. A smart choice for your wallet and the planet.</p>
              </div>
            </div>
          </div>
          <div className="why-visual">
            <div className="big-icon">⭐</div>
            <p>Trusted by hundreds of families across Delhi NCR. Our commitment to quality speaks through our customer reviews.</p>
            <div className="rating-display">
              <div>
                <div className="stars">★★★★★</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", justifyContent: "center", marginTop: "8px" }}>
                  <span className="rating-num" style={{ color: "white" }}>4.9</span>
                  <span className="rating-sub">/ 5.0</span>
                </div>
                <div className="rating-sub" style={{ marginTop: "4px" }}>Based on 200+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-label">Reviews</div>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-sub">Real people, real savings, real satisfaction.</p>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">&quot;Got a Voltas 1.5T for under ₹20K! Works perfectly, installation was done same day. Couldn&apos;t be happier — saving big without compromising on quality.&quot;</p>
            <div className="testi-author">
              <div className="testi-avatar av1">P</div>
              <div>
                <div className="testi-name">Prince Sharma</div>
                <div className="testi-loc">Dwarka, Delhi</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">&quot;Moved into a new flat and needed an AC urgently. UrbanNeeds delivered and installed a Samsung inverter AC within 24 hours. Outstanding service!&quot;</p>
            <div className="testi-author">
              <div className="testi-avatar av2">N</div>
              <div>
                <div className="testi-name">Nisha Joshi</div>
                <div className="testi-loc">Rohini, Delhi</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★☆</div>
            <p className="testi-text">&quot;Very trustworthy. The condition rating was accurate — got an &apos;Excellent&apos; grade Daikin and it runs like brand new. Will buy from here again for sure.&quot;</p>
            <div className="testi-author">
              <div className="testi-avatar av3">A</div>
              <div>
                <div className="testi-name">Amit Verma</div>
                <div className="testi-loc">Janakpuri, Delhi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrap">
          <div className="contact-info">
            <div className="section-label">Contact Us</div>
            <h2 className="section-title">Ready to Beat the Heat for Less?</h2>
            <p>Get in touch with us to check availability, request a quote, or schedule a visit. We&apos;re here to help you find the perfect appliance at the best price.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-icon">📞</span>
                <div className="contact-item-text">
                  <strong>+91 98765 43210</strong>
                  Mon–Sat, 9 AM – 7 PM
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">📧</span>
                <div className="contact-item-text">
                  <strong>hello@urbanneeds.in</strong>
                  Reply within 2 hours
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">📍</span>
                <div className="contact-item-text">
                  <strong>Delhi NCR</strong>
                  Free delivery across Delhi, Noida, Gurgaon
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Rahul Gupta" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Looking For</label>
              <select name="looking" value={form.looking} onChange={handleChange}>
                <option>1.0 Ton AC</option>
                <option>1.5 Ton AC</option>
                <option>2.0 Ton AC</option>
                <option>Other Appliance</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Tell us your budget, preferred brands, or any questions…" value={form.message} onChange={handleChange} />
            </div>
            <button className="btn-primary" onClick={handleSubmit} style={{ width: "100%", borderRadius: "12px", padding: "16px" }}>
              Send Enquiry →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <a href="#" className="nav-logo">Urban<span>Needs</span></a>
          <p>Certified second-hand home appliances delivered and installed across Delhi NCR. Quality at honest prices.</p>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Split ACs</a></li>
            <li><a href="#">Window ACs</a></li>
            <li><a href="#">Inverter ACs</a></li>
            <li><a href="#">All Appliances</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Sell Your AC</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Warranty Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>© 2025 UrbanNeeds. All rights reserved.</span>
        <span>Made with ♥ for Delhi NCR</span>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210?text=Hi%20UrbanNeeds%2C%20I%20am%20interested%20in%20buying%20a%20second-hand%20AC."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="whatsapp-label">Chat with us</span>
      </a>
    </>
  );
}