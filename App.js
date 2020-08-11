import { createStackNavigator, createAppContainer } from "react-navigation";

import FormPage from "./src/pages/FormPage";
import ResultPage from "./src/pages/ResultPage";

const AppNavigator = createStackNavigator(
  {
    Home: FormPage,
    Result: ResultPage,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#464646",
        elevation: 0,
      },
      headerTintColor: "#fff",
    },
  }
);

export default createAppContainer(AppNavigator);
