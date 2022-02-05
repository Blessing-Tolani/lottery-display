import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../Utilities/Loading";
import toast from "react-hot-toast";
import { registerUser, userSelector, clearState } from "../User/UserSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    dispatch(registerUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      router.push("/login");
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="text-slate-600">
      <div>
        <h2 className="font-semibold">Register</h2>
      </div>
      <div className="mt-7">
        <h3 className="font-semibold text-xs">
          Manage all your lottery efficiently
        </h3>
        <p className="font-light text-xs mt-3 w-4/5 sm:w-3/4 lg:w-3/5 pb-3">
          Let's get you all set up so you can verify your personal account and
          begin setting up your profile
        </p>
      </div>
      <hr className=" border-gray-100" />
      <div className=" pb-12">
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="flex flex-col sm:flex-row">
            <div className="pt-3">
              <label htmlFor="first_name" className="font-semibold text-xs ">
                First Name
              </label>
              <br />
              <input
                type="text"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                {...register("first_name", { required: true })}
                required
              />
            </div>
            <div className="pt-3 sm:ml-3">
              <label htmlFor="last_name" className="font-semibold text-xs ">
                Last Name
              </label>
              <br />
              <input
                type="text"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                {...register("last_name", { required: true })}
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="pt-3">
              <label htmlFor="phone" className="font-semibold text-xs ">
                Phone Number
              </label>
              <br />
              <input
                type="number"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                {...register("phone", { required: true })}
                required
              />
            </div>

            <div className="pt-3 sm:ml-3">
              <label htmlFor="email" className="font-semibold text-xs ">
                Email
              </label>
              <br />
              <input
                type="email"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                })}
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="pt-3">
              <label htmlFor="password1" className="font-semibold text-xs ">
                Password
              </label>
              <br />
              <input
                type="password"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                {...register("password1", { required: true })}
                required
              />
            </div>
            <div className="pt-3 sm:ml-3">
              <label htmlFor="password2" className="font-semibold text-xs ">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                className="bg-transparent text-xs outline-slate-300 focus:shadow-sm p-1 border border-slate-300 rounded w-64 sm:w-56 mt-1"
                {...register("password2", { required: true })}
                required
              />
            </div>
          </div>
          <div className="pt-4">
            <input
              type="checkbox"
              name="notification"
              {...register("notification")}
            />
            <label htmlFor="notification" className=" text-xs  pl-1">
              Yes, I want to receive Lottery Display emails
            </label>
          </div>
          <div className="pt-1">
            <input
              type="checkbox"
              name="agreement"
              {...register("agreement", { required: true })}
              required
            />
            <label htmlFor="agreement" className=" text-xs pl-1">
              I agree to all the{" "}
              <span className="font-semibold text-lotteryBlue">
                Term, Privacy Policy
              </span>{" "}
              and <span className="font-semibold text-lotteryBlue">Fees</span>
            </label>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className=" bg-lotteryBlue flex justify-center font-semibold text-xs text-white py-2 w-40 rounded"
            >
              {isFetching ? <Loading /> : <p>Create Account</p>}
            </button>
          </div>
          <div className="font-semibold pt-3 text-xs">
            <p>
              Already have an account ?{" "}
              <Link to="/">
                {" "}
                <span className="text-lotteryBlue ">Log in</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
