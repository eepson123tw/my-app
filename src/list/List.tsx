interface propsLists {
  items: { id: number; text: string }[]
}

function List(props: propsLists) {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default List
