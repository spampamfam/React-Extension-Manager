import { motion, AnimatePresence } from "framer-motion";

function Cards(props) {
  return (
    <>
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto py-10 gap-5">
          {props.data.map((extension) => (
            <motion.div
              key={extension.name}
              className="w-full h-auto rounded-2xl p-5"
              style={{ backgroundColor: "var(--header)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <header className="grid grid-cols-[80px_auto] grid-rows-[40px_90px]">
                <img src={extension.logo} alt={extension.name} />
                <h1
                  className="font-semibold text-xl"
                  style={{ color: "var(--text)" }}
                >
                  {extension.name}
                </h1>
                <p
                  className="col-start-2 text-sm font-light"
                  style={{ color: "var(--text)" }}
                >
                  {extension.description}
                </p>
              </header>
              <footer className="flex justify-between items-center mt-2">
                <button
                  className="w-[6rem] h-10 border-slate-300 font-semibold border-1 rounded-full text-[var(--text)] hover:outline-2 outline-offset-3 outline-[var(--red-500)] cursor-pointer hover:bg-[var(--red-700)] hover:text-[var(--reverse-text)] transition-colors duration-200"
                  onClick={() => props.onDelete(extension.name)}
                >
                  Remove
                </button>
                <label
                  htmlFor={extension.name}
                  className={`w-10 h-6 rounded-full relative p-0.5 cursor-pointer 
              ${
                extension.isActive
                  ? "bg-[var(--red-500)]"
                  : "bg-[var(--toggle)]"
              }`}
                >
                  <input
                    id={extension.name}
                    type="checkbox"
                    checked={extension.isActive}
                    onChange={() => props.onCheck(extension.name)}
                    className="hidden"
                  />
                  <span
                    className={`absolute w-5 h-5 rounded-full transition-transform duration-200 
                ${
                  extension.isActive
                    ? "translate-x-4 bg-white"
                    : "translate-x-0 bg-white"
                }`}
                  />
                </label>
              </footer>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
}

export default Cards;
