import { Link } from "react-router-dom";

function SplashPage() {
  return (
    <>
      <h1>Welcome to GetThere</h1>
      <h2>Where you can find the car to get you there as fast as possible</h2>
      <Link to="/home">GetThere Home Page</Link>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/farhad-koushan-63b920167/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/FarhadK2022">
          <i className="fa-brands fa-github"></i>
        </a>
        Developed By Farhad Koushan
      </footer>
    </>
  );
}
export default SplashPage;
