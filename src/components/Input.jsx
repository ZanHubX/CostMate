import { forwardRef } from "react";

const Input = forwardRef(({ id, placeholder, label, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <label className="mr-4" htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        {...props}
        className="bg-transparent border-b border-b-slate-600 focus:border-b-slate-400 outline-none"
      />
    </div>
  );
});
export default Input;
