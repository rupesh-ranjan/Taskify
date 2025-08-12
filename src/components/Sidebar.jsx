import profileImage from "../assets/profile.png";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 flex h-[100dvh] flex-col items-center gap-4 p-4 font-bold">
      <div className="text-3xl">Taskify</div>
      <div className="flex gap-4">
        <img src={profileImage} alt="Rupesh" className="w-10 rounded-full" />
        <h1 className="text-xl">Rupesh Ranjan</h1>
      </div>
      <div className="flex-1">
        <ul className="flex flex-col items-center gap-4">
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="">Footer</div>
    </div>
  );
}

export default Sidebar;
