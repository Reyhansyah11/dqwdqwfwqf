import {} from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function App() {
  

  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo"> <span>Rey</span>hansyah</a>
      </div>
      <div className="navbar-nav">
        <HashLink smooth to="/#Hero-Section" className="nav-link">Home</HashLink>
        <HashLink smooth to="/#About" className="nav-link">About</HashLink>
        <HashLink smooth to="/#Experience" className="nav-link">Experience</HashLink>
        <HashLink smooth to="/#Portfolio" className="nav-link">Portfolio</HashLink>
        <Link to="../Pages/ContactPage" className="nav-link">Contact</Link>
      </div>
    </nav>
    </>
  )
}

export default App