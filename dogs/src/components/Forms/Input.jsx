import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  validate,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
