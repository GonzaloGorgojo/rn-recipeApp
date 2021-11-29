import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  Categorymeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
});

export default createAppContainer(MealsNavigator);
