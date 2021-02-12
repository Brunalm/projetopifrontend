import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

import logoFooter from '../../assets/logo_footer.jpg';
import feitoNoBrasil from '../../assets/feitonobrasil_amarela.png';
import elo from '../../assets/payment-icon-elo.png';
import master from '../../assets/payment-icon-master.png';
import visa from '../../assets/payment-icon-visa.png';
import boleto from '../../assets/payment-icon-slip.png';

export default function Footer() {
    const location=useLocation();
    return (
        <div className="footer">
            <div className="menu-imagens">
                <img src={logoFooter} id="logo" alt="logoFooter" />
                <img src={feitoNoBrasil} id="brasil" alt="feitoNoBrasil" />
                <div className="tekoa-brasil">
                    <p>2020 ©️ Tekoá Tarumã Brazil.
                    <br/> Todos os direitos reservados.</p>
                </div>
            </div>
            <div className="menu-footer menu-atendimento">
                <strong>Atendimento</strong>
                <li className={location.pathname==='/contato'?'active':undefined}><Link to="/contato">CONTATO</Link></li>
            </div>
            <div className="menu-footer menu-institucional">
                <strong>Institucional</strong>
                <li className={location.pathname==='/quem-somos'?'active':undefined}><Link to="/quem-somos">QUEM SOMOS</Link></li>
            </div>
            <div className="menu-pagamentos">
                <p>Formas de Pagamento</p>
                <div className="pagamentos-img">
                    <img src={elo} alt="elo" />
                    <img src={master} alt="master" />
                    <img src={visa} alt="visa" />
                    <img src={boleto} alt="boleto" />
                </div>
            </div>
        </div>  
    )
}