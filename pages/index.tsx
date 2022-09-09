


export default function Home () {


    function loginCheck() {
        location.pathname = "/login"
    }
    return (

        <div className="h-[100vh] flex flex-col justify-center">
            <div className="flex justify-center">
                <button  className="border-2 border-gray-500 m-4 " onClick={loginCheck}>Login</button>
                <a href="/signup"><button className="border-2 border-gray-500 m-4 " >Signup</button></a>
            </div>
        </div>
    )
    
}