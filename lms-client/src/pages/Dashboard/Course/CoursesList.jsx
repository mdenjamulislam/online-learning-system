import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";

const CoursesList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return (
        <div className="space-y-3">
            {courses.map((item) => (
                <CourseItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CoursesList;
