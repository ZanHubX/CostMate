import User from "./User";
import View from "./View";

const Dashboard = () => {
  return (
    <section className="p-10">
      <div className="border border-slate-100 p-4 rounded-xl">
        <div className="flex gap-3 ">
          <User user="User 1" />
          <User user="User 2" />
          <User user="User 3" />
        </div>
        <View />
      </div>
    </section>
  );
};

export default Dashboard;
