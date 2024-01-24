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
          <div className="footer-infos">
              <p>Onde estou:</p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15006.937160347541!2d-43.8119384!3d-19.8934387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69df6ef68c6db%3A0xad1bee1154fc94a6!2s%F0%9F%9F%A1LGL%20Advocacia%20Trabalhista!5e0!3m2!1spt-BR!2sbr!4v1706064976872!5m2!1spt-BR!2sbr" 
                style={{border:0, borderRadius: 5, height: 100, width: 500}}
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              <br/>
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
