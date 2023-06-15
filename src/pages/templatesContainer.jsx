import { useState } from "react";

function TemplatesContainer({ imagem1, imagem2, title1, title2 }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <section className="templates_container">
      <div className="card_template">
        <img src={imagem1} alt="Imagem 1" />
        <div className="content">
          <h2 className="card-title_template">{title1}</h2>
          <button className='exibir-CARD' onClick={openModal}>exibir</button>
        </div>
      </div>
      <div className="card_template">
        <img src={imagem2} alt="Imagem 2" />
        <div className="content">
          <h2 className="card-title_template">{title2}</h2>
          <button className='exibir-CARD' onClick={openModal}>exibir</button>
        </div>
      </div>
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="explicativo">
                    <h2>{title1}</h2>
                    <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae adipisci itaque expedita magni maiores id eligendi voluptatum et iusto obcaecati quibusdam impedit, quam sed excepturi iste porro suscipit quidem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum non debitis possimus corporis exercitationem. Dicta optio tempora quisquam autem reprehenderit esse reiciendis ullam natus, consequuntur eligendi corporis rem porro!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque voluptate nisi id, ipsum dolorem earum quisquam quam illo odio recusandae reprehenderit ex quae dignissimos est alias ad ea eligendi!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae adipisci itaque expedita magni maiores id eligendi voluptatum et iusto obcaecati quibusdam impedit, quam sed excepturi iste porro suscipit quidem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum non debitis possimus corporis exercitationem. Dicta optio tempora quisquam autem reprehenderit esse reiciendis ullam natus, consequuntur eligendi corporis rem porro!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque voluptate nisi id, ipsum dolorem earum quisquam quam illo odio recusandae reprehenderit ex quae dignissimos est alias ad ea eligendi!</p>
                    
                    </div>
                    <button>Garantir esse template</button>
            </div>
            <div className="explicativo--image">
            <img src={imagem2} alt="Imagem 2" />
            </div>
            <button className='exibir-CARD' id="close" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default TemplatesContainer;