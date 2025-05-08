import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

const UpdateCourse = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        instructor: "",
        instructor_image: "",
        category: "",
        level: "Beginner",
        video_url: "",
        thum_url: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/courses/${courseId}`);
                setFormData(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load course data");
                setLoading(false);
            }
        };
        fetchCourse();
    }, [courseId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.put(`http://localhost:5000/courses/${courseId}`, formData);

            if (response.status === 200) {
                setSuccess("Course updated successfully!");
                setTimeout(() => navigate("/dashboard"), 1500);
            }
        } catch (err) {
            setError(err.response?.data?.error || "Update failed");
        }
    };

    if (loading) return <div className="py-8 text-center">Loading...</div>;
    if (error) return <div className="py-8 text-center text-red-500">{error}</div>;

    return (
        <div className="mx-auto max-w-2xl p-6">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Update Course</h2>

            {success && <div className="mb-4 rounded bg-green-100 p-3 text-green-700">{success}</div>}

            <form onSubmit={handleSubmit} className="mx-auto grid max-w-4xl grid-cols-1 gap-x-4 rounded-2xl bg-white p-4 shadow-2xl xl:grid-cols-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Course Title</legend>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="input w-full" placeholder="Course Title" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Category</legend>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} className="input w-full" placeholder="Category" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Amount</legend>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} className="input w-full" placeholder="Amount" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Level</legend>
                    <select name="level" value={formData.level} onChange={handleChange} defaultValue="Pick a color" className="select w-full">
                        <option disabled={true}>Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advance">Advance</option>
                    </select>
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Instructor</legend>
                    <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} className="input w-full" placeholder="Instructor" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Instructor Photo</legend>
                    <input type="text" name="instructor_image" value={formData.instructor_image} onChange={handleChange} className="input w-full" placeholder="Instructor Photo URL" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Video URL</legend>
                    <input type="text" name="video_url" value={formData.video_url} onChange={handleChange} className="input w-full" placeholder="Video URL" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Thumnail URL</legend>
                    <input type="text" name="thum_url" value={formData.thum_url} onChange={handleChange} className="input w-full" placeholder="Thumbnail URL" />
                </fieldset>
                <fieldset className="fieldset col-span-full">
                    <legend className="fieldset-legend">Descriptions</legend>
                    <textarea type="text" name="description" value={formData.description} onChange={handleChange} className="textarea w-full" placeholder="Descriptions"></textarea>
                </fieldset>

                <div className="col-span-full mt-4 flex items-center gap-4">
                    <button type="button" onClick={() => navigate(-1)} className="btn btn-warning">
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-accent">
                        Update Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCourse;
