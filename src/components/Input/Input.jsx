import React from "react"
import { FaEye } from "react-icons/fa"
import css from "./Input.module.css"

const Input = ({ inputName, inputType, inputPlaceholder, required }) => (
  <div className={css.formGroup}>
    <input
      className={css.input}
      type={inputType}
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      required={required}
    />
    {inputType === "password" && (
      <button>
        <FaEye className={`icon ${css.loginFormIcon}`} />
      </button>
    )}
  </div>
)

export default Input
