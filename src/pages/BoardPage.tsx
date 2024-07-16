// FIREBASE & FIRESTORE
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  getNormalTasks,
  getInProgressTasks,
  getDoneTasks,
} from "../firebase/firestore";

// STORES
import { useUserStore } from "../store/userStore";
import { useTaskStore } from "../store/useTaskStore";
import { useInProgressTaskStore } from "../store/useTaskStore";
import { useDoneTaskStore } from "../store/useTaskStore";

// COMPONENTS
import TaskRender from "../components/TaskRender";

// ANYTHING ELSE
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function BoardPage() {
  const { userr, setUser } = useUserStore((state) => ({
    userr: state.user,
    setUser: state.setUser,
  }));

  const { tasks, loaded, setTasks, setLoaded } = useTaskStore((state) => ({
    tasks: state.tasks,
    loaded: state.loaded,
    setTasks: state.setTask,
    setLoaded: state.setLoaded,
  }));
  const {
    inProgressTasks,
    inProgressLoaded,
    setInProgressTasks,
    setInProgressLoaded,
  } = useInProgressTaskStore((state) => ({
    inProgressTasks: state.tasks,
    inProgressLoaded: state.loaded,
    setInProgressTasks: state.setTask,
    setInProgressLoaded: state.setLoaded,
  }));
  const { doneTasks, doneLoaded, setDoneTasks, setDoneLoaded } =
    useDoneTaskStore((state) => ({
      doneTasks: state.tasks,
      doneLoaded: state.loaded,
      setDoneTasks: state.setTask,
      setDoneLoaded: state.setLoaded,
    }));

  const userEmail = userr?.email;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getNormalTasks(setTasks, setLoaded, user.email);
        getInProgressTasks(setInProgressTasks, setInProgressLoaded, user.email);
        getDoneTasks(setDoneTasks, setDoneLoaded, user.email);
      } else {
        setUser(null);
        setTasks([]);
      }
    });
  }, []);

  return (
    <div className="board">
      {userr == null ? <Navigate to="/kanban/login" /> : undefined}

      <h2>{userEmail}'s board</h2>

      <div className="columns">
        <div className="normal-tasks column-tasks">
          <h3>Normal Tasks</h3>

          {!loaded ? (
            <h4>Loading...</h4>
          ) : tasks.length == 0 ? (
            <h4>There are no tasks...</h4>
          ) : (
            <div className="tasks">
              {tasks.map((task) => {
                return (
                  <TaskRender task={task} key={task.taskID} state="normal" />
                );
              })}
            </div>
          )}
        </div>

        <div className="inProgress-tasks column-tasks">
          <h3>In Progress Tasks</h3>

          {!inProgressLoaded ? (
            <h4>Loading...</h4>
          ) : inProgressTasks.length == 0 ? (
            <h4>There are no tasks...</h4>
          ) : (
            <div className="tasks">
              {inProgressTasks.map((task) => {
                return (
                  <TaskRender
                    task={task}
                    key={task.taskID}
                    state="in-progress"
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="done-tasks column-tasks">
          <h3>Done tasks</h3>

          {!doneLoaded ? (
            <h4>Loading...</h4>
          ) : doneTasks.length == 0 ? (
            <h4>There are no tasks...</h4>
          ) : (
            <div className="tasks">
              {doneTasks.map((task) => {
                return (
                  <TaskRender task={task} key={task.taskID} state="done" />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
3;
