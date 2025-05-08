import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result);
                window.location.href = "/dashboard";
            })
            .catch((error) => {
                console.log("User registration error: ", error.message);
            });
    };

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-2 lg:gap-10 xl:gap-16">
                <div className="hidden text-center lg:block lg:text-left">
                    <img src="https://cdn.pixabay.com/photo/2017/01/10/01/32/study-1968077_1280.jpg" alt="" className="h-screen w-auto" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                        </fieldset>
                        <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                        <div>
                            <p>
                                Already have an account. <a href="/signup">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;