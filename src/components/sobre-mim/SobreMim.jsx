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
          <img src="https://lh3.googleusercontent.com/a/ACg8ocIafLOAAbxAp0WaDDkybZlu56NvNIGELVP3CRCdcFwBHc-g30mv=s288-c-no" />
        </div>
      </div>
      <div className="descricao">
        <h2>Sobre Mim</h2>
        <p>
          Sou apaixonado por tecnologia e por encontrar soluções criativas para
          problemas complexos. A curiosidade me impulsiona a explorar novas
          tecnologias e a aprender constantemente. Acredito que a programação é
          a chave para transformar ideias em realidade e desenvolver produtos
          que facilitem a vida das pessoas. A cada novo projeto, descubro novas
          formas de aplicar meus conhecimentos e criar soluções inovadoras.
        </p>
      </div>
    </div>
  );
}
