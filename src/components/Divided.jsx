const Divided = () => {
  const classes =
    "text-xl text-slate-100 border border-slate-200 p-4 rounded-2xl";
  return (
    <div className="px-10 grid grid-cols-2 gap-4">
      <button className={classes}>Divided By</button>
      <input
        type="text"
        className={`${classes} bg-transparent text-center`}
        value="3000 THB"
        disabled
      />
    </div>
  );
};

export default Divided;
