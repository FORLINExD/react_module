import React, {useState} from 'react';

import './Form.css'

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            <form className={'form__container'}>
                <label>Name:
                    <input type="text" name={'name'} value={form.name} id={'form__name'} onChange={formHandler}/>
                </label>

                <label>Username:
                    <input type="text" name={'username'} value={form.username} id={'form__username'} onChange={formHandler}/>
                </label>

                <label>Email:
                    <input type="text" name={'email'} value={form.email} id={'form__email'} onChange={formHandler}/>
                </label>

                <button id={'filter__button'} onClick={onSubmit}>Filter</button>
            </form>
        </div>
    );
};

export default Form;