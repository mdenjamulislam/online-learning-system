
import { Link } from "react-router";
import Breadcumb from "../../components/Breadcumb";
import CoursesList from "./Course/CoursesList";
import TopNav from "../../components/dashboard/TopNav";

const Dashboard = () => {
    
    return (
        <>
            <div className="min-h-full">
                <TopNav/>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="mb-5">
                            <h2 className="text-xl font-semibold lg:text-2xl">Dashboard</h2>
                            <Breadcumb title={"Dashboard"} />
                        </div>

                        <div className="">
                            <CoursesList/>
                        </div>
                        
                    </div>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
