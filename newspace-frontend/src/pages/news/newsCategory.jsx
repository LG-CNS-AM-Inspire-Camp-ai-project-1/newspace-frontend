import { useParams } from "react-router-dom";

import Sidebar from "./sidebar";

const NewsCategoryPage = () => {
    const { category } = useParams(); 

    return (
        <>
        <Sidebar />
        <div>
            <h1>{category} 뉴스 </h1>
        </div>
        </>
    );
};

export default NewsCategoryPage;