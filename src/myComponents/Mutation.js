import { useState } from "react"
import { useMutation, useQuery } from "react-query";
import  axios  from "axios";

export const MutationPrac=()=>{
    const [name,setName]=useState("");
    const [alterEgo,setAlterEgo]=useState("");

    const postDataEntry=(entryData)=>{
        console.log("data to submit:",entryData);
        return axios.post('url to post data',entryData)
    }
    const useAddDataEntries=()=>{
        return useMutation(postDataEntry)
    }
    const {mutate:addData,isLoading,isError,error}=useAddDataEntries();
    // or
    const mutation=useMutation(postDataEntry);

    function handleAddHero(){
       // console.log({name,alterEgo});
         const data={name,alterEgo}
        // addData(data);

        // or directly we can also do 
        mutation.mutate(data);
    }
    return(<>
        <h2>Super Heroes</h2>
        <div>
            <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="alterEgo" value={alterEgo} onChange={(e)=>setAlterEgo(e.target.value)}/>
            <button onClick={handleAddHero}>Add Hero
            {mutation.isLoading && <span>...</span>}
            
            </button>
            {mutation.isError && <div>Error:{mutation.error.message}</div>}
            {mutation.isSuccess && <div>Data is submitted successfully.</div>}
        </div>
    </>)

}