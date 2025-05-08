import React, { useState } from "react";
import axios from "axios";
import Breadcumb from "../Breadcumb";

const AddCourse = ({ onCourseAdded }) => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        instructor: "",
        instructor_image: "",
        category: "",
        level: "",
        video_url: "",
        thum_url: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.title || !formData.description || !formData.instructor) {
            setErrorMessage("All fields are required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/courses", formData);

            if (response.status === 201) {
                setSuccessMessage("Course added successfully!");
                setErrorMessage("");
                setFormData({ title: "", description: "", instructor: "" });
                onCourseAdded(); // Callback to refresh course list
                window.reload();
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.error || "Failed to add course");
            setSuccessMessage("");
        }
    };

    return (
        <>
            <div className="mb-5">
                <h2 className="text-xl font-semibold lg:text-2xl">Add Course</h2>
                <Breadcumb title={"Add Course"} />
            </div>

            <div className="">
                {successMessage && <div className="mb-4 rounded bg-green-100 p-2 text-green-700">{successMessage}</div>}

                {errorMessage && <div className="mb-4 rounded bg-red-100 p-2 text-red-700">{errorMessage}</div>}

                <form onSubmit={handleSubmit} className="mx-auto grid max-w-4xl grid-cols-1 gap-x-4 rounded-2xl bg-white p-4 shadow-2xl xl:grid-cols-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Course Title</legend>
                        <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="input w-full" placeholder="Course Title" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="input w-full" placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Amount</legend>
                        <input type="text" name="price" value={formData.price} onChange={handleInputChange} className="input w-full" placeholder="Amount" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Level</legend>
                        <select name="level" value={formData.level} onChange={handleInputChange} defaultValue="Pick a color" className="select w-full">
                            <option disabled={true}>Select Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Instructor</legend>
                        <input type="text" name="instructor" value={formData.instructor} onChange={handleInputChange} className="input w-full" placeholder="Instructor" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Instructor Photo</legend>
                        <input type="text" name="instructor_image" value={formData.instructor_image} onChange={handleInputChange} className="input w-full" placeholder="Instructor Photo URL" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Video URL</legend>
                        <input type="text" name="video_url" value={formData.video_url} onChange={handleInputChange} className="input w-full" placeholder="Video URL" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Thumnail URL</legend>
                        <input type="text" name="thum_url" value={formData.thum_url} onChange={handleInputChange} className="input w-full" placeholder="Thumbnail URL" />
                    </fieldset>
                    <fieldset className="fieldset col-span-full">
                        <legend className="fieldset-legend">Descriptions</legend>
                        <textarea type="text" name="description" value={formData.description} onChange={handleInputChange} className="textarea w-full" placeholder="Descriptions"></textarea>
                    </fieldset>

                    <fieldset className="col-span-full mt-3">
                        <button type="submit" className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                            Add Course
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default AddCourse;
