import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../../Hooks/http.hook";
import {AuthContext} from "../../Context/AuthContext";

const MyComponent = () => {
    const auth = useContext(AuthContext)
    const { loading, request, error } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        console.log(error)
    }, [error])

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const registerHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', { ...form })
        } catch (e) {
            console.log(e)
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <main>
            <section className="login">
                <header className="login__header">
                    <h2 className="login__title">Авторизация</h2>
                </header>
                <div className="login__wrapper">
                    <form className="login__form" action="login_submit" method="get" acceptCharset="utf-8">
                        <label className="login__label" htmlFor="email">
                            E-mail
                            <input onChange={onChange} className="login__input" type="mail" placeholder="example@domain.xyz" name="email"
                                   required/>
                        </label>
                        <label className="login__label" htmlFor="password">
                            Пароль
                            <input onChange={onChange} className="login__input" type="password" placeholder="" name="password" required/>
                        </label>
                        <div className="text-center">
                            <input onClick={loginHandler} value="Авторизоваться" type="submit" className="login__button" disabled={loading}/>
                        </div>
                        <div className="text-center">
                            <input onClick={registerHandler} value="Зарегистрироваться" type="submit" className="register__button" disabled={loading}/>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default MyComponent;
