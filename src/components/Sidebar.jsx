import profileImage from "../assets/profile.png";

function Sidebar() {
  return (
    <div className="flex flex-col items-center gap-4 font-bold">
      <div className="text-3xl">Taskify</div>
      <div className="flex flex-1 gap-4">
        <img src={profileImage} alt="Rupesh" className="w-10 rounded-full" />
        <h1 className="text-xl">Rupesh Ranjan</h1>
      </div>
      <div className="">Footer</div>
    </div>
  );
}

export default Sidebar;
