import "./App.css";
import Banner from "./components/Banner";
import Pages from "./components/Pages";
import Services from "./components/Services";

function App() {
  return (
    <>
      <main className="min-h-screen w-full bg-gray-50">
        <Banner />
        <Services />
        <Pages />
      </main>
    </>
  );
}

export default App;
