import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import sidebarLinks from "./data/sidebarLinksData";  

function App() {
  return (
    <div className="app-container">
      <Sidebar
        general={sidebarLinks.general}
        tools={sidebarLinks.tools}
        settings={sidebarLinks.settings}
      />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
