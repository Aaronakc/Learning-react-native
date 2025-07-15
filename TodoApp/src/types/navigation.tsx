export type RootStackParamList = {
  HomeScreen: { todos: { title: string; description: string; date: string }[] } | undefined;
  AddTaskScreen: undefined;
  DetailScreen:  { todos: { title: string; description: string; date: string }[] } | undefined;
};
