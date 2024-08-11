const TagLine = () => {
  const expenseTrackerTaglines = [
    "Track your spending, boost your savings",
    "Know where your money goes",
    "Smart budgeting starts here",
    "Take control of your finances",
    "Expenses made easy",
    "Your personal financial assistant",
    "Simplify your spending habits",
    "Budget smarter, live better",
    "Master your money",
    "Effortless expense tracking",
  ];
  return (
    <p className="text-slate-100 px-6 font-logo  text-sm  py-3 bg-gradient-to-tr from-slate-800 to-slate-900">
      {expenseTrackerTaglines[Math.floor(Math.random() * 10)]}
    </p>
  );
};

export default TagLine;
