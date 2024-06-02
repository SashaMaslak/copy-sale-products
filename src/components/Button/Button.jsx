import React from "react"
import { MdAddToPhotos } from "react-icons/md"
import { MdApps } from "react-icons/md"
import css from "./Button.module.css"

const Button = props => {
  const { buttonType, buttonTitle, styleAdd, minSize, iconName } = props
  let iconBtn = null
  switch (iconName) {
    case "preview":
      iconBtn = <MdApps className={`icon`} />
      break
    case "addProduct":
      iconBtn = <MdAddToPhotos className={`icon`} />
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
        <span className={css.textBtn}>{buttonTitle}</span>
      </button>
    </div>
  )
}

export default Button
