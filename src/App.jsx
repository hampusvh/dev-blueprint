import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <div className="masthead">
        <header className="topbar">
          <div className="container">
            <strong></strong>
          </div>
        </header>

        <section className="hero">
          <div className="container"></div>
          <div className="hero-fade" />
        </section>
      </div>

      <main className="container">
        <Gallery />
      </main>

      <footer className="footer">© {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
