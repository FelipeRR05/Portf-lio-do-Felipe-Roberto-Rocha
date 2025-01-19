import "./styles.css";

export default function SobreMim() {
  return (
    <div className="sobre-mim-container" id="sobre">
      <div className="introducao">
        <div className="introducao-texto">
          <h1>
            Olá, eu sou <span className="nome">Felipe Roberto Rocha</span>
          </h1>
          <p>Graduando em Engenharia de Software pelo Instituto Infnet.</p>
        </div>
        <div className="introducao-imagem">
          <img src="/assets/images/1693340537788.jpg" />
        </div>
      </div>
      <div className="descricao">
        <h2>Sobre Mim</h2>
        <p>
        Sou Engenheiro de Software com experiência prática em React, React Native, HTML, CSS, JavaScript e PHP. Focado na criação de aplicações dinâmicas, responsivas e voltadas à solução de problemas reais. Possuo sólidos conhecimentos em bancos de dados MySQL e sou entusiasta de metodologias ágeis, com destaque para habilidades em trabalho em equipe e comunicação eficaz.
        </p>
        <p>
        Atualmente, curso Engenharia de Software no Instituto Infnet e possuo formação técnica em Desenvolvimento de Sistemas pelo SENAI. Busco oportunidades para ingressar na área de Tecnologia da Informação.
        </p>
      </div>
    </div>
  );
}
