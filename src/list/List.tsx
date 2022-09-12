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
  return (
    <div className='flex flex-wrap justify-around  text-center'>
      {list.map(({ avatar, username, userId, email }, i) => (
        <figure
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
