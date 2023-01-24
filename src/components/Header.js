import { Link } from "react-router-dom"

function Header(){
  return (
      <header>
        <Link to="/"><h1>Bibliotèque 2.0</h1></Link>
        <ul>
          <Link to="/library"><li>Parcourir la Bibliotèque</li></Link>
          <Link to="/favorites"><li>Mes favoris</li></Link>
        </ul>
    </header>
  )
}


export default Header