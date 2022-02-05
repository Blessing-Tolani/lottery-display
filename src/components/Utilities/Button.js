const Button = (props) => {
  return (
    <div className="bg-lotteryBlue flex justify-center font-semibold text-xs text-white py-2 w-40 rounded">
      {props.children}
    </div>
  );
};

export default Button;
