"use client";
import { useState } from "react";

const allProducts = [
  { id: 1, brand: "Voltas", name: "1.5 Ton 3-Star Split AC", spec: "2021 Model · Copper Condenser", mrp: 38000, price: 18500, ton: 1.5, condition: "Like New", emoji: "❄️", color: "blue" },
  { id: 2, brand: "Daikin", name: "1.0 Ton 5-Star Inverter", spec: "2022 Model · Energy Efficient", mrp: 42000, price: 22000, ton: 1.0, condition: "Excellent", emoji: "🌬️", color: "green" },
  { id: 3, brand: "LG", name: "2.0 Ton Split AC", spec: "2020 Model · Auto Clean", mrp: 52000, price: 24500, ton: 2.0, condition: "Good", emoji: "❄️", color: "warm" },
  { id: 4, brand: "Samsung", name: "1.5 Ton Inverter AC", spec: "2023 Model · Wind-Free Tech", mrp: 48000, price: 26000, ton: 1.5, condition: "Like New", emoji: "🌀", color: "purple" },
  { id: 5, brand: "Voltas", name: "1.0 Ton 5-Star Split AC", spec: "2022 Model · Fast Cooling", mrp: 32000, price: 15000, ton: 1.0, condition: "Excellent", emoji: "❄️", color: "blue" },
  { id: 6, brand: "Hitachi", name: "1.5 Ton Inverter AC", spec: "2021 Model · Frost Wash", mrp: 46000, price: 23000, ton: 1.5, condition: "Like New", emoji: "🌬️", color: "purple" },
  { id: 7, brand: "Blue Star", name: "2.0 Ton 3-Star AC", spec: "2020 Model · Turbo Cool", mrp: 55000, price: 27000, ton: 2.0, condition: "Good", emoji: "❄️", color: "blue" },
  { id: 8, brand: "Carrier", name: "1.5 Ton 5-Star Inverter", spec: "2022 Model · Flexicool", mrp: 44000, price: 21500, ton: 1.5, condition: "Excellent", emoji: "🌀", color: "green" },
  { id: 9, brand: "Panasonic", name: "1.0 Ton Inverter AC", spec: "2021 Model · NanoeX Tech", mrp: 36000, price: 17000, ton: 1.0, condition: "Like New", emoji: "❄️", color: "warm" },
  { id: 10, brand: "LG", name: "1.5 Ton 5-Star Dual Inverter", spec: "2023 Model · ADU Compressor", mrp: 50000, price: 28000, ton: 1.5, condition: "Like New", emoji: "🌬️", color: "green" },
  { id: 11, brand: "Samsung", name: "2.0 Ton Inverter AC", spec: "2021 Model · Digital Inverter", mrp: 58000, price: 31000, ton: 2.0, condition: "Excellent", emoji: "❄️", color: "blue" },
  { id: 12, brand: "Daikin", name: "1.5 Ton 3-Star AC", spec: "2020 Model · Coanda Airflow", mrp: 40000, price: 19000, ton: 1.5, condition: "Good", emoji: "🌀", color: "purple" },
  { id: 13, brand: "Voltas", name: "2.0 Ton 5-Star Inverter", spec: "2022 Model · Invertech", mrp: 60000, price: 33000, ton: 2.0, condition: "Like New", emoji: "❄️", color: "green" },
  { id: 14, brand: "Hitachi", name: "1.0 Ton 3-Star AC", spec: "2021 Model · Stabilizer Free", mrp: 30000, price: 13500, ton: 1.0, condition: "Good", emoji: "🌬️", color: "warm" },
  { id: 15, brand: "Blue Star", name: "1.5 Ton 5-Star Inverter", spec: "2023 Model · Self Clean", mrp: 47000, price: 25000, ton: 1.5, condition: "Excellent", emoji: "❄️", color: "blue" },
  { id: 16, brand: "Carrier", name: "1.0 Ton Inverter AC", spec: "2022 Model · PM 2.5 Filter", mrp: 34000, price: 16000, ton: 1.0, condition: "Like New", emoji: "🌀", color: "purple" },
  { id: 17, brand: "Panasonic", name: "2.0 Ton Inverter AC", spec: "2021 Model · Econavi Sensor", mrp: 56000, price: 29500, ton: 2.0, condition: "Good", emoji: "❄️", color: "green" },
  { id: 18, brand: "LG", name: "1.0 Ton 3-Star AC", spec: "2020 Model · Dual Inverter", mrp: 28000, price: 12000, ton: 1.0, condition: "Good", emoji: "🌬️", color: "blue" },
  { id: 19, brand: "Voltas", name: "1.5 Ton 5-Star Inverter", spec: "2023 Model · iCool Sensor", mrp: 45000, price: 24000, ton: 1.5, condition: "Excellent", emoji: "❄️", color: "warm" },
  { id: 20, brand: "Samsung", name: "1.0 Ton Wind-Free AC", spec: "2022 Model · 8-Pole Motor", mrp: 38000, price: 20000, ton: 1.0, condition: "Like New", emoji: "🌀", color: "purple" },
];

const brands = ["All", "Voltas", "Daikin", "LG", "Samsung", "Hitachi", "Blue Star", "Carrier", "Panasonic"];
const tons = ["All", "1.0", "1.5", "2.0"];
const conditions = ["All", "Like New", "Excellent", "Good"];
const budgets = ["All", "Under ₹15,000", "₹15,000–₹25,000", "Above ₹25,000"];

function FiltersPanel({ brand, setBrand, ton, setTon, condition, setCondition, budget, setBudget, onReset }) {
  return (
    <div className="filters-inner">
      <div className="filter-group">
        <div className="filter-label">Brand</div>
        <div className="filter-chips">
          {brands.map((b) => (
            <button key={b} className={`chip ${brand === b ? "active" : ""}`} onClick={() => setBrand(b)}>{b}</button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-label">Tonnage</div>
        <div className="filter-chips">
          {tons.map((t) => (
            <button key={t} className={`chip ${ton === t ? "active" : ""}`} onClick={() => setTon(t)}>
              {t === "All" ? "All" : `${t} Ton`}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-label">Condition</div>
        <div className="filter-chips">
          {conditions.map((c) => (
            <button key={c} className={`chip ${condition === c ? "active" : ""}`} onClick={() => setCondition(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-label">Budget</div>
        <div className="filter-chips">
          {budgets.map((bud) => (
            <button key={bud} className={`chip ${budget === bud ? "active" : ""}`} onClick={() => setBudget(bud)}>{bud}</button>
          ))}
        </div>
      </div>
      <button className="reset-btn" onClick={onReset}>✕ Reset Filters</button>
    </div>
  );
}

export default function BrowseACs() {
  const [brand, setBrand] = useState("All");
  const [ton, setTon] = useState("All");
  const [condition, setCondition] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sort, setSort] = useState("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleReset = () => {
    setBrand("All"); setTon("All"); setCondition("All"); setBudget("All"); setSort("default");
  };

  const activeFilterCount = [brand, ton, condition, budget].filter((v) => v !== "All").length;

  const filtered = allProducts
    .filter((p) => {
      if (brand !== "All" && p.brand !== brand) return false;
      if (ton !== "All" && p.ton !== parseFloat(ton)) return false;
      if (condition !== "All" && p.condition !== condition) return false;
      if (budget === "Under ₹15,000" && p.price >= 15000) return false;
      if (budget === "₹15,000–₹25,000" && (p.price < 15000 || p.price > 25000)) return false;
      if (budget === "Above ₹25,000" && p.price <= 25000) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "savings") return (b.mrp - b.price) - (a.mrp - a.price);
      return 0;
    });

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #F8F8F8; --bg2: #F0F0F0; --ink: #111111; --ink2: #555555;
          --white: #FFFFFF; --card-bg: #FFFFFF; --border: #DDDDDD;
          --radius: 16px; --shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        body { font-family: 'Google Sans', 'Product Sans', sans-serif; background: var(--bg); color: var(--ink); }

        nav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 48px;
          background: rgba(255,255,255,0.95); backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo { font-weight: 700; font-size: 1.5rem; letter-spacing: -0.02em; color: #111; text-decoration: none; }
        .nav-back {
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; color: var(--ink2); font-size: 0.9rem; font-weight: 500;
          padding: 8px 16px; border: 1.5px solid var(--border); border-radius: 100px;
          transition: all 0.2s;
        }
        .nav-back:hover { border-color: #111; color: #111; }

        .browse-hero {
          background: #111; color: white;
          padding: 56px 48px 48px;
          position: relative; overflow: hidden;
        }
        .browse-hero::after {
          content: '❄️'; position: absolute; right: 80px; top: 50%; transform: translateY(-50%);
          font-size: 10rem; opacity: 0.08;
        }
        .browse-hero h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.03em; margin-bottom: 10px; }
        .browse-hero p { color: rgba(255,255,255,0.6); font-size: 1rem; }
        .result-count { margin-top: 16px; font-size: 0.85rem; color: rgba(255,255,255,0.5); }
        .result-count span { color: white; font-weight: 700; font-size: 1.1rem; }

        /* Desktop layout */
        .page-body { display: grid; grid-template-columns: 260px 1fr; gap: 32px; padding: 40px 48px; align-items: start; }

        /* Desktop sidebar */
        .desktop-filters {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 28px; position: sticky; top: 90px;
        }
        .filters-title { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink2); margin-bottom: 24px; }

        /* Mobile button — hidden on desktop */
        .mobile-filter-btn { display: none; }

        /* Mobile dropdown — hidden on desktop */
        .mobile-filter-dropdown { display: none; }

        /* Shared filter styles */
        .filter-group { margin-bottom: 24px; }
        .filter-label { font-size: 0.8rem; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
        .filter-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          padding: 6px 14px; border-radius: 100px; font-size: 0.8rem; font-weight: 500;
          border: 1.5px solid var(--border); background: transparent; cursor: pointer;
          transition: all 0.15s; color: var(--ink2);
        }
        .chip:hover { border-color: #111; color: #111; }
        .chip.active { background: #111; color: white; border-color: #111; }
        .reset-btn {
          width: 100%; padding: 10px; border-radius: 10px; border: 1.5px solid var(--border);
          background: transparent; cursor: pointer; font-size: 0.85rem; color: var(--ink2);
          margin-top: 8px; transition: all 0.2s;
        }
        .reset-btn:hover { border-color: #111; color: #111; }

        /* Toolbar */
        .products-toolbar {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 24px; flex-wrap: wrap; gap: 12px;
        }
        .toolbar-left { font-size: 0.9rem; color: var(--ink2); }
        .toolbar-left strong { color: var(--ink); }
        .sort-select {
          border: 1.5px solid var(--border); border-radius: 10px;
          padding: 8px 14px; font-size: 0.85rem; color: var(--ink);
          background: var(--card-bg); outline: none; cursor: pointer;
        }

        /* Products grid */
        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
        .product-card {
          background: var(--card-bg); border-radius: var(--radius);
          border: 1px solid var(--border); overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s; cursor: pointer;
        }
        .product-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .product-img {
          height: 180px; display: flex; align-items: center;
          justify-content: center; font-size: 5rem; position: relative;
        }
        .product-img.blue   { background: linear-gradient(135deg, #E3EDF5, #C9DDE9); }
        .product-img.green  { background: linear-gradient(135deg, #E3F2E8, #C8E6D0); }
        .product-img.warm   { background: linear-gradient(135deg, #FBF0E5, #F5DFC8); }
        .product-img.purple { background: linear-gradient(135deg, #EDE8F5, #D8CEE9); }
        .product-tag {
          position: absolute; top: 10px; left: 10px;
          font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: 100px;
        }
        .tag-good     { background: #EFEFEF; color: #333; }
        .tag-like-new { background: #E8E8E8; color: #111; }
        .tag-excellent{ background: #F5F5F5; color: #444; }
        .save-badge {
          position: absolute; top: 10px; right: 10px;
          background: #111; color: white; font-size: 0.68rem; font-weight: 700;
          padding: 3px 8px; border-radius: 6px;
        }
        .product-info { padding: 16px; }
        .product-brand { font-size: 0.72rem; font-weight: 700; color: var(--ink2); text-transform: uppercase; letter-spacing: 0.06em; }
        .product-name { font-size: 0.98rem; font-weight: 700; margin-top: 3px; line-height: 1.3; }
        .product-spec { font-size: 0.8rem; color: var(--ink2); margin-top: 3px; }
        .product-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; }
        .product-price .mrp { font-size: 0.75rem; color: var(--ink2); text-decoration: line-through; display: block; }
        .product-price .cur { font-size: 1.2rem; font-weight: 700; }
        .enquire-btn {
          background: #111; color: white; border: none; cursor: pointer;
          padding: 8px 14px; border-radius: 100px; font-size: 0.78rem; font-weight: 600;
          transition: background 0.2s, transform 0.15s;
        }
        .enquire-btn:hover { background: #333; transform: scale(1.04); }

        .empty { text-align: center; padding: 80px 20px; color: var(--ink2); grid-column: 1/-1; }
        .empty .emoji { font-size: 4rem; margin-bottom: 16px; }
        .empty h3 { font-size: 1.2rem; font-weight: 700; color: var(--ink); margin-bottom: 8px; }

        .whatsapp-btn {
          position: fixed; bottom: 28px; right: 28px; z-index: 999;
          background: #25D366; color: white; border-radius: 100px;
          padding: 14px 20px 14px 16px; display: flex; align-items: center;
          gap: 10px; text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          font-weight: 600; font-size: 0.95rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .whatsapp-btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 28px rgba(37,211,102,0.55); }
        .whatsapp-label { white-space: nowrap; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          nav { padding: 16px 20px; }
          .browse-hero { padding: 36px 20px 28px; }
          .browse-hero::after { display: none; }

          /* Kill the 2-col layout, hide sidebar */
          .page-body { grid-template-columns: 1fr; padding: 20px 16px; gap: 0; }
          .desktop-filters { display: none; }

          /* Show the filter toggle button */
          .mobile-filter-btn {
            display: flex; align-items: center; justify-content: space-between;
            width: 100%; padding: 13px 18px; margin-bottom: 12px;
            background: var(--card-bg); border: 1.5px solid var(--border);
            border-radius: 12px; cursor: pointer;
            font-size: 0.9rem; font-weight: 600; color: var(--ink);
            transition: border-color 0.2s;
          }
          .mobile-filter-btn:hover { border-color: #111; }
          .btn-left { display: flex; align-items: center; gap: 8px; }
          .filter-badge {
            background: #111; color: white;
            font-size: 0.7rem; font-weight: 700;
            padding: 2px 7px; border-radius: 100px;
          }
          .chevron { font-size: 0.75rem; color: var(--ink2); transition: transform 0.25s; display: inline-block; }
          .chevron.open { transform: rotate(180deg); }

          /* Collapsible dropdown */
          .mobile-filter-dropdown {
            display: block;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;
            background: var(--card-bg);
            border: 1.5px solid var(--border);
            border-radius: 12px;
            margin-bottom: 16px;
          }
          .mobile-filter-dropdown.open { max-height: 900px; }
          .mobile-filter-dropdown .filters-inner { padding: 20px; }

          .products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .product-img { height: 140px; font-size: 3.5rem; }
        }

        @media (max-width: 400px) {
          .products-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .whatsapp-btn { padding: 14px; border-radius: 50%; }
          .whatsapp-label { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">Urban<span style={{ color: "#111" }}>Needs</span></a>
        <a href="/" className="nav-back">← Back to Home</a>
      </nav>

      {/* HERO */}
      <div className="browse-hero">
        <h1>Browse All ACs</h1>
        <p>Certified second-hand air conditioners — inspected, serviced & ready to install.</p>
        <div className="result-count"><span>{filtered.length}</span> units available</div>
      </div>

      <div className="page-body">

        {/* DESKTOP SIDEBAR */}
        <aside className="desktop-filters">
          <div className="filters-title">Filters</div>
          <FiltersPanel brand={brand} setBrand={setBrand} ton={ton} setTon={setTon} condition={condition} setCondition={setCondition} budget={budget} setBudget={setBudget} onReset={handleReset} />
        </aside>

        {/* PRODUCTS COLUMN */}
        <div>

          {/* MOBILE: filter toggle button */}
          <button className="mobile-filter-btn" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
            <span className="btn-left">
              🎛 Filters
              {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
            </span>
            <span className={`chevron ${mobileFiltersOpen ? "open" : ""}`}>▼</span>
          </button>

          {/* MOBILE: collapsible dropdown */}
          <div className={`mobile-filter-dropdown ${mobileFiltersOpen ? "open" : ""}`}>
            <FiltersPanel brand={brand} setBrand={setBrand} ton={ton} setTon={setTon} condition={condition} setCondition={setCondition} budget={budget} setBudget={setBudget} onReset={handleReset} />
          </div>

          {/* TOOLBAR */}
          <div className="products-toolbar">
            <div className="toolbar-left">Showing <strong>{filtered.length}</strong> results</div>
            <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="savings">Most Savings</option>
            </select>
          </div>

          {/* GRID */}
          <div className="products-grid">
            {filtered.length === 0 ? (
              <div className="empty">
                <div className="emoji">🔍</div>
                <h3>No ACs found</h3>
                <p>Try adjusting your filters</p>
              </div>
            ) : (
              filtered.map((p) => {
                const savePct = Math.round(((p.mrp - p.price) / p.mrp) * 100);
                const tagClass = p.condition === "Like New" ? "tag-like-new" : p.condition === "Excellent" ? "tag-excellent" : "tag-good";
                return (
                  <div key={p.id} className="product-card">
                    <div className={`product-img ${p.color}`}>
                      {p.emoji}
                      <span className={`product-tag ${tagClass}`}>{p.condition}</span>
                      <span className="save-badge">-{savePct}%</span>
                    </div>
                    <div className="product-info">
                      <div className="product-brand">{p.brand}</div>
                      <div className="product-name">{p.name}</div>
                      <div className="product-spec">{p.spec}</div>
                      <div className="product-footer">
                        <div className="product-price">
                          <span className="mrp">₹{p.mrp.toLocaleString("en-IN")}</span>
                          <span className="cur">₹{p.price.toLocaleString("en-IN")}</span>
                        </div>
                        <button className="enquire-btn" onClick={() => window.open(`https://wa.me/919876543210?text=Hi! I'm interested in the ${p.brand} ${p.name} listed at ₹${p.price}`, "_blank")}>
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/919876543210?text=Hi%20UrbanNeeds%2C%20I%20want%20to%20browse%20available%20ACs." target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        <span className="whatsapp-label">Chat with us</span>
      </a>
    </>
  );
}