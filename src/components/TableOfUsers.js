import { useEffect, useState } from "react"

const TableOfUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('http://localhost:5000/users-array')
          const data = await res.json()
          console.log(data);
          setUsers(data);
        }
        fetchData();
      }, [])

    const HandleDelete = async (idUser) => {
        await fetch(`http://localhost:5000/users-array/${idUser}`, {method: 'DELETE'})
        const userFilter = users.filter((user) => user.id !== idUser);
        setUsers(userFilter);
    }
    return (
        <div>
            <h1 style={{textAlign: 'center', marginBottom: '50px', marginTop: '30px'}}>Danh sách các bạn đi đám cưới</h1>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <table style={{width: '80%'}}>
                    <tr>
                        <th>Tên</th>
                        <th>Đi cùng với</th>
                        <th>Có đi hay không</th>
                        <th>Action</th>
                    </tr>

                    {users.map((user, index) => {
                        return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.guests}</td>
                            <td>{user.accepted === "yes" ? <div style={{color: 'green', fontWeight: "bold" }}>Có</div> :  <div style={{color: 'red', fontWeight: "bold" }}>Không đi</div>}</td>
                            <td><button type="button" onClick={() => HandleDelete(user.id)} style={{width: '50px'}} class="btn btn-secondary">xóa</button></td>
                        </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}

export default TableOfUsers;