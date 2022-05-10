import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

const AddProduct = () => {
const productRecord=[];
const[productRecordsAZ,setProductRecordsAZ]=useState(
  {
   name:"",
   description:"",
  }
)
const[productRecordsEN,setProductRecordsEN]=useState(
  {
   name:"",
   description:"",
  }
)
const[productRecordsRU,setProductRecordsRU]=useState(
  {
   name:"",
   description:"",
  }
)
 
function Submit(e){
  e.preventDefault()
  console.log(productRecord)
}
const pickProAZ=(e)=>{
  setProductRecordsAZ({
       ...productRecordsAZ,
      [e.target.id]: e.target.value},
  )
}
const pickProEN=(e)=>{
  setProductRecordsEN({
       ...productRecordsEN,
      [e.target.id]: e.target.value},
  )
}
const pickProRU=(e)=>{
  setProductRecordsRU({
       ...productRecordsRU,
      [e.target.id]: e.target.value},
  )
}

const handleAddClick=()=>{ alert("zordu hersey")
productRecord.push(productRecordsAZ,productRecordsEN,productRecordsRU)
}
console.log(productRecord)
  return (
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>AZ</Tab>
    <Tab>EN</Tab>
    <Tab>RU</Tab>
  </TabList>
  <form onSubmit={(e)=>Submit(e)}>
  <TabPanels>
    <TabPanel>
      <Input placeholder='Daxil edin AZ' id='name' onChange={(e)=>pickProAZ(e)} value={productRecordsAZ.name} />
      <br/>
      <Textarea placeholder='Daxil edin AZ' id='description' onChange={(e)=>pickProAZ(e)} value={productRecordsAZ.description} />
    </TabPanel>
    <TabPanel>
    <Input placeholder='Daxil edin EN' id='name' onChange={(e)=>pickProEN(e)} value={productRecordsEN.name} />
      <br/>
      <Textarea placeholder='Daxil edin EN' id='description' onChange={(e)=>pickProEN(e)} value={productRecordsEN.description} />
    </TabPanel>
    <TabPanel>
    <Input placeholder='Daxil edin RU' id='name' onChange={(e)=>pickProRU(e)} value={productRecordsRU.name} />
      <br/>
      <Textarea placeholder='Daxil edin RU' id='description' onChange={(e)=>pickProRU(e)} value={productRecordsRU.description} />
    </TabPanel>
 </TabPanels>
 <button type='submit' className='btn btn-primary ms-2 mt-3' onClick={handleAddClick}>Əlavə et</button>
  </form>

</Tabs>
  )
}

export default AddProduct