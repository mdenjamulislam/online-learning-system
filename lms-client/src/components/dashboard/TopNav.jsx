import React from 'react';
import { Link } from 'react-router';

const TopNav = () => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <Link to="/" className="text-xl font-bold text-white uppercase">
                                Dev<span className="text-accent">Skill</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                Dashboard
                            </Link>
                            <Link to="/dashboard/add-course" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                Add Course
                            </Link>
                            <Link to="/students" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                Students
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;