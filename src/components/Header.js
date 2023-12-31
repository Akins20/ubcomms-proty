import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/">
          UBC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                target="_blank"
                href="https://ubc.auth.us-east-1.amazoncognito.com/login?client_id=7opge27d7oj3pjo4mjr0ednget&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.dtzpjajlhuqro.amplifyapp.com%2Fdashboard.html"
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                target="_blank"
                href="/SignupPage">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
