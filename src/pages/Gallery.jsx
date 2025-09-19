import "./Gallery.css";
import AuroraExperiment from "../experiments/aurora/AuroraExperiment";
import PlainExperiment from "../experiments/plain/PlainExperiment";
import CactusExperiment from "../experiments/cactus/CactusExperiment";
import NebulaExperiment from "../experiments/nebula/NebulaExperiment";
import DuneExperiment from "../experiments/dune/DuneExperiment";
import ForestExperiment from "../experiments/forest/ForestExperiment"
import RedMoonExperiment from "../experiments/redmoon/RedMoonExperiment";
import VoidExperiment from "../experiments/void/VoidExperiment";

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

            <article className="card">
                <header className="card__title">Nebula</header>
                <div className="frame"><NebulaExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

            <article className="card">
                <header className="card__title">Dune</header>
                <div className="frame"><DuneExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

            <article className="card">
                <header className="card__title">Void</header>
                <div className="frame"><ForestExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

            <article className="card">
                <header className="card__title"></header>
                <div className="frame"><RedMoonExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

            <article className="card">
                <header className="card__title"></header>
                <div className="frame"><VoidExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

            <article className="card">
                <header className="card__title"></header>
                <div className="frame"><VoidExperiment /></div>
                <footer className="card__actions">...</footer>
            </article>

        </div>
    );
}

export default Gallery;
