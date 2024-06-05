import React from "react"
import Container from "components/Container/Container"
import Button from "components/Button/Button"
import Table from "components/Table/Table"
import css from "./ProductsTable.module.css"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"

const ProductsTable = () => (
  <Container>
    <div className={css.productsTablePage}>
      <Header />

      <nav className={css.nav}>
        <Button
          buttonType="button"
          buttonTitle="Preview"
          styleAdd="border"
          minSize="150px"
          iconName="preview"
        />
        <Button
          buttonType="button"
          buttonTitle="Add product"
          styleAdd="border"
          minSize="150px"
          iconName="addProduct"
        />
      </nav>
      <h2 className={css.title}>Products</h2>
      <main className={css.tableBlock}>
        <Table />
      </main>
    </div>
    <Footer />
  </Container>
)

export default ProductsTable
