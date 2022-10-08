import { Link } from "react-router-dom"

function LandingPageButton() {

  return <Link to="/about" class="nav-link">
    <button class="btn btn-primary" >
      <span style={{ "font-size": "24px" }}>
        Click Me!
      </span>
    </button>
  </Link>
}

function LandingFrameMessage() {

  const style = {
    margin: "auto",
    padding: "10% 35% 10% 15%",
    color: "white"
  }

  return <div style={style}>

    <div style={{ "font-size": "96px" }}>
      Hello World!!
    </div>

    <div style={{ "font-size": "36px" }}>
      This is the landing page and here's some content.
      How much wood would a woodchuck chuck if a woodchuck would chuck wood?
    </div>

    <br />

    <LandingPageButton />

  </div>
}

function LandingFrame() {
  const style = {

    "background-image": `url("images/background.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%"
  }

  return <div style={style}>
    <LandingFrameMessage />
  </div>
}

function HomePage() {
  return <div>
    <LandingFrame />
  </div>
}

export default HomePage