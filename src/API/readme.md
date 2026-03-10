## FETCH API

- typically axios and React Query
- we won't set any state values


``` ts
const url = ''

async function fetchData(url:string){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
    }catch(error){

    }
}

```