import React from "react";

const Home = () => {
    return (
        <>
            <section className="hero bg-base-200 min-h-svh">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold">
                            Smart Learning Deeper & More <span className="text-secondary">-Amazing</span>
                        </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-accent rounded-full">Get Started Now</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="my-10 text-center">
                        <div className="mx-auto max-w-2xl space-y-3">
                            <span className="badge badge-accent -rotate-12">About Us</span>
                            <h2 className="text-base font-medium md:text-xl">We are passionate about empwering learners Wordwide with high-quality, accessible & engaging education.</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-6 md:mt-10 items-center justify-center">
                            <div className="flex items-center gap-3 text-center md:text-left">
                                <h2 className="text-4xl font-bold md:text-5xl text-secondary">25+</h2>
                                <p className="text-lg md:text-xl">Years of eLearning Education Experiences</p>
                            </div>
                            <div className="flex items-center gap-3 text-center md:text-left">
                                <h2 className="text-4xl font-bold md:text-5xl text-secondary">56K</h2>
                                <p className="text-lg md:text-xl">Students Enrolled in DevSkill Courses</p>
                            </div>
                            <div className="flex items-center gap-23text-center md:text-left">
                                <h2 className="text-4xl font-bold md:text-5xl text-secondary">100+</h2>
                                <p className="text-lg md:text-xl">Experiences Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
