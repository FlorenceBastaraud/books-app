import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Footer(){  
  return (
      <footer>
        <div>
          <a href="https://florence-b.com" target="_blank" rel="noreferrer">
            <small>2023 &copy; Florence Bastaraud</small>
          </a>
          <span>|</span>
          <a href="https://github.com/florencebastaraud" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/florence-bastaraud-2630b3204/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
    </footer>
  )
}


export default Footer