import Button from "../Utilities/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="text-slate-600">
      <div>
        <h2 className="font-semibold">Login</h2>
      </div>
      <div className="mt-7">
        <h3 className="font-semibold text-xs">Login to your account</h3>
        <p className="font-light text-xs mt-3 w-4/5 sm:w-3/4 md:w-3/5 pb-3">
          Lottery display is the best recommendation for you
        </p>
      </div>
      <hr className=" border-gray-100" />
      <div className=" pb-12">
        <form>
          <div className="flex flex-col ">
            <div className="pt-3">
              <label htmlFor="user_name" className="font-semibold text-xs ">
                Username
              </label>
              <br />
              <input
                type="text"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                name="user_name"
                required
              />
            </div>
            <div className="pt-3">
              <label htmlFor="password1" className="font-semibold text-xs ">
                Password
              </label>
              <br />
              <input
                type="password"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                name="password1"
                required
              />
            </div>
          </div>

          <div className="pt-6">
            <Button>Log in</Button>
          </div>
          <div className="font-semibold pt-3 text-xs">
            <p>
              Don't have an account ?
              <Link to="register">
                {" "}
                <span className="text-lotteryBlue ">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
