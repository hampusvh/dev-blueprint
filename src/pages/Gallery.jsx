import "./Gallery.css";
import AuroraExperiment from "../experiments/aurora/AuroraExperiment";
import PlainExperiment from "../experiments/plain/PlainExperiment";
import CactusExperiment from "../experiments/cactus/CactusExperiment";

const Gallery = () => {
    return (
        <div className="gallery">
            <article className="card">
                <header className="card__title">Aurora</header>
                <div className="frame"><AuroraExperiment /></div>
                <footer className="card__actions">Live preview</footer>
            </article>

            <article className="card">
                <header className="card__title">Plain</header>
                <div className="frame"><PlainExperiment /></div>
                <footer className="card__actions">Static preview</footer>
            </article>

            <article className="card">
                <header className="card__title">Cactus</header>
                <div className="frame"><CactusExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

        </div>
    );
}

export default Gallery;
