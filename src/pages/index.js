import Main from "./main";

import { Provider } from "react-redux";
import store from "../app/store";

const Home = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Home;
