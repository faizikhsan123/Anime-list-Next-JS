
type PaginationProps = { //buat tipe untuk props
  page: number;
  handleIncrementPage: () => void;
  handleDecrementPage: () => void;
};

const Pagination = ({ page, handleIncrementPage, handleDecrementPage,}: PaginationProps) => { //tangkap semua props yg dilempar dari page
  return (
    <div className="flex gap-2 justify-center items-center text-white text-2xl">
      <button onClick={handleDecrementPage} className="hover:text-indigo-400">Prev</button>
      <span className="text-red-400">{page}</span>
      <button onClick={handleIncrementPage} className="hover:text-indigo-400">Next</button>
    </div>
  );
};

export default Pagination;
