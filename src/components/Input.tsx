interface Iinput {
    children: React.ReactNode,
    placeholder: string
}

const Input = ({children, placeholder}: Iinput): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 items-start">
        <label className="text-white/70"> {children} </label>
        <input className="p-4 text-white bg-transparent rounded-xl w-full  border-slate-300/30 border focus:border-purple-400 transition-all ease-in-out duration-300 outline-none" required placeholder={placeholder} />
    </div>
  );
}

export default Input;
