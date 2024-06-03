import React from "react"
import Container from "../../components/Container/Container"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import imgLaptop from "../../assets/images/laptop.jpeg"
import css from "./ProductsPreview.module.css"
import Button from "../../components/Button/Button"

const ProductsPreview = () => {
  return (
    <Container>
      <div className={css.ProductsPreviewPage}>
        <Header />
        <main className={css.cardsBlock}>
          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 1" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 3" />
              </div>
              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 4" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 5" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 6" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 7" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 8" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
                />
              </div>
            </div>
          </a>

          <a href="https://google.com" className={css.productCardLink}>
            <div className={css.productCard}>
              <div className={css.productImg}>
                <img src={imgLaptop} alt="Product 9" />
              </div>

              <div className={css.productInfo}>
                <h3 className={css.productInfoTitle}>
                  Laptop Lenovo Y50-70 Aluminum Black
                </h3>
                <p className={css.productInfoDescr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque ad obcaecati, eveniet cupiditate vero impedit.
                  Consequatur, provident! Recusandae nihil iure sint vero nam
                  accusantium laudantium ducimus facere optio cumque qui vel
                  odit totam perspiciatis voluptatem, dicta quisquam nesciunt
                  labore.
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
                  minSize="150px"
                  iconName="basket"
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
