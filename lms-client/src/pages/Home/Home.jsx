import React from "react";
import { CiSearch } from "react-icons/ci";

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

            <section className="">
                <div className="container">
                    <div className="section--padding text-center">
                        <div className="mx-auto max-w-2xl space-y-3">
                            <span className="badge badge-accent -rotate-12">About Us</span>
                            <h2 className="text-base font-medium md:text-xl">We are passionate about empwering learners Wordwide with high-quality, accessible & engaging education.</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-1 items-center justify-center gap-8 md:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                            <div className="flex items-center gap-3 text-center md:text-left">
                                <h2 className="text-secondary text-4xl font-bold md:text-5xl">25+</h2>
                                <p className="text-lg md:text-xl">Years of eLearning Education Experiences</p>
                            </div>
                            <div className="flex items-center gap-3 text-center md:text-left">
                                <h2 className="text-secondary text-4xl font-bold md:text-5xl">56K</h2>
                                <p className="text-lg md:text-xl">Students Enrolled in DevSkill Courses</p>
                            </div>
                            <div className="gap-23text-center flex items-center md:text-left">
                                <h2 className="text-secondary text-4xl font-bold md:text-5xl">100+</h2>
                                <p className="text-lg md:text-xl">Experiences Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-3">
                            <span className="badge badge-warning -rotate-12">Our Course</span>
                            <h2 className="text-lg font-semibold md:text-2xl lg:text-4xl">Explore Our Courses</h2>
                        </div>

                        <div>
                            <form action="" className="bg-base-200 flex items-center gap-2 rounded-full px-4 py-3 shadow-md">
                                <input name="search-field" type="text" placeholder="Search Courses" className="min-w-xs outline-0 border-0 focus:outline-0 text-gray-500"/>
                                <select name="category">
                                    <option value="all">All Categories</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="data-science">Data Science</option>
                                    <option value="mobile-development">Mobile Development</option>
                                    <option value="design">Design</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="business">Business</option>
                                    <option value="personal-development">Personal Development</option>
                                </select>
                                <button className="bg-accent hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-200" type="submit">
                                    <CiSearch className="text-xl" />
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Courses */}
                    
                </div>
            </section>
        </>
    );
};

export default Home;
