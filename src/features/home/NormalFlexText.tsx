
export default function NormalFlexText({title, value}:{title:string, value:string}) {
  return (
    <div className="flex justify-between">
        <h1 className="text-gray-400  text-xs">{title}</h1>
        <h1 className="text-xs text-gray-400">{value}</h1>
    </div>
  )
}
