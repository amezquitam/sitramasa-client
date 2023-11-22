
import '../../boatmans/components/BoatmanView.css'

const seller = {
    name: 'Lucas Hernandez',
    pending: [
    ]
}

export const SellerView = () => {
    return (
        <div className="pg-container bm-view">
            <h1 className='bv-title'>Bienvenido Vendedor {seller.name} </h1>
        </div>
    )
}