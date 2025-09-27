import { useState, useEffect } from "react";
import Cards from "./Cards.jsx";

function Filter() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("data"))
      setData(JSON.parse(localStorage.getItem("data")));
    else
      fetch("./data.json")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.log("error ", err));
  }, []);

  useEffect(() => {
    setFiltered(data);
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const toggleChecked = (name) => {
    setData((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const filterAll = () => {
    setFiltered(data);
  };
  const filterActive = () => {
    setFiltered(data.filter((ext) => ext.isActive));
  };
  const filterInactive = () => {
    setFiltered(data.filter((ext) => !ext.isActive));
  };

  const removeExt = (extName) => {
    setData((prevData) => prevData.filter((ext) => ext.name !== extName));
  };
  return (
    <>
      <header className="flex items-center flex-wrap justify-center sm:justify-between sm:flex-nowrap pt-10 px-2 gap-5">
        <h1 className="text-2xl font-bold text-[var(--text)]">
          Extensions List
        </h1>
        <div className="flex justify-between gap-4">
          <label
            for="allFilter"
            className="cursor-pointer h-8 w-10 rounded-full bg-[var(--theme-button)] text-center p-1 text-[var(--text)] outline-[var(--red-500)] outline-offset-3 transition-colors hover:outline-2 hover:bg-slate-400 has-checked:text-[var(--reverse-text)] has-checked:outline-2 has-checked:bg-[var(--red-400)]"
          >
            <input
              type="radio"
              name="filter"
              className="hidden"
              onChange={filterAll}
              id="allFilter"
              defaultChecked
            />
            <span>All</span>
          </label>

          <label
            for="activeFilter"
            className="cursor-pointer h-8 w-18 rounded-full bg-[var(--theme-button)] text-center p-1 text-[var(--text)] outline-[var(--red-500)] outline-offset-3 transition-colors hover:outline-2 hover:bg-slate-400 has-checked:text-[var(--reverse-text)] has-checked:outline-2 has-checked:bg-[var(--red-400)]"
          >
            <input
              type="radio"
              name="filter"
              className="hidden"
              onChange={filterActive}
              id="activeFilter"
            />
            <span>Active</span>
          </label>

          <label
            for="inActiveFilter"
            className="cursor-pointer h-8 w-20 rounded-full bg-[var(--theme-button)] text-center p-1  text-[var(--text)] outline-[var(--red-500)] outline-offset-3 transition-colors hover:outline-2 hover:bg-slate-400 has-checked:text-[var(--reverse-text)] has-checked:outline-2 has-checked:bg-[var(--red-400)]"
          >
            <input
              type="radio"
              name="filter"
              className="hidden"
              onChange={filterInactive}
              id="inActiveFilter"
            />
            <span>Inactive</span>
          </label>
        </div>
      </header>
      <Cards data={filtered} onCheck={toggleChecked} onDelete={removeExt} />
    </>
  );
}

export default Filter;
