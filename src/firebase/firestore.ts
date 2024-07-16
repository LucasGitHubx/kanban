import { Task } from "../types";
import { app } from "./firebase";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(app);
const normalTaskCollection = collection(db, "normalTasks");
const inProgressTaskCollection = collection(db, "InProgressTasks");
const doneTasksCollection = collection(db, "doneTasks");

// ACTIONS FOR THE NORMAL TASK COLLECTION
/*
The next actions will be part of the normal task collection, e.g: addTask, updateTask, removeTask and getTask.
*/

export async function getNormalTasks(
  setTasks: (task: Task[]) => void,
  setLoaded: (value: boolean) => void,
  taskAuthor: string | null | undefined
) {
  try {
    const normalTasks: Task[] = [];
    const q = query(
      normalTaskCollection,
      where("taskAuthor", "==", taskAuthor)
    );
    const data = await getDocs(q);

    data.docs.forEach((doc) => {
      normalTasks.push({
        taskID: doc.id,
        taskName: doc.data().taskName,
        taskDescription: doc.data().taskDescription,
        taskAuthor: doc.data().taskAuthor,
      });
    });

    setTasks(normalTasks);
    setLoaded(true);
  } catch (error: any) {
    alert(error.message);
  }
}
export async function deleteNormalTask(
  idTask: string,
  setTasks: (task: Task[]) => void,
  setLoaded: (value: boolean) => void,
  taskAuthor: string | null | undefined
) {
  try {
    const docRef = doc(db, "normalTasks", idTask);
    await deleteDoc(docRef);
    getNormalTasks(setTasks, setLoaded, taskAuthor);
  } catch (e: any) {
    alert(e.message);
  }
}

// ACTIONS FOR THE IN PROGRESS TASK COLLECTION
/*
The next actions will be part of the IN PROGRESS task collection, e.g: addTask, updateTask, removeTask and getTask.
*/

export async function getInProgressTasks(
  setInProgressTasks: (task: Task[]) => void,
  setLoaded: (value: boolean) => void,
  taskAuthor: string | null | undefined
) {
  try {
    const inProgressTasks: Task[] = [];
    const q = query(
      inProgressTaskCollection,
      where("taskAuthor", "==", taskAuthor)
    );
    const data = await getDocs(q);

    data.docs.forEach((doc) => {
      inProgressTasks.push({
        taskID: doc.id,
        taskName: doc.data().taskName,
        taskDescription: doc.data().taskDescription,
        taskAuthor: doc.data().taskAuthor,
      });
    });

    setInProgressTasks(inProgressTasks);
    setLoaded(true);
  } catch (error: any) {
    alert(error.message);
  }
}
export async function deleteInProgressTask(
  idTask: string,
  setInProgressTasks: (task: Task[]) => void,
  setLoaded: (value: boolean) => void,
  taskAuthor: string | null | undefined
) {
  try {
    const docRef = doc(db, "InProgressTasks", idTask);
    await deleteDoc(docRef);
    getNormalTasks(setInProgressTasks, setLoaded, taskAuthor);
  } catch (e: any) {
    alert(e.message);
  }
}
// ACTIONS FOR THE IN PROGRESS TASK COLLECTION
/*
The next actions will be part of the IN PROGRESS task collection, e.g: addTask, updateTask, removeTask and getTask.
*/

export async function getDoneTasks(
  setDoneTasks: (task: Task[]) => void,
  setLoaded: (value: boolean) => void,
  taskAuthor: string | null | undefined
) {
  try {
    const doneTasks: Task[] = [];
    const q = query(doneTasksCollection, where("taskAuthor", "==", taskAuthor));
    const data = await getDocs(q);

    data.docs.forEach((doc) => {
      doneTasks.push({
        taskID: doc.id,
        taskName: doc.data().taskName,
        taskDescription: doc.data().taskDescription,
        taskAuthor: doc.data().taskAuthor,
      });
    });

    setDoneTasks(doneTasks);
    setLoaded(true);
  } catch (error: any) {
    alert(error.message);
  }
}
export async function deleteDoneTask(
  idTask: string,
  setDoneTasks: (task: Task[]) => void,
  setLoaded: (value: boolean) => void,
  taskAuthor: string | null | undefined
) {
  try {
    const docRef = doc(db, "doneTasks", idTask);
    await deleteDoc(docRef);
    getNormalTasks(setDoneTasks, setLoaded, taskAuthor);
  } catch (e: any) {
    alert(e.message);
  }
}
