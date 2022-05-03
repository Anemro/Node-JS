import BotonCounter from './BotonCounter'

const ItemDetail = ({product}) => { 

    return (
    <>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
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
            </div>
        </div>
    </>
    )
}
        
 export default ItemDetail