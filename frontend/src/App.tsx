import { useState } from "react";
import "./App.css";

type Screen =
  | "Overview"
  | "Map"
  | "Field Objects"
  | "Statistics"
  | "Verification";

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("Overview");

  const screens: Screen[] = [
    "Overview",
    "Map",
    "Field Objects",
    "Statistics",
    "Verification",
  ];

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>AgriParcel</h1>
          <p>Agricultural Mapping & Verification</p>
        </div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <nav>
            {screens.map((screen) => (
              <button
                key={screen}
                className={activeScreen === screen ? "active" : ""}
                onClick={() => setActiveScreen(screen)}
              >
                {screen}
              </button>
            ))}
          </nav>
        </aside>

        <main className="main-content">
          {activeScreen === "Overview" && (
            <>
              <div className="page-heading">
                <h2>Overview</h2>
                <p>
                  Satellite-derived agricultural mapping and verification
                  dashboard.
                </p>
              </div>

              <section className="overview-grid">
                <div className="stat-card">
                  <span>Study Area</span>
                  <strong>—</strong>
                  <small>km²</small>
                </div>

                <div className="stat-card">
                  <span>Agricultural Area</span>
                  <strong>—</strong>
                  <small>ha</small>
                </div>

                <div className="stat-card">
                  <span>Paddy Area</span>
                  <strong>—</strong>
                  <small>ha</small>
                </div>

                <div className="stat-card">
                  <span>Banana Area</span>
                  <strong>—</strong>
                  <small>ha</small>
                </div>

                <div className="stat-card">
                  <span>Field Objects</span>
                  <strong>—</strong>
                  <small>objects</small>
                </div>

                <div className="stat-card">
                  <span>Evidence Quality</span>
                  <strong>—</strong>
                  <small>backend result</small>
                </div>
              </section>

              <section className="overview-panels">
                <div className="panel">
                  <h3>Study Area</h3>

                  <div className="info-row">
                    <span>District</span>
                    <strong>Tirunelveli</strong>
                  </div>

                  <div className="info-row">
                    <span>Taluks</span>
                    <strong>Ambasamudram & Cheranmahadevi</strong>
                  </div>

                  <div className="info-row">
                    <span>Study Area</span>
                    <strong>—</strong>
                  </div>
                </div>

                <div className="panel">
                  <h3>Analysis</h3>

                  <div className="info-row">
                    <span>Satellite Data</span>
                    <strong>—</strong>
                  </div>

                  <div className="info-row">
                    <span>Analysis Period</span>
                    <strong>—</strong>
                  </div>

                  <div className="info-row">
                    <span>Model</span>
                    <strong>—</strong>
                  </div>
                </div>
              </section>

              <section className="notice-panel">
                <h3>Data Status</h3>
                <p>
                  Satellite analysis results will appear here after the
                  backend processing pipeline is connected.
                </p>
              </section>
            </>
          )}

          {activeScreen === "Map" && (
            <>
              <div className="page-heading">
                <h2>Map</h2>
                <p>Satellite-derived agricultural map.</p>
              </div>

              <div className="empty-state">
                <h3>Map interface</h3>
                <p>
                  MapLibre map and classified field objects will be connected
                  to backend outputs.
                </p>
              </div>
            </>
          )}

          {activeScreen === "Field Objects" && (
            <>
              <div className="page-heading">
                <h2>Field Objects</h2>
                <p>
                  Image-derived agricultural field objects and crop
                  classifications.
                </p>
              </div>

              <div className="empty-state">
                <h3>Field object data</h3>
                <p>
                  Backend-generated field objects will be displayed here.
                </p>
              </div>
            </>
          )}

          {activeScreen === "Statistics" && (
            <>
              <div className="page-heading">
                <h2>Statistics</h2>
                <p>Mapped agricultural area and classification statistics.</p>
              </div>

              <div className="empty-state">
                <h3>Statistics</h3>
                <p>
                  Statistics will be populated from backend results. No
                  calculated values are invented in the frontend.
                </p>
              </div>
            </>
          )}

          {activeScreen === "Verification" && (
            <>
              <div className="page-heading">
                <h2>Verification</h2>
                <p>
                  Compare declared agricultural area with satellite-derived
                  mapped area.
                </p>
              </div>

              <div className="empty-state">
                <h3>Verification results</h3>
                <p>
                  Declaration comparison, evidence quality, and review status
                  will be populated from backend results.
                </p>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;