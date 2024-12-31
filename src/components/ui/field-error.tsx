type ComponentProps = {
  message?:string
}
export function FieldError(props:ComponentProps){
  return (
    <div className="w-full p-2 rounded-md flex flex-col bg-red-300 text-red-600 my-2 ">
     <span> {props.message}</span>
    </div>
  )
}