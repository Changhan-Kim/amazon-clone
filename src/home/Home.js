import React from 'react'
import './Home.css';
import Product from "../product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_GWBleedingHero_1500x600_Final_en-CA_FT_PVD6862._CB670220811_.jpg"
                    alt=""
                />
                <div className="home_row">
                    <Product 
                        id="1234567"
                        title="The lean startup" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Events/fathersday21/FD21_LowRes_Desktop._SY304_CB669414745_.jpg"
                        rating={5}
                    />
                    <Product />
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home_row">
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;
