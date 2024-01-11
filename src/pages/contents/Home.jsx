import HomeUser from "./Home-User";
import HomeAdmin from "./Home-Admin";
import { GetActiveUser } from "../hook/Services";

const Home = () => {
  const user = GetActiveUser();
  return (
    <div>
      {user.role === "admin" ? <HomeAdmin /> : <HomeUser />}
      {console.log(user)}
    </div>
  );
};
export default Home;
