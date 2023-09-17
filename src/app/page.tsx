import Link from "next/link";


export default function Home() { 
  const data = ` const create = async() => { `
  const data2 = ` await fetch('https://jsonplaceholder.typicode.com/posts' ,{  `
  const data3 = ` method: 'POST',`
  const data4 = ` headers: { 'Content-Type': 'application/json' }, `
  const data5 = ` body: JSON.stringify({title, content}),`
  const data6 = ` } ) }`
  const data7 = `async function getData() {`
  const data8 = `
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
 `
 const data9 = `
 const data = await res.json(); 
 `
 const data10 = `
 return data as any[]; } 
 `
  return (
    <main className="flex min-h-screen flex-col   justify-between p-24">
      <h2>HELLO NEXTJS</h2>
      <h1><Link href="/note">Click Here to visit Note Page</Link></h1>
      <h1><Link href="/createNote">Click Here to Create Note Page</Link></h1>
      <hr />
      <h3>Create Post In NextJS</h3>
      <code>{data}</code>
      <code>{data2}</code>
      <code>{data3}</code>
      <code>{data4}</code>
      <code>{data5}</code>
      <code>{data6}</code>
      <hr />
      <code>{data7}</code>
      <code>{data8}</code>
      <code>{data9}</code>
      <code>{data10}</code>
      <hr />
    </main>
  )
}
