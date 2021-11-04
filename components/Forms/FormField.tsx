import styles from './form-field.module.scss'
import {FC} from "react";

interface FormFieldProps {}

export const FormField: FC<FormFieldProps> = (props) => {
    const {children} = props;

    return (
        <div className={styles.formField}>
            {children}
        </div>
    )
}
