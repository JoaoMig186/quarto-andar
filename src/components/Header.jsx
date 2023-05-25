import './stylesComponents/header.css'
import '../app.css'
import setinha from '../assets/setaPracima.png'

function Header(props) {

  const handleClick = () => {
    let menu = document.getElementById("menu");

    if(menu.style.marginLeft == "100vw") {
      menu.setAttribute("style", "margin-left:0");
  }else {
      menu.setAttribute("style", "margin-left:100vw");
  }
  }

  return (
    <div>
      <button id="backToTop" onClick={props.functionScrollTop}>
        <img src={setinha}/>
      </button>
      <header className="header" id="header">
      <div id="quartoAndarLogo-Menu"> 
       <span id="logo">4A</span>
       <span>ndar</span>
    </div>
    <div className="caixa_menu">
      <div className="oneList">
        <button onClick={props.functionScrollToAcessoria}>Acessoria ao cliente</button>
        <button>Todos projetos</button>
      </div>
       <h1 id="quartoAndarLogo-Desktop">Quarto Andar</h1>
       <div className="twoList">
        <button>Contatos</button>
        <button>Nossos desenvolvedores</button>
      </div>
    </div>
    <button id="menuMobile_icone" onClick={handleClick}> 
        <div></div>
        <div></div>
        <div></div>
    </button>
    </header>
    <div className="menuMobile" id="menu">
      <button>Quarto Andar</button>
      <button onClick={props.functionScrollToAcessoria}>Acessoria ao cliente</button>
      <button>Todos projetos</button>
      <button>Contatos</button>
      <button>Nossos Desenvolvedores</button>
    </div>
    </div>
  )
}

export default Header