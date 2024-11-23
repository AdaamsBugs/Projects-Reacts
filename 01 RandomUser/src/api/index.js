export const getData = async()=>{
  const val = await fetch(`https://randomuser.me/api/`,{
    method:'GET'
  })
   return await val.json()
}