import Explorer from "./components/Explorer";
import BackToTop from "./components/ui/BackToTop";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
  return (
    <main className="flex justify-between flex-col h-screen">
      <Header />
      <Explorer />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;
