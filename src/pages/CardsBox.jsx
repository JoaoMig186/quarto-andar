import Card from '../components/Card'
import './stylesPages/cardsBox.css'

function CardsBox(){
    return(
        <div className="section_cardsBox">   
                <h2>Benêficios conosco</h2>
                <div className="container_cardBox">
                    <Card 
                        titulo={"REDES SOCIAIS"} 
                        paragrafo={"O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas."}
                    />
                    <Card 
                        titulo={"SUCESSO DO CLIENTE"}
                        paragrafo={"Você será atendido por profissionais experientes que darão dicas de estratégias para alcançar o seu sucesso online."}
                    />
                    <Card 
                    // Um site adaptável para computador, tablet e celular melhora a experiência do usuário, aumentando as interações.
                        titulo={"SITE RESPONSIVO"}
                        paragrafo={"Um site adaptável para pc, tablet e celular melhora a expreiência do usuário. Com isso aumenta as interações."}
                    />
                    <Card 
                        titulo={"SITE 100% MODERNO"} 
                        paragrafo={"Site moderno de acordo com a demanda do mercado."}
                    />
                <Card 
                        titulo={"PROFISSIONAIS QUALIFICADOS"} 
                        paragrafo={"Profissionais determinados a trazer melhor  o desempenho, para te entregar o site com qualidade."}
                    />
                    <Card 
                        titulo={"MANUTENÇÃO"}
                        paragrafo={"Ao fazer um site conosco, você terá direito a 1 mês grâtis de manutenção."}
                    />
                    <Card 
                        titulo={"PLANOS EXCLUSIVO"}
                        paragrafo={"Planos acessíveis pensando no cliente."}
                    />
                    <Card 
                        titulo={"ACESSORIA DE DÚVIDAS"} 
                        paragrafo={"Estaremos à sua disposição em caso de qualquer tipo de duvida."}
                    />
                </div>
        </div>
    )
}

export default CardsBox