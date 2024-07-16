import { Task } from "../types";

// STORES
import { useTaskStore } from "../store/useTaskStore";
import { useInProgressTaskStore } from "../store/useTaskStore";
import { useDoneTaskStore } from "../store/useTaskStore";

// FIRESTORE
import { deleteNormalTask } from "../firebase/firestore";
import { deleteInProgressTask } from "../firebase/firestore";
import { deleteDoneTask } from "../firebase/firestore";
import { addInProgressTask } from "../firebase/firestore";
import { addDoneTask } from "../firebase/firestore";

interface Props {
  task: Task;
  state: string;
  email: string | null | undefined;
}

export default function TaskRender({ task, state, email }: Props) {
  const { setTasks, setLoaded } = useTaskStore((state) => ({
    setTasks: state.setTask,
    setLoaded: state.setLoaded,
  }));

  const { setInProgressTasks, setInProgressLoaded } = useInProgressTaskStore(
    (state) => ({
      setInProgressTasks: state.setTask,
      setInProgressLoaded: state.setLoaded,
    })
  );

  const { setDoneTasks, setDoneLoaded } = useDoneTaskStore((state) => ({
    setDoneTasks: state.setTask,
    setDoneLoaded: state.setLoaded,
  }));

  function handleDeleteButton(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if (state == "normal" && task.taskID !== undefined) {
      deleteNormalTask(task.taskID, setTasks, setLoaded, email);
    } else if (state == "in-progress" && task.taskID !== undefined) {
      deleteInProgressTask(
        task.taskID,
        setInProgressTasks,
        setInProgressLoaded,
        email
      );
    } else if (state == "done" && task.taskID !== undefined) {
      deleteDoneTask(task.taskID, setDoneTasks, setDoneLoaded, email);
    }
  }

  function handleAddInProgress() {
    addInProgressTask(task, setInProgressTasks, setInProgressLoaded);
    deleteNormalTask(task.taskID, setTasks, setDoneLoaded, email);
  }

  function handleAddDone() {
    addDoneTask(task, setDoneTasks, setDoneLoaded);
    deleteInProgressTask(
      task.taskID,
      setInProgressTasks,
      setInProgressLoaded,
      email
    );
  }

  return (
    <div className="task">
      <div className="text">
        <p>{task.taskName}</p>
      </div>

      <div className={state == "done" ? "buttons done" : "buttons"}>
        <button className="delete" onClick={handleDeleteButton}>
          delete
        </button>

        {state == "normal" ? (
          <button className="in-progress" onClick={handleAddInProgress}>
            In progress
          </button>
        ) : undefined}

        {state == "in-progress" ? (
          <button className="done" onClick={handleAddDone}>
            Done
          </button>
        ) : undefined}
      </div>
    </div>
  );
}
