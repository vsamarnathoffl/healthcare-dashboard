import { useState } from "react";
import { Menu, ChevronLeft } from "lucide-react";

export default function Sidebar({ general, tools, settings }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavSection = (title, items) => (
    <div className="section">
      <h2 className="sb-heading">{title}</h2>
      <ul className="nav-lists">
        {items.map(({ label, icon: Icon }) => (
          <li className="nav-item" key={label}>
            <a href="#" className="nav-list">
              <Icon size={18} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={24} />
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          className="sidebar-toggle-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <ChevronLeft size={24} />
        </button>

        <h1 className="logo">
          <span className="logo-health">Health</span>
          <span className="logo-care">care.</span>
        </h1>

        {renderNavSection("General", general)}
        {renderNavSection("Tools", tools)}

        <div className="settings">
          <ul className="nav-lists">
            {settings.map(({ label, icon: Icon }) => (
              <li className="nav-item" key={label}>
                <a href="#" className="nav-list">
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
