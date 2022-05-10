import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

const AddProductTwo = () => {
const[productRecords,setProductRecords]=useState([
  {
   name:"",
   description:""
  },
  {
    name:"",
   description:""
   },
   {
    name:"",
   description:""
   }
])
function Submit(e){
  e.preventDefault()
  alert("Bomba kimi")
console.log(productRecords)
}
const pickPro=(e,index)=>{
  const list=[...productRecords]
  list[index][e.target.name]=e.target.value;
  setProductRecords(list)
  }
  console.log(productRecords)
  return (
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>AZ</Tab>
    <Tab>EN</Tab>
    <Tab>RU</Tab>
  </TabList>
  <form onSubmit={(e)=>Submit(e)}>
  <TabPanels>
  {productRecords.map((singleRecords,index)=>(
     <TabPanel key={index}>
     <Input placeholder='Daxil edin' id='name' name='name' onChange={(e)=>pickPro(e,index)} value={singleRecords.name} />
     <br/>
     <Textarea placeholder='Daxil edin' id='description' name='description' onChange={(e)=>pickPro(e,index)} value={singleRecords.description} />
   </TabPanel> 
  ))}
</TabPanels>
   
 <button type='submit' className='btn btn-primary ms-2 mt-3'>Əlavə et</button>
  </form>
</Tabs>
  )
}

export default AddProductTwo