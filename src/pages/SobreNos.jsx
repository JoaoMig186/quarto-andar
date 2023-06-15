import Janela from '../components/Janela.jsx'
import './stylesPages/sobreNos.css'

export default function SobreNos(){

    return(
        <section className="section_sobreNos"> 
            <h2>Sobre nós</h2>
            <div className='carrossel-sobreNos'>
                <Janela 
                        titulo="Nossa história"
                        texto="Tudo começou na faculdade de Engenharia de software, 
                        quando o Lucas, nosso pioneiro, teve a ideia de fundar o 
                        quarto andar! Então ele juntou-se com o João Miguel, Kaique 
                        e com o Pedro para iniciar o projeto! Eles se reuníam sempre 
                        no quarto andar da faculdade e é daí que surgiu o nome da 
                        empresa!"
                />
                <Janela  
                        titulo="Nossos fundadores"
                        texto="Temos 4 pessoas que participam do Quarto Andar desde o
                        seu começo. Lucas Gomes, João Miguel Santos, Pedro Cuber e Kaique
                        Coelho. Eles sempre foram unidos e se empenharam ao máximo para 
                        esse projeto ser realizado!"
                        imageVerification={true} 
                        img="https://img.freepik.com/fotos-gratis/retrato-de-um-sorrindo-jovem-macho-amigos-olhando-camera_23-2148160212.jpg?w=2000"

                />
                <Janela/>
                <Janela/>
            </div>
            <p id="texto-aparecendo">Passe o mouse sobre às janelas para revelar seu conteúdo!</p>
        </section>
    )
}