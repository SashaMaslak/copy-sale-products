import React from "react"
import Container from "../../components/Container/Container"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import imgLaptop from "../../assets/images/laptop.jpeg"
import css from "./ProductsPreview.module.css"

const ProductsPreview = () => {
  return (
    <Container>
      <div className={css.ProductsPreviewPage}>
        <Header />
        <main className={css.cardsBlock}>
          <div class={css.productCard}>
            <img src={imgLaptop} alt="Product 1" />
            <div className={css.productInfo}>
              <h3>Product 1</h3>
              <p>Short description of the product.</p>
              <div className={css.price}>$29.99</div>
            </div>
          </div>
          <div className={css.productCard}>
            <img src={imgLaptop} alt="Product 2" />
            <div className={css.productInfo}>
              <h3>Product 2</h3>
              <p>Short description of the product.</p>
              <div className={css.price}>$39.99</div>
            </div>
          </div>
          <div className={css.productCard}>
            <div className={css.productImg}>
              <img src={imgLaptop} alt="Product 3" />
            </div>
            <div className={css.productInfo}>
              <h3>Product 3</h3>
              <p>Short description of the product.</p>
              <div className={css.price}>$49.99</div>
            </div>
          </div>
          <div className={css.productCard}>
            <img src={imgLaptop} alt="Product 4" />
            <div className={css.productInfo}>
              <h3>Product 3</h3>
              <p>Short description of the product.</p>
              <div className={css.price}>$49.99</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Container>
  )
}

export default ProductsPreview
