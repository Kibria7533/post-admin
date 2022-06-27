import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
export default function Dashboard() {
    return(
        <>
            <div className="wrapper container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                        <Navbar/>
                        <h1 style={{textAlign:'center',marginTop:'10%'}}>Welcome to Admin Dashboard</h1>
                    </div>

                </div>
            </div>
        </>
    )
}
