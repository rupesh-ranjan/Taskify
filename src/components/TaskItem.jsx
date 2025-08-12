function TaskItem({ title, description }) {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 p-8 shadow-md md:w-[70%]">
      <h2 className="mb-2 font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TaskItem;
