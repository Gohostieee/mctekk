import { StaticImageData } from "next/image"


interface Props {
    windows: {
        name:string,
        func: Function,
        img: StaticImageData,

    }[]
}





export default function Circus (Props) {
    console.log(Props)
    return(
        <div className="`w-[100%] h-[100%] bg-white border-2 border-gray-600 rounded-lg">

        </div>  
    )
  

}



/* nota espanyol:))
fechas importantes:

5 de sept inicio de dosencia

ultimo dia Este si:)))) diciembre 7, osea examen final


*/