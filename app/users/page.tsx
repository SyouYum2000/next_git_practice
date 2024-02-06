const Page = async() => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'})
  const users = await response.json()
  return(
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <ul>
        {users.map((user:any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>本物です</p>
    </div>
  )
}
export default Page;