import {ChevronLeft, ChevronRight} from "lucide-react";

type ButtonProps = {
  isPrevious: boolean;
  callback: () => void;
  disabled?: boolean;
}

const ButtonPagination = ({isPrevious, callback, disabled = false}: ButtonProps) => {
  return (
    <button
      className={`border-[0.5px] border-gray-400 text-xs px-5 py-2 w-full flex items-center gap-4 rounded disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={callback}
      disabled={disabled}>
      {isPrevious && <ChevronLeft size={20} />}
      {isPrevious ? "Precedent" : "Suivant"}
      {!isPrevious && <ChevronRight size={20} />}
    </button>
  )
}


export default ButtonPagination;