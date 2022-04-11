import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClick?: any;
  type: "button" | "submit" | "reset" | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  );
};

export default Button;
