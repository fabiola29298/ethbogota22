import { Link } from "react-router-dom"

function Header() {

  return (
    <nav class="navbar">
      <div class="container-fluid">

        <div>Test1</div>

        <ul class="nav nav-tabs">

          <li class="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>

          <li class="nav-item">
            <Link to="/about" class="nav-link">About</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;