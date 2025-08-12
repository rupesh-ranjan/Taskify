import TaskItem from "./TaskItem";

const tasks = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Purchase milk, eggs, bread, and fruits from the supermarket",
  },
  {
    id: 2,
    title: "Complete project report",
    description:
      "Finish the final draft of the project report and send it to the manager",
  },
  {
    id: 3,
    title: "Workout session",
    description: "Go for a 45-minute workout at the gym",
  },
  {
    id: 4,
    title: "Read a book",
    description: "Read at least 30 pages of the new novel",
  },
  {
    id: 5,
    title: "Call parents",
    description: "Check in with parents and talk about their week",
  },
];

function TaskList() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Your tasks..</h1>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
}

export default TaskList;
