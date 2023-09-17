import Link from "next/link"; 
 
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data as any[];
}

export default async function NotePage() {
    const notes = await getData(); 
    return(
        <div>
            <h2>Notes</h2>
            {
                notes?.map((data, index) => {
                    return <Note data={data} key={index}/>
                })
            }  
            
        </div>
    )
};


function Note ({data}:any){ 
   const {id, name, email} = data || {};
  return( 
        <Link href={`note/all/${id}`} >
            <div className="fullBorder">
                <h2>id: {id}</h2>
                <h2>Name: {name}</h2>
                <h2>email: {email}</h2>
            </div>
        </Link>  
)
} 











