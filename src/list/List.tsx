interface User {
  userId: String
  username: String
  email: String
  avatar: String
  password: String
  birthdate: any
  registeredAt: any
}

function List({ list }: { list: User[] }) {
  // return list.map((x: User) => <li key='123'>{x.avatar}</li>)
  //   <figure className='bg-slate-100 rounded-xl p-8 dark:bg-slate-800 flex items-center justify-center'>
  //   <img
  //     src={`${list[0].avatar}`}
  //     alt='he'
  //     className='w-24 h-24 rounded-full mx-auto bg-slate-500'
  //   />
  //   <div className='pt-6 space-y-4'>
  //     <blockquote>
  //       <p className='text-lg font-medium'>
  //         “Tailwind CSS is the only framework that I've seen scale on large
  //         teams. It’s easy to customize, adapts to any design, and the build
  //         size is tiny.”
  //       </p>
  //     </blockquote>
  //     <figcaption className='font-medium'>
  //       <div className='text-sky-500 dark:text-sky-400'>
  //         {list[0].username}
  //       </div>
  //       <div className='text-slate-700 dark:text-slate-500'>
  //         Staff Engineer, Algolia
  //       </div>
  //     </figcaption>
  //   </div>
  // </figure>

  return (
    <div className='flex flex-wrap '>
      {list.map(({ avatar, username, userId, email }) => (
        <figure
          key={`${userId}`}
          className='bg-slate-100 rounded-xl p-8 dark:bg-slate-800  w-1/5 mr-2 mb-2'
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
