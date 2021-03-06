import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import PostsProvider from "../../contexts/PostsContext";

const AppRouter = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <PostsProvider>
      <AppRouter.Navigator screenOptions={{ headerShown: false }}>
        <AppRouter.Screen name="Home" component={Home} />
      </AppRouter.Navigator>
    </PostsProvider>
  );
};

export default AppRoutes;
