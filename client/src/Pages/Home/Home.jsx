import Slider from "../../Components/Slider/Slider";

import BlogList from "../../Components/BlogList/BlogList";
import ProductList from "../../Components/ProductList/ProductList";
import ProductList2 from "../../Components/ProductList2/ProductList2";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home" >
            <Slider />
            <div className="collections">
                <div className="collection-banner" >
                    <img src="/img/Ads-Men.jpg" alt="collection-banner" />
                </div>
                <div className="collection-banner">
                    <img src="/img/Adv-Kids.jpg" alt="collection-banner" />
                </div>
                <div className="collection-banner">
                    <img src="/img/Ads-Women.jpg" alt="collection-banner" />
                </div>
            </div>

            <div className="sections">
                <div className="new-section">
                    <div className="section-heading">
                        <div className="color-block">
                            <div className="green-block">
                            </div>
                            <div className="blue-block">
                            </div>
                            <div className="purple-block">
                            </div>
                        </div>
                        <div className="heading-text">
                            What's New?
                        </div>
                    </div>
                    <div className="product-slider">
                        <ProductList />
                    </div>
                </div>

                <div className="best-seller-section">
                    <div className="section-heading">
                        <div className="color-block">
                            <div className="green-block">
                            </div>
                            <div className="blue-block">
                            </div>
                            <div className="purple-block">
                            </div>
                        </div>
                        <div className="heading-text">
                            Best Sellers
                        </div>
                    </div>
                    <div className="men-section">
                        <div className="men-slider">
                            <ProductList2 skip={0} limit={3} category={"Men"} />
                        </div>
                        <img className="poster-img" src="/img/Deal-men.jpg" alt="deal-poster" />
                    </div>
                    <div className="women-section">
                        <img className="poster-img" src="/img/Deal-women.jpg" />
                        <div className="woman-slider">
                            <ProductList2 skip={0} limit={3} category={"Women"} />
                        </div>
                    </div>
                </div>

                <div className="blogs-section">
                    <div className="section-heading">
                        <div className="color-block">
                            <div className="green-block">
                            </div>
                            <div className="blue-block">
                            </div>
                            <div className="purple-block">
                            </div>
                        </div>
                        <div className="heading-text">
                            Blogs
                        </div>
                    </div>
                    <div className="list-blog">
                        <BlogList skip={0} limit={3} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;