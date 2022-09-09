import { useEffect, useState } from "react"
import axios from "axios"


export default function Home() {
    const [userData,useUser] = useState(localStorage.getItem("userData")),[userList,useList] = useState([{firstname:"retrieving data"}])


    async function GetData(){
        if(userData==null) {
            location.pathname = "/"
            return;
        }
        let userJsonData = JSON.parse(userData)
        await axios({
            method: 'GET',
            url: '/api/users?token='+userJsonData.token,
            
        }).then(function SetData(x){
            let data;
            switch(x.data.status) {
                case 200:
                    data = x.data.response
                break;

                default:
                    data = [{firstname:"Failed to retrieve info"}]
                break
                
            }
            useList(data)

        })
    }
    useEffect(()=>{
        GetData()
    },[])
   
    function parseData(data: {[key:string]:any}[]) {
        let result:JSX.Element[] = []
        if(userList===null) {
            return (<p>Retrieving information</p>)
        } else if(Array.isArray(userList)) {data.forEach(x=>{
            result.push(<p>{x['firstname']}</p>)
        })}

        return(
        <div>
            {result}
        </div>)
        
    }   

    return(
        <div>
            {parseData(userList)}
        </div>
    )
}