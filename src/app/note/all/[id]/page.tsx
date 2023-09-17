
async function getNote(noteId: string){
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${noteId}`, 
        {
            next: {revalidate: 10},
        }
    );
    const data = await res.json(); 
    return data;
}
export default async function Page({params}: any) {
    const Note = await getNote(params.id);
    console.log(Note);
    return <div>
        <h1>Single NoTe Page</h1>
        <h2>Name: {Note?.name}</h2>
        <h3>Email: {Note?.name}</h3>
        <h3>Website: {Note?.website}</h3>
    </div>
  }