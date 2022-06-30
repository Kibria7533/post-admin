
export default function CatagoryTable({edit,setEdit,catagory,setCatagory,deleteCatagory,needEdit}) {
    let count=0;

    return(
        <>
            <table className="table table-hover col-md-10">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Catgory-Title</th>
                    <th scope="col">Manage Buttons</th>
                </tr>
                </thead>
                <tbody>
                {
                    catagory.map(catag=>{
                        count=count+1;

                        return <tr key={catag._id}>
                            <th scope="row">{count}</th>
                            <td>{catag.catagory_name}</td>
                            <td><button className="button" onClick={()=>{setEdit(!edit)
                                needEdit(catag)}}>Edit</button>/<button  className="button" onClick={()=>deleteCatagory(catag._id)}>Delete</button></td>
                        </tr>}
                    )

                }



                </tbody>
            </table>
        </>
    )
}
