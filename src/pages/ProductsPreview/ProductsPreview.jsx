import React from "react"
import Container from "../../components/Container/Container"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import imgLaptop from "../../assets/images/laptop.jpeg"
import css from "./ProductsPreview.module.css"
import Button from "../../components/Button/Button"

const ProductsPreview = () => {
  const isTabletMin = window.matchMedia("(min-width: 480px)").matches
  const isTabletMax = window.matchMedia("(max-width: 1023px)").matches
  let iconSize = isTabletMin && isTabletMax ? "26" : "32"
  let btnWidth = isTabletMin && isTabletMax ? "120px" : "150px"
  console.log(`iconSize:`, iconSize)

  return (
    <Container>
      <div className={css.ProductsPreviewPage}>
        <Header />
        <main className={css.cardsBlock}>
          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 2" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  aut doloribus error eius asperiores repellendus obcaecati ut
                  totam ipsum at labore, saepe, repudiandae, dignissimos dolor
                  quas quos? Itaque, alias pariatur.
                </p>
                <div className={css.priceAndQuantity}>
                  <p className={css.productInfoPrice}>$29.99</p>
                  <p className={css.productInfoQuantity}>Quantity: 333</p>
                </div>
              </div>
              <div className={css.productBuyBtn}>
                <Button
                  buttonType="submit"
                  buttonTitle="Buy product"
                  minWidth="120px"
                  width={btnWidth}
                  iconName="buyProduct"
                  iconSize={iconSize}
                />
              </div>
            </div>
          </a>
          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 2" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  aut doloribus error eius asperiores repellendus obcaecati ut
                  totam ipsum at labore, saepe, repudiandae, dignissimos dolor
                  quas quos? Itaque, alias pariatur.
                </p>
                <div className={css.priceAndQuantity}>
                  <p className={css.productInfoPrice}>$29.99</p>
                  <p className={css.productInfoQuantity}>Quantity: 333</p>
                </div>
              </div>
              <div className={css.productBuyBtn}>
                <Button
                  buttonType="submit"
                  buttonTitle="Buy product"
                  minWidth="120px"
                  width={btnWidth}
                  iconName="buyProduct"
                  iconSize={iconSize}
                />
              </div>
            </div>
          </a>
          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 2" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  aut doloribus error eius asperiores repellendus obcaecati ut
                  totam ipsum at labore, saepe, repudiandae, dignissimos dolor
                  quas quos? Itaque, alias pariatur.
                </p>
                <div className={css.priceAndQuantity}>
                  <p className={css.productInfoPrice}>$29.99</p>
                  <p className={css.productInfoQuantity}>Quantity: 333</p>
                </div>
              </div>
              <div className={css.productBuyBtn}>
                <Button
                  buttonType="submit"
                  buttonTitle="Buy product"
                  minWidth="120px"
                  width={btnWidth}
                  iconName="buyProduct"
                  iconSize={iconSize}
                />
              </div>
            </div>
          </a>
          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 2" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  aut doloribus error eius asperiores repellendus obcaecati ut
                  totam ipsum at labore, saepe, repudiandae, dignissimos dolor
                  quas quos? Itaque, alias pariatur.
                </p>
                <div className={css.priceAndQuantity}>
                  <p className={css.productInfoPrice}>$29.99</p>
                  <p className={css.productInfoQuantity}>Quantity: 333</p>
                </div>
              </div>
              <div className={css.productBuyBtn}>
                <Button
                  buttonType="submit"
                  buttonTitle="Buy product"
                  minWidth="120px"
                  width={btnWidth}
                  iconName="buyProduct"
                  iconSize={iconSize}
                />
              </div>
            </div>
          </a>
          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 2" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  aut doloribus error eius asperiores repellendus obcaecati ut
                  totam ipsum at labore, saepe, repudiandae, dignissimos dolor
                  quas quos? Itaque, alias pariatur.
                </p>
                <div className={css.priceAndQuantity}>
                  <p className={css.productInfoPrice}>$29.99</p>
                  <p className={css.productInfoQuantity}>Quantity: 333</p>
                </div>
              </div>
              <div className={css.productBuyBtn}>
                <Button
                  buttonType="submit"
                  buttonTitle="Buy product"
                  minWidth="120px"
                  width={btnWidth}
                  iconName="buyProduct"
                  iconSize={iconSize}
                />
              </div>
            </div>
          </a>
        </main>
        <Footer />
      </div>
    </Container>
  )
}

export default ProductsPreview
