interface SectionCardsProps {
    icon: JSX.Element,
    children: React.ReactNode,
    title: string,
    className?: string
}

const SectionCards = ({icon, children, className, title}: SectionCardsProps): JSX.Element => {
    return ( 
        <div className="flex gap-5 flex-col mil:max-w-[25rem] bg-white/5 p-6 rounded-xl border-slate-300/30 border">
        <div className="flex gap-3 items-center">
          <span className={className}>
            {icon}
        </span>
          <h3 className="text-xl font-semibold text-white/70">{title}</h3>
        </div>
        <p className="text-[1rem] text-white/70">
          {children}
        </p>
      </div>
     );
}
 
export default SectionCards;