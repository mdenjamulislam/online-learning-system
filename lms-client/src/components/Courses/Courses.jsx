import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
    const [coueses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

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
        return () => source.cancel();
    }, []);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Increase visible count by 6
    };

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            {loading ? (
                <div className="flex h-screen items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                coueses.slice(0, visibleCount).map((course) => (
                    <div key={course.id} className="card rounded-xl border border-gray-300 bg-white p-2 md:p-4">
                        <figure>
                            <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="space-y-3">
                            <h2 className="card-title">{course.title}</h2>
                            <div className="flex w-full items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <img src={course.instructor_image} alt={course.instructor} className="h-11 w-11 rounded-full" />
                                    <p className="text-base font-semibold">{course.instructor}</p>
                                </div>
                                <p className="text-secondary text-lg font-semibold">${course.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}

            <div className="col-span-full text-center">
                {coueses.length > visibleCount && (
                    <button onClick={loadMore} className="btn btn-primary mt-6">
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Courses;
