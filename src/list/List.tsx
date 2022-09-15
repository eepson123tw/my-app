import { useRef, useState } from 'react'
interface User {
  userId: String
  username: String
  email: String
  avatar: String
  password: String
  birthdate: any
  registeredAt: any
}

function List({ list, children }: { list: User[]; children?: JSX.Element }) {
  const [x, setList] = useState(list)
  const dragItem: React.MutableRefObject<any> = useRef(null)
  const dragOverItem: React.MutableRefObject<any> = useRef(null)

  const dragStart = (e: React.DragEvent, position: number) => {
    // This will get executed only for nullRef and not for the other two refs
    dragItem.current = position
    const element = e.target as HTMLElement
    if (element.tagName !== 'FIGURE') return
    element.classList.add('bg-red-400')
  }

  const dragEnter = (e: React.DragEvent, position: number) => {
    dragOverItem.current = position
    const element = e.target as HTMLElement
    if (element.tagName !== 'FIGURE') return
    console.log(element.tagName)
  }
  const enableDropping = (event: React.DragEvent) => {
    event.preventDefault()
  }
  const drop = (e: React.DragEvent) => {
    const copyListItems = [...x]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }
  return (
    <div className='flex flex-wrap justify-around  text-center'>
      {x.map(({ avatar, username, userId, email }, i) => (
        <figure
          onDragStart={(e) => dragStart(e, i)}
          onDragEnter={(e) => dragEnter(e, i)}
          onDragOver={enableDropping}
          onDrop={drop}
          draggable
          key={`${userId}`}
          className='bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-[500px] m-1 last:mr-auto'
        >
          <img
            src={`${avatar}`}
            alt='he'
            className='w-30 h-30 rounded-full mx-auto bg-slate-500'
          />
          <div className='pt-6 space-y-4 flex-1'>
            <blockquote>
              <a className='text-lg font-medium' href={`${email}`}>
                {email}
              </a>
            </blockquote>
            <figcaption className='font-medium'>
              <div className='text-sky-500 dark:text-sky-400'>{username}</div>
              <div className='text-slate-700 dark:text-slate-500'>
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  )
}

export default List
