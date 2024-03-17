export default function Friend(friend) {
    console.log(friend);
    const { id, name, email } = friend
    return (
        <div>
            <h3>Id:{id} </h3>
            <h3>Name:{name} </h3>
            <h3>Email:{email} </h3>
        </div>
    )
}