import { useActionState } from "react"

export const Page = ()=>{
  const [, action] = useActionState(console.log, null)

  return <form action={action}>
    <label>
      <p>Your name</p>
      <input type="text" />
    </label>
  </form>
}
