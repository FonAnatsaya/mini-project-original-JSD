import "../style.css";
import Layout from "../Layout";
import { UsersServices } from "../hook/Services";

const HomeAdmin = () => {
  const { get } = UsersServices();
  const users = get();
  return (
    <Layout>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full name</th>
              <th>Organization</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.fullname}</td>
                  <td>{user.organization}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default HomeAdmin;
