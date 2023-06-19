import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import './login-form.css';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        
        <div>
            <div className='form__group'>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder=" "
                    className="form__input"
                />
                <label className="form__label">Email</label>
            </div>
            <div className='form__group'>
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder=" "
                    className="form__input"
                />
                <label className="form__label">Пароль</label>
            </div>
            <button onClick={() => store.login(email, password)} className="form__button">
                Логин
            </button>
            <button onClick={() => store.registration(email, password)} className="form__button">
                Регистрация
            </button>
        </div>
    );
};

export default observer(LoginForm);