import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <>
      <h3>Users:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage}>Prev</button>
        &nbsp;
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};