import React from 'react';

const products = [
    { id: 1, name: 'PLAYSTATION 5', price: 3500, image: 'https://m.media-amazon.com/images/I/51rzWirXO4L.jpg' },
    { id: 2, name: 'TV LG 65 4K UHD', price: 5500, image: 'https://i.zst.com.br/thumbs/12/d/3a/-8406940.jpg' },
    { id: 3, name: 'IPHONE 15 256GB ANDROID', price: 1500, image: 'https://i.zst.com.br/thumbs/12/10/34/-1114116737.jpg' },
    { id: 3, name: 'GELADEIRA LG SMART', price: 15000,image: 'https://www.lg.com/content/dam/channel/wcms/br/images/geladeiras/gr-x228nms1_amtgsbs_essp_br_c/gallery/1100_01.jpg' },
    { id: 4, name: 'MEIA USADA CONSERVADA', price: 10,image: 'https://media.istockphoto.com/id/1480557319/pt/foto/pair-of-white-used-dirty-socks-isolated-top-view-clipping-path.jpg?s=1024x1024&w=is&k=20&c=3GGdVSOkTkvCLfbMXBCGGLg4O_MA3P5nW3034QZltfs=' },
];

const ProductList = ({ addToCart }) => {
    const handleBuy = (product) => {
        const quantity = 1; 
        addToCart(product, quantity);
    };

    return (
        <div className="container mt-4">
            <h2>Produtos</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
                                <p className="card-text">Preço: R$ {product.price}</p>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => handleBuy(product)}>
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
