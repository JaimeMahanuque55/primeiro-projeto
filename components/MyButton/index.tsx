////////////////// USANDO CSS MODULES NO NEXT //////////////

import styles from './MyButton.module.css';

type Props = {
  label: string;
  onClick: () => void;

}


export const MyButton = ({ label, onClick }: Props) => {

  return (
    <button onClick={onClick} className={styles.myBtn}>{label}</button>
  );
}