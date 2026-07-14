export default function PageLayout({ title, id, children, theme, containerClass, 
 ...props }) {
    return <section className={`flex items-center pt-20 
        min-h-dvh raleway-font ${theme}`} id={id} 
    {...props}>
        <div className={`max-w-full px-6 md:px-12 
      lg:px-24 text-left ${containerClass}`}>
            <h2 className="font-bold text-3xl uppercase 
        tracking-wider text-slate-800 mb-8 border-l-4 
        border-indigo-500 pl-4">{title}</h2>
            {children}
        </div>

    </section>
}