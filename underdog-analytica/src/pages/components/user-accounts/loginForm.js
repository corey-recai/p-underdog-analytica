import React from 'react';

export const LoginForm = ({ onSubmit }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input className="form-control"
                           id="name"
                           placeholder="name@example.com"
                           type="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="email"
                        placeholder="password"
                    />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};
export default LoginForm;