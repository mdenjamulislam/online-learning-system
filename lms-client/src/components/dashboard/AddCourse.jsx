import React from "react";
import Breadcumb from "../Breadcumb";

const AddCourse = () => {
    const handleAddCourse = (e) => {
        e.preventDefault();
        const form = e.target();

        const title = form.title.value;
        const category = form.category.value;
    }
    return (
        <>
            <div className="mb-5">
                <h2 className="text-xl font-semibold lg:text-2xl">Add Course</h2>
                <Breadcumb title={"Add Course"} />
            </div>

            <div>
                <form action="" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 rounded-2xl bg-white p-4 shadow-2xl xl:grid-cols-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Course Title</legend>
                        <input type="text" name="title" className="input w-full" placeholder="Course Title" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" name="category" className="input w-full" placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Amount</legend>
                        <input type="text" name="price" className="input w-full" placeholder="Amount" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Level</legend>
                        <select name="level" defaultValue="Pick a color" className="select w-full">
                            <option disabled={true}>Select Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Instructor</legend>
                        <input type="text" name="instructor" className="input w-full" placeholder="Instructor" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Instructor Photo</legend>
                        <input type="text" name="instructor_image" className="input w-full" placeholder="Instructor Photo URL" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Video URL</legend>
                        <input type="text" name="video_url" className="input w-full" placeholder="Video URL" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Thumnail URL</legend>
                        <input type="text" name="thum_url" className="input w-full" placeholder="Thumbnail URL" />
                    </fieldset>

                    <fieldset className="fieldset col-span-full">
                        <button type="submit" className="btn btn-success w-full">
                            Add Course
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default AddCourse;
