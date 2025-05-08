import React from "react";

const CourseCard = ({ course }) => {
    const { id, title, thum_url, instructor, instructor_image, price, category } = course;
    return (
        <div className="card rounded-xl border border-gray-300 bg-white p-2 md:p-4">
            <figure>
                <img src={thum_url} alt={title} className="h-48 w-full object-cover" />
            </figure>
            <div className="space-y-3">
                <h2 className="card-title">{title}</h2>
                <div className="flex w-full items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <img src={instructor_image} alt={instructor} className="h-11 w-11 rounded-full" />
                        <p className="text-base font-semibold">{instructor}</p>
                    </div>
                    <p className="text-secondary text-lg font-semibold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
