export function Spinner(){
  return(
    <div className="flex items-center gap-x-2">
     <span className="bg-gray-600"> Carregando...</span>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </div>
  )
}