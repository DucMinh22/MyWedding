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
    return (
        <div>
            <h1>Danh sách các bạn đi đám cưới</h1>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <table style={{width: '70%'}}>
                    <tr>
                        <th>Tên</th>
                        <th>Đi cùng với</th>
                        <th>Có đi hay không</th>
                    </tr>

                    {users.map((user, index) => {
                        return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.guests}</td>
                            <td>{user.accepted === "yes" ? <div style={{color: 'green', fontWeight: "bold" }}>Có</div> :  <div style={{color: 'red', fontWeight: "bold" }}>Không đi</div>}</td>
                        </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}

export default TableOfUsers;