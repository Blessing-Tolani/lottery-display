import LoginForm from "../Forms/LoginForm";
import SideBar from "../Utilities/SideBar";

const LoginContainer = () => {
  return (
    <div className=" md:bg-lotteryBlue">
      <div className="flex flex-col md:flex-row  w-full h-full ">
        <div className="bg-lotteryBlue text-white w-full h-20 md:w-1/4 pl-8 md:h-screen">
          <SideBar />
        </div>
        <div className="w-full md:w-3/4 bg-white pt-10 md:pt-28 pl-8 md:pl-14 ">
          <div className="">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
