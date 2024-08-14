import CostMateLogo from "/CostMate.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center border-b border-r-slate-200 mb-4  z-10">
      <img className="w-2/4" src={CostMateLogo} alt="Our Logo" />
      {/* <h1 className="text-2xl font-light text-slate-100 font-logo">COSTMATE</h1> */}
      {/* <p className="text-slate-300 justify-center">Good morning...</p> */}
      <button className="w-[40px] text-slate-100 mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
