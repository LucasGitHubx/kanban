import { create } from "zustand";
import { Task } from "../types";

interface State {
  tasks: Task[];
  loaded: boolean;
  setLoaded: (value: boolean) => void;
  setTask: (tasks: Task[]) => void;
  updateTask: (updatedTask: Task, taskID: string) => void;
  getTasks: () => Task[];
  deleteTask: (TaskID: string) => void;
}

export const useTaskStore = create<State>((set, get) => ({
  tasks: [],

  loaded: false,

  setLoaded: (value) =>
    set(() => ({
      loaded: value,
    })),

  setTask: (tasks) =>
    set(() => ({
      tasks: tasks,
    })),

  updateTask: (updatedTask, taskID) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.taskID === taskID ? updatedTask : task
      ),
    })),

  deleteTask: (taskID) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => taskID != task.taskID),
    })),

  getTasks: () => {
    return get().tasks;
  },
}));

export const useInProgressTaskStore = create<State>((set, get) => ({
  tasks: [],

  loaded: false,

  setLoaded: (value) =>
    set(() => ({
      loaded: value,
    })),

  setTask: (tasks) =>
    set(() => ({
      tasks: tasks,
    })),

  updateTask: (updatedTask, taskID) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.taskID === taskID ? updatedTask : task
      ),
    })),

  deleteTask: (taskID) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => taskID != task.taskID),
    })),

  getTasks: () => {
    return get().tasks;
  },
}));

export const useDoneTaskStore = create<State>((set, get) => ({
  tasks: [],

  loaded: false,

  setLoaded: (value) =>
    set(() => ({
      loaded: value,
    })),

  setTask: (tasks) =>
    set(() => ({
      tasks: tasks,
    })),

  updateTask: (updatedTask, taskID) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.taskID === taskID ? updatedTask : task
      ),
    })),

  deleteTask: (taskID) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => taskID != task.taskID),
    })),

  getTasks: () => {
    return get().tasks;
  },
}));
/*
I MUST CONTINUE DEVELOPING THE APP, THE NEXT STEPS ARE GONNA BE THE NEXT ONES:

1. Develop each storate (normalTask storage which is this one, inProgressTask storage and doneTask storage).
2. I must develop each action for each type of task, I mean, read, update, delete and create tasks of any type (normal, done and in progress).

I must go to study and I will continue on ../firebase/firestore.ts where I was coding the getAllNormalTask method.
*/
