import { useState } from "react";
import { addNormalTask } from "../firebase/firestore";
import { Task } from "../types";
import { useTaskStore } from "../store/useTaskStore";

interface Props {
  setActiveAddTask: Function;
  email: string | null | undefined;
}

export default function FormAddTask({ setActiveAddTask, email }: Props) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  // USESTORE
  const { setNormalTask, setNormalLoaded } = useTaskStore((state) => ({
    setNormalTask: state.setTask,
    setNormalLoaded: state.setLoaded,
  }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameRegex = /^.{4,15}$/;
    const descriptionRegex = /^.{10,50}$/;

    const nameValidation = nameRegex.test(name);
    const descriptionValidation = descriptionRegex.test(description);

    if (nameValidation) {
      setNameError(false);
    } else {
      setNameError(true);
    }

    if (descriptionValidation) {
      setDescriptionError(false);
    } else {
      setDescriptionError(true);
    }

    if (descriptionValidation && nameValidation) {
      const newTask: Task = {
        taskID: crypto.randomUUID(),
        taskName: name,
        taskDescription: description,
        taskAuthor: email,
      };
      addNormalTask(newTask, setNormalTask, setNormalLoaded);

      setName("");
      setDescription("");
      setNameError(false);
      setDescriptionError(false);
    }
  }

  return (
    <div className="container-add-task">
      <button className="close" onClick={() => setActiveAddTask(false)}>
        x
      </button>

      <form className="add-task" onSubmit={handleSubmit}>
        <label className={nameError ? "error" : undefined}>
          {descriptionError ? "Name must be 4-15 chars long." : "Task name"}
        </label>
        <input
          type="text"
          placeholder="Take a walk..."
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={nameError ? "error" : undefined}
        />

        <label className={descriptionError ? "error" : undefined}>
          {descriptionError
            ? "Description must be 10-50 chars long."
            : "Task description"}
        </label>
        <input
          type="text"
          placeholder="I will go to the park..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={descriptionError ? "error" : undefined}
        />

        <button>Add Task</button>
      </form>
    </div>
  );
}
