import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type { user } from '../interface'
import axios from "axios"
import { MutableRefObject, useRef } from 'react'
const Home: NextPage = () => {
  interface inputScheme {
    title: string,
    type: string
  }
  const inputs:inputScheme[] = [{"title":"firstname","type":"ftitle"}, {"title":"lastname","type":"ltitle"},{"title":"email","type":"email"},{"title":"password","type":"password"},{"title":"verify_password","type":"password"},{"title":"default_company","type":"ftitle"}]
  let userRef:{[key:string]:any} = {};
  /*
    "firsttitle": "Nombre",
  "lasttitle": "Apellido",
  "email": "ejemplo@email.com",
  "password": "ejemplo",
  "verify_password": "ejemplo",
  "default_company": "Empresa Ejemplo"

  */
  async function signup (){
    
    await axios({
      method: 'POST',
      url: '/api/users',
      data: {firstname:userRef['firstname'].current.value,
      lastname:userRef['lastname'].current.value,
      email:userRef['email'].current.value,
      password:userRef['password'].current.value,
      verify_password:userRef['verify_password'].current.value,
      default_company:userRef['default_company'].current.value,
    }
    }).then(x => {
      switch(x.data.status){
        case 200:
          localStorage.setItem("userData",JSON.stringify({token:x.data.response.token,expires:x.data.expires}))
          location.pathname = "/home"
        break

        default:

        break;
      }
    });
  }
  function parseInputs(inputs: inputScheme[]) {

    let result:JSX.Element[] = []
    inputs.forEach(x => {
      console.log(userRef)
      userRef[x.title] = useRef<HTMLHeadingElement>()
      result.push(
        <div className='m-auto'>
            <p className='font-light text-lg'>{x.title}</p>
            <input ref = {userRef[x.title]} type={x.type} placeholder = {x.title} className='w-64 p-1 pl-2 pr-2   h-8 border border-gray-400 focus:outline-none m-auto '/>
          </div>
      )
    })
    return result
  }
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta title="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-[100vh]'>
			{
				//<canvas id = "camera"></canvas>
			}
			<div className='w-[500px] p-8 m-auto mt-64 border-gray-600 rounded-lg border-2 flex flex-col justify-evenly'>
          
          {parseInputs(inputs)}
          
          <div className='mt-4'>
            <a href = "/login"  className='text-lg text-center block underline underline-offset-45 text-blue-600'>Already have an account?</a>
            <button onClick={signup} className='bg-black border-black block text-white text-3xl font-bold m-auto relative p-1 pl-2 pr-2 transition-all hover:bg-white hover:border-2 hover:text-black hover:text-2xl hover:pl-4 hover:pr-4 hover:font-light'>Login</button>
          </div>
			</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home



/*

<div className='flex bg-gray-800 w-[100vw] p-3 text-white'><p className='font-bold text-3xl text-center w-[100%]'>Muttley</p></div>
        <div className='border-2 border-slate-300 rounded-lg w-[550px] mt-44 m-auto text-center h-[400px] flex flex-col justify-center'>
			<h1 className='text-5xl font-bold h-32px]'>LOGIN</h1>
        </div>
        */