const Total = ({ total = 0 }) => {
  return (
    <section className="px-10 py-6">
      <h1 className="text-slate-200 text-2xl mb-3 px-4">Total Amount - </h1>
      <h1 className="text-center text-slate-50 text-4xl ">{total} THB</h1>
    </section>
  );
};

export default Total;
