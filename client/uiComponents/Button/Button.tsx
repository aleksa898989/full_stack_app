import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClick?: any;
  type: "button" | "submit" | "reset" | undefined;
  to?: string;
};

const Button = (props: ButtonProps) => {
  return props.to ? (
    <Link href={props.to}>
      <button type={props.type} onClick={props.onClick} className={styles.button}>
        {props.text}
      </button>
    </Link>
  ) : (
    <button type={props.type} onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  );
};

export default Button;
