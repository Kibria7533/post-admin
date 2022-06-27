import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Table from "../table/Table";

export default function ManageCatagory() {
    return(
        <>
            <div className="wrapper container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                        <Navbar/>
                        <Table />
                    </div>

                </div>
            </div>

        </>
    )
}