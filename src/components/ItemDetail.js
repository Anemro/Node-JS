import BotonCounter from './BotonCounter'
import CartWidget from './CartWidget'

const ItemDetail = ({product}) => { 

    return (
        
    <>
    <main className="itemDetail">
        <div className="left-column">
            <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.title}
            />
        </div>
        <div className="right-column">
            <div className="product-description">
                <span>{product.genere}</span>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
              </div>
              <div className="product-price">
                  <span>{product.price}</span>
                  <div>
                     <BotonCounter initial={1} stock={product.stock}/>
                  </div>
                  <a href="#" className="cart-btn"><CartWidget/></a>
              </div>
            </div>    
        </main>
        <div className="resume">
              <p>Archivo Digital</p>
              <p>{product.title}</p>
              <p>Contiene:</p>
              <ul>
                  <li>Tarjetas (editables)</li>
                  <li>Individual A3 para la mesa</li>
                  <li>Tarjetitas gracias por venir (editables)</li>
                  <li>Bolsita para souvenir (editable)</li>
                  <li>Etiquetas rectangulares multifunción (editable)</li>
                  <li>Etiquetas plegables para mesa dulce o decoración de comida (editable)</li>
                  <li>Banderitas decorativas (algunas editables)</li>
                  <li>Molinetes</li>
                  <li>Banderines Letras (editable)</li>
                  <li>Banderines con animalitos de la granja</li>
                  <li>Cartel bienvenidos A3 (editable)</li>
                  <li>Círculos decorativos 14 cm (editable)</li>
                  <li>Figura decorativa animalitos de la granja A4</li>
                  <li>Figura decorativa animalitos de la granja A3</li>
                  <li>Gorritos/bonetes</li>
                  <li>Tarjetitas Souvenir (editable)</li>
                  <li>Papeles para decorar</li>
                  <li>Cajita Pop Corn (editable)</li>
                  <li>Toppers (editables) y wrappers</li>
                  <li>Candy Bar: Etiquetas circulares 4 cm (editable), etiquetas para turrón (editable), etiquetas Rodhesias 2 modelos (editable), etiquetas Tita 2 modelos (editable), etiquetas chocolatines (editables), envoltorio para marroc, etiqueta Cierra bolsita (editable).</li>
                  <li>Poster Pizarra Tamaño A3 (editable)</li>
                  <li>Jueguito Ta Te Ti Animalitos de la Granja tamaño A4 (editable)</li>
              </ul>
            </div>

            
       {/*  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
            <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.title}
            />

            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
            <BotonCounter initial={1} stock={product.stock}/>
            <div>
                <CartWidget/>
            </div>
            </div>
        </div> */}
    </>
    )
}
        
 export default ItemDetail