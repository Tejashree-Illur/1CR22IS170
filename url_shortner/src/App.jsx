import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UrlShortner from "./components/UrlShortner/UrlShortner";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <UrlShortner />
      </main>
      <Footer />
    </>
  );
}

export default App;
