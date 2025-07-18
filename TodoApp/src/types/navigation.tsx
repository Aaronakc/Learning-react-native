import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  AddTaskScreen: undefined;
  DetailScreen: { index: number };

};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;


export type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
};

export type MaterialTopTabParamList = {
  AllTask:undefined;
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


 