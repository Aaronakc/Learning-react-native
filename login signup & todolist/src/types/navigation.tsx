export type RootStackParamList={
  Login :undefined;
  SignUp: undefined;
  TodoTask :undefined;
  CompletedTask: { todos: { task: string; checked: boolean }[] };
  RemainingTask:{todos:{task:string;checked:boolean}[]};
};