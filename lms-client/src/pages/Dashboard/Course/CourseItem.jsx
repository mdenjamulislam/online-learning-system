import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router";

const CourseItem = ({ item }) => {
    const { id, title, thum_url, category, instructor, price, level } = item;

    const handleDelete = async () => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete this course?");
            if (!confirmDelete) return;

            const response = await axios.delete(`http://localhost:5000/courses/${id}`);

            if (response.status === 200) {
                toast.success("Course deleted successfully!");
                onDeleteSuccess(); // Refresh course list
            }
        } catch (error) {
            toast.error(error.response?.data?.error || "Failed to delete course");
        }
    };
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
                <Link to={`/courses/${id}`} className="btn btn-accent btn-sm">
                    Edit
                </Link>
                <button onClick={handleDelete} className="btn btn-error btn-sm">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CourseItem;
