import { Task } from "../types";

interface Props {
  task: Task;
  state: string;
}

export default function TaskRender({ task, state }: Props) {
  return (
    <div className="task">
      <div className="text">
        <p>
          {task.taskName} {state}
        </p>
      </div>

      <div className={state == "done" ? "buttons done" : "buttons"}>
        <button className="delete">delete</button>

        {state == "normal" ? (
          <button className="in-progress">In progress</button>
        ) : undefined}

        {state == "in-progress" ? (
          <button className="done">Done</button>
        ) : undefined}
      </div>
    </div>
  );
}
