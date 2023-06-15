import Header from "../components/Header"
import TemplatesContainer from './templatesContainer'
import './stylesPages/pageTemplates.css'
import { Link } from 'react-router-dom';
import imagem1 from '../assets/sitewebteste.jpg'
import imagem2 from '../assets/sitewebteste2.jpg'
import imagem3 from '../assets/sitewebteste3.jpg'
import imagem4 from '../assets/sitewebteste4.jpg'
function PageTemplates() {

    return(
        <div className="PageTemplates">
            <header className="header_Page--template">
            <Header/>
            </header>
        
        <main className="templates">
            <header className="header_template">
                    <h1>
                        Veja alguns templates prontos
                    </h1>
                    <h3>
                        Não tem certeza em qual modelo escolher? Não se preocupe fale com nossa acessoria <Link style={{ textDecoration: 'none' }} to="/"><button onClick={ () => {
                           window.scrollBy(0, 2400);
                        }}>Acessoria</button></Link>
                    </h3>
            </header>
            <TemplatesContainer imagem1={imagem1} imagem2={imagem3} title1='lading andamento' title2='viacar' />
            <TemplatesContainer imagem1={imagem2} imagem2={imagem4} title1='loja eletronica' title2='loja virtual'/>
            <TemplatesContainer imagem1={imagem1} imagem2={imagem3} title1='lading andamento' title2='viacar'/>
            <TemplatesContainer imagem1={imagem2} imagem2={imagem4} title1='loja eletronica' title2='loja virtual'/>
            <TemplatesContainer imagem1={imagem1} imagem2={imagem3} title1='lading andamento' title2='viacar'/>
            <TemplatesContainer imagem1={imagem2} imagem2={imagem4} title1='loja eletronica' title2='loja virtual'/>
            <TemplatesContainer imagem1={imagem1} imagem2={imagem3} title1='lading andamento' title2='viacar'/>
            <TemplatesContainer imagem1={imagem2} imagem2={imagem4} title1='loja eletronica' title2='loja virtual'/>
            <TemplatesContainer imagem1={imagem1} imagem2={imagem3} title1='lading andamento' title2='viacar'/>
            <TemplatesContainer imagem1={imagem2} imagem2={imagem4} title1='loja eletronica' title2='loja virtual'/>
        </main>
        </div>
    )
}
export default PageTemplates