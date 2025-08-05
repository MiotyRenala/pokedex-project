import ButtonPagination from "@/components/ui/ButtonPagination.tsx";
import {useSearchParams} from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 8;

  return (
    <div className={`flex items-center justify-evenly gap-4 my-4`}>
      <ButtonPagination
        isPrevious={true}
        callback={() => setSearchParams({ page: String(page - 1) })}
        disabled={page === 1}
      />
      <span className={`font-semibold border-[0.5px] w-full text-sm flex items-center justify-center border-gray-400 px-3 py-2 rounded`}>
        Page {page}
      </span>
      <ButtonPagination
        isPrevious={false}
        callback={() => setSearchParams({ page: String(page + 1) })}
        disabled={page === 10}
      />
    </div>
  )
}

export default Pagination;