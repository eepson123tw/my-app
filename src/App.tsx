import List from './list/List'
import { faker } from '@faker-js/faker'
interface User {
  userId: String
  username: String
  email: String
  avatar: String
  password: String
  birthdate: any
  registeredAt: any
}

export const userList: User[] = []

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()
  }
}

Array.from({ length: 10 }).forEach(() => {
  userList.push(createRandomUser())
})
function App() {
  console.log(userList)
  return (
    <div className='App mt-5 mx-auto w-[1500px]   '>
      <List list={userList}></List>
    </div>
  )
}

export default App
