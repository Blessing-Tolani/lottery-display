import App from "./App";

import { Provider } from "react-redux";
import store from "../app/store";

const Home = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Home;
