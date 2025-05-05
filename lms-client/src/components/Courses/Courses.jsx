import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
    const [coueses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const source = axios.CancelToken.source();
        setLoading(true);
        axios
            .get("courses.json", { cancelToken: source.token })
            .then((response) => {
                setCourses(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }, []);

    console.log(coueses);

    return (
        <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {loading ? (
                <div className="flex h-screen items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                coueses.map((course) => (
                    <div key={course.id} className="card rounded-xl border border-gray-300 bg-white p-2 md:p-4">
                        <figure>
                            <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="space-y-3">
                            <h2 className="card-title">{course.title}</h2>
                            <div className="w-full flex justify-between items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <img src={course.instructor_image} alt={course.instructor} className="h-11 w-11 rounded-full" />
                                    <p className="text-base font-semibold">{ course.instructor}</p>
                                </div>
                                <p className="text-lg text-secondary font-semibold">${ course.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Courses;
