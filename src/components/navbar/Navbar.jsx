import "./styles.css";

export default function Navbar() {
  return (
    <div className="navbar-container" id="navbar">
      <nav className="navbar">
        <a href="#sobre">
          <span>{"<felipe>"}</span>
        </a>
        <ul>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#habilidades">
            <li>Habilidades</li>
          </a>
          <a href="#projetos">
            <li>Projetos</li>
          </a>
          <a href="#contatos">
            <li>Contatos</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
