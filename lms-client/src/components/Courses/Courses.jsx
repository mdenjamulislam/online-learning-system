import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const Courses = () => {
    const [coueses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const source = axios.CancelToken.source();
        setLoading(true);
        axios
            .get("http://127.0.0.1:5000/courses", { cancelToken: source.token })
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
                coueses.slice(0, visibleCount).map((course) => <CourseCard key={course.id} course={course} />)
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
