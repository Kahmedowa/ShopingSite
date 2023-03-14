import products from '../data/products.json';


const Products = () => {
    return (
        <div className='carts'>
            {/* <div className="card bg-dark text-white"> */}
                <div className='products'>
                    {products.map((product) => {
                        return (
                            <div className='product'>
                                <div className='info'>
                                    <div className='title'>Title: {product.title}</div>
                                    <div className='price'>Price: {product.price} <i className="fa fa-eur me-1"></i></div>
                                    <div className='description'>Description: {product.description}</div>
                                    <div className='category'>Category: {product.category}</div>
                                    <div className='rating'>Rating: {product.rating.rate} <i className="fa fa-star me-1"></i></div>
                                    <div className='rating'>Count: {product.rating.count}</div>
                                    
                                </div>
                                <div className="numberOfLikes">Number of likes: {products.reduce((acc, product) => acc + (product.isLiked ? 1 : 0), 0)}</div>
                                <img src={product.image} />

                            </div>
                        );
                    })}
                </div>
            </div>
    );
}

export default Products;