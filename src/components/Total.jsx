const Total = ({ total = 0 }) => {
  return (
    <section className="p-10">
      <h1 className="text-slate-200 text-2xl mb-3 px-4">Total Amount - </h1>
      <h1 className="text-center text-slate-50 text-4xl ">{total} THB</h1>
    </section>
  );
};

export default Total;
