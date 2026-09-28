import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Navbar />
      <main>
        <Banner />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
