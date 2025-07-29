import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";



export type RootStackParamList = {
  Login:undefined,
  SignUp:undefined,
  HomeScreen: undefined;
  AddTaskScreen: undefined;
  DetailScreen: { todoid: string };
  EditProfileScreen:{nickname:string,phone:string};

};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  BottomHome: undefined;
  History: undefined;
  Profile: undefined;
};

export type MaterialTopTabParamList = {
  AllTask: undefined;
  CompletedTask: undefined;
  RemainingTask: undefined;
}


export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MaterialTopTabProps<T extends keyof MaterialTopTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<MaterialTopTabParamList, T>,
    HomeTabScreenProps<'History'>
  >;

export type DrawerNavigationParamList = {
  Home:undefined;
  History:undefined;
  Profile:undefined;
  AllTask: undefined;
  CompletedTask: undefined;
  RemainingTask: undefined;
};

export type DrawerNavigationProps<T extends keyof DrawerNavigationParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerNavigationParamList, T>,
     RootStackScreenProps<keyof RootStackParamList>
  >;










