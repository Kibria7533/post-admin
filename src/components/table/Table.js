
export default function Table() {
    return(
        <>
            <table className="table table-hover col-md-10">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Post-Title</th>
                    <th scope="col">Manage Buttons</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td><button className="button">Edit</button>/<button  className="button">Delete</button></td>
                </tr>

                </tbody>
            </table>
        </>
    )
}
