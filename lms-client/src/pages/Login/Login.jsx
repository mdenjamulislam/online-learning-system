import React from "react";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        const password = form.password;



        console.log(email, password);
    };

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 xl:gap-16 items-center">
                <div className="hidden lg:block text-center lg:text-left">
                    <img src="https://cdn.pixabay.com/photo/2017/01/10/01/32/study-1968077_1280.jpg" alt="" className="w-auto h-screen" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onClick={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
