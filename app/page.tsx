import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
