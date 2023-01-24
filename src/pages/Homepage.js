import { GiMushroomGills } from "react-icons/gi"
import { Link } from "react-router-dom"

function Homepage(){
  return (
      <section className="page homepage">
        <div className="intro">
          <h1 className="intro-title">Bienvenue dans votre librairie virtuelle</h1>
          <h3 className="intro-subtitle">LibraryBlooms est un coin dédié à la découverte et redécouverte de livres tous genres confondus.</h3>
        </div>
        <div className="random-books-selection">
          <div className="random-books-selection-info">
            <p className="random-books-selection-text">Le <span>BloomBook</span> est un bouton ayant le pouvoir de vous proposer une sélection de 4 livres à découvrir, et ce, à volonté! :&#41;</p>
            <Link to="/bloombook-selection">
              <button className="random-books-selection-btn">BloomBook <GiMushroomGills/></button>
            </Link>
          </div>
          <div className="random-books-selection-grid">
          </div>
        </div>
      </section>
  )
}


export default Homepage