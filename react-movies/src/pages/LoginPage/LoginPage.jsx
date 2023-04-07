import React from 'react'
import { useState } from 'react';

export default function LoginPage({setUser2}) {
    const [userState, setUserState] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    function handleChange(evt) {
        setUserState({...userState, [evt.target.name]: evt.target.value, error: ''})
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        setUser2(userState);
    }
    const disable = userState.password !== userState.confirm;
  return (
    <>
      <div className='form'>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Name</label>
                <input type="text" name='name' value={userState.name} onChange={handleChange} required />
            <label>Email</label>
                <input type="email" name='email' value={userState.email} onChange={handleChange} required />
            <label>Password</label>
                <input type="password" name="password" value={userState.password} onChange={handleChange} required />
            <label>Confirm</label>
                <input type="password" name='confirm' value={userState.confirm} onChange={handleChange} required />
            <button type='submit' disabled={disable}>Sign In</button>
        </form>
      </div>
    </>
  )
}
