const User = ({ user, prop }) => {
  return (
    <button
      className="text-slate-100 border border-slate-200 px-4 py-2 rounded-xl"
      {...prop}
    >
      {user}
    </button>
  );
};

export default User;
