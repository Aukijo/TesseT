import React, { useState } from 'react';
import axios from 'axios';

export default function UserAuth() {
    const [regUserName, setUserName] = useState('');
    const [regEmail, setEmail] = useState('');
    const [regPass, setPass] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === "name") setUserName(value);
        if (name === "email") setEmail(value);
        if (name === "pass") setPass(value);
    };

    const submitRegister = (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const userDetails = {
            userName: regUserName,
            UserEmail: regEmail,
            userPassword: regPass,
        };

        setIsSubmitting(true);

        axios.post('http://localhost/tesset_api/user/register', userDetails)
            .then(response => {
                console.log(response.data);
                setUserName('');
                setEmail('');
                setPass('');
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            <form onSubmit={submitRegister}>
                <input type="text" name='name' value={regUserName} onChange={getInput} />
                <input type="text" name='email' value={regEmail} onChange={getInput} />
                <input type="password" name='pass' value={regPass} onChange={getInput} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
