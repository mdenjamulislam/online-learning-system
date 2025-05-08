import React from 'react';

const CourseItem = ({ item }) => {
    const { id, title, thum_url, category, instructor, price, level } = item;
    return (
        <div className="flex items-center justify-between gap-5 rounded-lg bg-gray-50 p-2.5 drop-shadow-xl">
            <div className="flex items-center gap-4">
                <img src={thum_url} alt={title} className="h-16 w-24 rounded-md object-cover" />

                <div>
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="text-sm text-gray-600 italic">{category}</p>
                </div>
            </div>
            <div>
                <p className="text-secondary text-xl font-bold">${price}</p>
            </div>
            <div className="flex items-center gap-2">
                <button className="btn btn-accent btn-sm">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
            </div>
        </div>
    );
};

export default CourseItem;