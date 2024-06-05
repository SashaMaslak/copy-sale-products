import React from "react"
import { MdAddToPhotos } from "react-icons/md"
import { MdApps } from "react-icons/md"
import { BsFillCartFill } from "react-icons/bs"
import { BsFillCartCheckFill } from "react-icons/bs"
import CartIcon from "components/Icons/CartIcon/CartIcon"
import { SlBasket } from "react-icons/sl"
import css from "./Button.module.css"

const Button = props => {
  const { buttonType, buttonTitle, styleAdd, minSize, iconName, iconSize } =
    props
  let iconBtn = null
  console.log(iconName)
  switch (iconName) {
    case "preview":
      iconBtn = <MdApps className={`icon`} />
      break
    case "addProduct":
      iconBtn = <MdAddToPhotos className={`icon`} />
      break
    case "buyProduct":
      iconBtn = <CartIcon type="add" size={iconSize} />
      break
    default:
      iconBtn = null
  }
  return (
    <div className={css.buttonGroup}>
      <button
        type={buttonType}
        className={`${css.button} ${
          styleAdd === "border" && css.buttonBorder
        } `}
        style={{ minWidth: minSize }}
      >
        {iconName && iconBtn}
        <span style={{ lineHeight: `${iconSize}px` }} className={css.textBtn}>
          {buttonTitle}
        </span>
      </button>
    </div>
  )
}

export default Button
