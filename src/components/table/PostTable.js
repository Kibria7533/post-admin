export default function PostTable({posts,deletepost,setEditModal,editModal,editInfo}) {
    let count=0;
    const clickHandler=(post)=>{
        setEditModal(!editModal)
        editInfo(post)
    }

    return(
        <>
            <table className="table table-hover col-md-10">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Post-Title</th>
                    <th scope="col">Manage Buttons</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map(post=>{
                        count=count+1;

                        return <tr key={post._id}>
                            <th scope="row">{count}</th>
                            <td>{post.post_title}</td>
                            <td><button className="button"  onClick={()=>clickHandler(post)}>Edit</button>/<button  className="button" onClick={()=>deletepost(post)}>Delete</button></td>
                        </tr>
                    })

                }


                </tbody>
            </table>
        </>
    )
}
