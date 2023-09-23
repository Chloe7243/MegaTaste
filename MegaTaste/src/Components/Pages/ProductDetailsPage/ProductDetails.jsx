import { useParams } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Container from "../../UI/Container/Container";
import Size from "../../Size/size";
import Quantity from "../../Quantity/Quantity";
import Button from "../../UI/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ProductDetails.module.css";
import Price from "../../Price/Price";
import { useContext, useEffect, useState } from "react";
import Product from "../../Product/Product";
import AppContexts from "../../../contexts/app-contexts";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";

const ProductDetails = () => {
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [showText, setShowText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [size, getSize] = useState();
  const [quantity, getQuantity] = useState(1);
  const [productDetailsCart, setProductDetailsCart] = useState({});

  const ctx = useContext(AppContexts);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  const id = useParams().id;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        console.log("loading");
        const response = await fetch(
          `https://api.spoonacular.com/food/menuItems/${id}?query&apiKey=58b794d21aef49a1924adbbc5aef7cc5`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        console.log(data);
        setDetails(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (Object.keys(details).length) {
      setProductImages([details.image, ...details.images]);
    }
  }, [details]);

  const products = [
    {
      name: "Burger",
      img: "https://home-market-4.myshopify.com/cdn/shop/products/fastfood-1.png",
    },
    {
      name: "Pizza",
      img: "https://home-market-4.myshopify.com/cdn/shop/products/pizza-3.png",
    },
    {
      name: "Desserts",
      img: "https://s1.1zoom.me/big0/964/Sweets_Cake_Chocolate_White_background_Design_563125_1280x870.jpg",
    },
    {
      name: "Cocktails and Drinks",
      img: "https://img.freepik.com/free-vector/cocktail-glass-white-background_1308-112632.jpg",
    },
    {
      name: "Chicken",
      img: "https://home-market-4.myshopify.com/cdn/shop/products/chiken-4.png",
    },
    {
      name: "Soup",
      img: "https://www.corriecooks.com/wp-content/uploads/2018/09/vegetable-noodle-soup.jpg",
    },
    {
      name: "Salad",
      img: "https://static.vecteezy.com/system/resources/previews/021/818/869/large_2x/flying-vegetable-greek-salad-isolated-on-white-background-photo.jpg",
    },
    {
      name: "Pasta",
      img: "https://img.freepik.com/premium-photo/spaghetti-with-bolognese-sauce-basil-white-background_375133-1674.jpg?w=2000",
    },
  ];

  const addToCart = () => {
    const existingProduct = ctx.cartProducts.filter(
      (obj) => obj.mainId === details.id && obj.size === size
    );

    if (existingProduct.length != 0) {
      existingProduct[0].quantity += quantity;
      setProductDetailsCart(existingProduct[0]);
    } else
      setProductDetailsCart({
        mainId: details.id,
        productId: ctx.cartProducts.length,
        productImage: details.image,
        productName: details.title,
        productPrice: Math.round(details.id / 100),
        productSize: size,
        productQuantity: quantity,
      });

    getQuantity(1);
  };

  useEffect(() => {
    Object.keys(productDetailsCart).length &&
      ctx.setCartProducts((prev) => [productDetailsCart, ...prev]);
  }, [productDetailsCart]);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={productImages[i]} alt="" />
        </a>
      );
    },
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    accessibility: true,
  };

  return (
    <>
      <Banner pageName={`${useParams().name} Details`} />
      <Container className={styles.details__container}>
        {!isLoading && !error && (
          <>
            <div className={styles.description}>
              <div className={styles["detail-images"]}>
                <Slider
                  {...settings}
                  className={styles["product-images__carousel"]}
                >
                  {products.length &&
                    productImages.map((img, i) => (
                      <div className={styles["detail-image"]} key={img + i}>
                        <img src={img} alt="" />
                        <div className={styles.image__overlay}></div>
                      </div>
                    ))}
                </Slider>
              </div>
              <div className={styles.details}>
                <h2>{details.title}</h2>
                <Price price={details.price || Math.round(details.id / 100)} />
                <Size getSize={getSize} />
                <Quantity cartQuantity={quantity} getQuantity={getQuantity}>
                  <p>Quantity</p>
                </Quantity>
                <Button color="var(--secondary-color)" onClick={addToCart}>
                  Add To Cart
                </Button>
                <Button color="black">Buy it now</Button>
                <p className={styles.tags}>
                  <span>Tags: </span>
                  {/* {details.breadcrumbs.join(", ")} */}
                </p>
                <div>
                  <h4>
                    Description{" "}
                    <button onClick={toggleText}>
                      {showText ? <PiCaretUpLight /> : <PiCaretDownLight />}
                    </button>
                  </h4>
                  {showText && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, voluptatibus. Iusto doloribus laudantium voluptas
                      numquam. Consequatur magnam adipisci ipsum. Earum nobis
                      omnis temporibus minima quas ducimus rerum in? Voluptatum,
                      consectetur? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Blanditiis molestias quo ducimus ab
                      accusamus magni modi unde soluta! Libero officia tenetur
                      repellendus alias in deleniti odit qui ipsum eaque id.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles["related"]}>
              <h3>You may also like</h3>
              <div>
                {products.map((productDetails, idx) => (
                  <Product product={productDetails} key={idx} />
                ))}
              </div>
            </div>
          </>
        )}
        {!isLoading && !error && details.length === 0 && (
          <p>No details found!</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </Container>
    </>
  );
};
export default ProductDetails;
