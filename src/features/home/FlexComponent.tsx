
export default function FlexComponent({title, value}:{title:string, value:string}) {
  return (
    <div className="flex justify-between py-1 mt-2 mb-3">
        <h1 className="text-white font-medium text-xs">{title}</h1>
        <h1 className="text-white font-medium text-xs">{value}</h1>
    </div>
  )
}
