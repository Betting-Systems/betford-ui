import HighlightItem from "./HighlightItem";

export default function Highlights() {
    const highlights = [
        {
            id: 1,
            time: '2:51',
            win: 21000
        },
        {
            id: 2,
            time: '2:51',
            win: 21000
        },
        {
            id: 3,
            time: '2:51',
            win: 21000
        },
        {
            id: 4,
            time: '2:51',
            win: 21000
        },
        {
            id: 5,
            time: '2:51',
            win: 21000
        },
        {
            id: 6,
            time: '2:51',
            win: 21000
        },
        {
            id: 7,
            time: '2:51',
            win: 21000
        },
    ]
  return (
    <div className="w-full overflow-x-auto flex items-start">
        {
            highlights.map((highlight) => (
                <HighlightItem key={highlight.id} />
            ))
        }
    </div>
  )
}
