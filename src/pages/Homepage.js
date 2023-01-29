import { GiMushroomGills } from "react-icons/gi"
import { Link } from "react-router-dom"
import { ContextBooks } from "../context/ContextBooks"
import { useContext } from "react"

function Homepage(){
  const {bloomBlookFunc} = useContext(ContextBooks)

  return (
      <section className="page homepage">
        <div className="intro">
          <h1 className="intro-title">Bienvenue dans votre bibliotèque virtuelle</h1>
          <h3 className="intro-subtitle">LibraryBlooms est un coin dédié à la découverte et redécouverte de livres tous genres confondus.</h3>
        </div>
        <div className="random-books-selection">
          <div className="random-books-selection-info">
            <p className="random-books-selection-text">Le <span>BloomBook</span> est un bouton ayant le pouvoir de vous proposer une sélection de 4 livres à découvrir, et ce, à volonté! :&#41;</p>
            <Link to="/bloombook-selection">
              <button className="random-books-selection-btn" onClick={bloomBlookFunc}>BloomBook <GiMushroomGills/></button>
            </Link>
          </div>
        </div>
      </section>
  )
}


export default Homepage