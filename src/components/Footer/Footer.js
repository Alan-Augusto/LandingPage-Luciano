import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
        <div className="footer-line">
          <div className="footer-infos">
            <h4>Contato</h4>
            <p>
              <strong>Luciano Graciano Leite</strong><br />
              Endereço do Escritório:<br />
              Sabará, MG, 34.505-030<br />
              Telefone: (31) 99146-9620<br />
              Email: lucianoadvtrabalhista@gmail.com
            </p>
          </div>
          <div className="footer-infos">
            <p>
              Membro da Ordem dos Advogados do Brasil (OAB)<br />
              <strong>OAB/MG 150.754</strong><br />
              <br/>
              Pós-Graduado em Direito do Trabalho<br />
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-line">
          <div className="footer-infos">
            <p>
              © 2024 - LGL Advocacia Trabalhista. Todos os direitos reservados.
            </p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
