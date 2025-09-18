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
          <div className="container">

          </div>
          <div className="hero-fade" />
        </section>
      </div>

      <main className="container">
        <section id="about" className="section">About</section>
        <section id="projects" className="section"></section>
        <section id="contact" className="section">Contact</section>
      </main>

      <footer className="footer">© {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;