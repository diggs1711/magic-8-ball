import React from 'react';
import Styles from './InputForm.module.scss';

function InputForm(props) {
    return (
        <form className={Styles.form} onSubmit={props.onSubmit}>
            <input className={Styles.input} value={props.question} onChange={props.onChange}></input>
            <button className={Styles.btn} type="submit">Submit</button>
        </form>
    )
}

export default InputForm;