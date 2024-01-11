import "./style.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signUp">Sign Up</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
