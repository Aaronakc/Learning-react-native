export type RootStackParamList = {
  HomeScreen: { todos: { title: string; description: string; date: string }[] } | undefined;
  AddTaskScreen: undefined;
  DetailScreen:  {index:number};
};
