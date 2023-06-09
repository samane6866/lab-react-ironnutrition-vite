import { useState } from "react"
import {Input} from "antd"


export default function Search() {
const[search, setSearch]=useState("")

    return <>
        <label>Search</label>
        <Input id="search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)}></Input>
    </>




}