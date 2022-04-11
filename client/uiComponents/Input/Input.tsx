import { FieldError } from "react-hook-form";
import styles from "./Input.module.scss";

type inputProps = {
  name: string;
  error: FieldError | undefined;
  register: any;
  type: string;
};

const Input = (props: inputProps) => {
  return (
    <>
      <label htmlFor={props.name}>{props.name} </label>
      <input
        type={props.type}
        {...props.register(props.name)}
        name={props.name}
        placeholder={props.name}
        className={styles.input}
      />
      <label>{props.error}</label>

      {props.error && <span>This field is required</span>}
    </>
  );
};

export default Input;
