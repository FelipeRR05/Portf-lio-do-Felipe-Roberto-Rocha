import "./styles.css";

export default function Contatos() {
  return (
    <div className="contatos-container" id="contatos">
      <h2>Contatos</h2>
      <div className="contatos-text">
        <p>E-mail: feliperobertor05@gmail.com</p>
        <p>Telefone: +55 (47) 98419-7654</p>
      </div>
      <div className="contatos-redes">
        <a href="https://www.linkedin.com/in/feliperrocha/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
        </a>
        <a href="https://github.com/FelipeRR05">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        </a>
      </div>
    </div>
  );
}
