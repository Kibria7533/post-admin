
export default function UserTable({users,deleteUser}) {
    let count=0;

    return(
        <>
            <table className="table table-hover col-md-10">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Catgory-Title</th>
                    <th scope="col">Email</th>
                    <th scope="col">Manage Buttons</th>
                </tr>
                </thead>
                <tbody>
                {
                   users.map(user=>{
                        count=count+1;

                        return <tr key={user._id}>
                            <th scope="row">{count}</th>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td><button  className="button" onClick={()=>deleteUser(user._id)}>Delete</button></td>
                        </tr>}
                    )

                }


                </tbody>
            </table>
        </>
    )
}
