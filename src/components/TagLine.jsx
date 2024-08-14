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
  // const expenseTrackerTaglines = [
  //   "သင့်အသုံးစရိတ်ကို ခြေရာခံပြီး သင့်စုဆောင်းငွေကို တိုးမြှင့်ပါ",
  //   "သင့်ငွေ ဘယ်ကိုသွားနေလဲ သိပါ",
  //   "ကောင်းမွန်သော ဘတ်ဂျက်ရေးဆွဲခြင်း ဒီမှာစတင်သည်",
  //   "သင့်ငွေကြေးကို ထိန်းချုပ်ပါ",
  //   "အသုံးစရိတ်များကို လွယ်ကူစေသည်",
  //   "သင့်ကိုယ်ပိုင် ငွေကြေးဆိုင်ရာ လက်ထောက်",
  //   "သင့်အသုံးပြုမှု အလေ့အထများကို ရိုးရှင်းအောင်လုပ်ပါ",
  //   "ပိုမိုကောင်းမွန်စွာ ဘတ်ဂျက်ရေးဆွဲပြီး ပိုမိုကောင်းမွန်စွာ နေထိုင်ပါ",
  //   "သင့်ငွေကို ကျွမ်းကျင်စွာကိုင်တွယ်ပါ",
  //   "လွယ်ကူသော အသုံးစရိတ် ခြေရာခံခြင်း",
  // ];
  return (
    <p className="text-slate-100  px-6 font-logo  text-sm  py-3 bg-gradient-to-tr from-slate-800 to-slate-900">
      {expenseTrackerTaglines[Math.floor(Math.random() * 10)]}
    </p>
  );
};

export default TagLine;
