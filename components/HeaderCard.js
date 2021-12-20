import { useState } from "react"
import { toast } from 'react-toastify'

import {
  AiOutlineGithub,
  AiOutlineReddit,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail
} from 'react-icons/ai'

const _github = 'https://github.com/jwwang2003'
const _reddit = 'https://www.reddit.com/user/jw_wang'
const _linkedIn = '/'
const _instagram = 'https://www.instagram.com/jww.2003'
const _email = 'mailto: jwwang.03@outlook.com'

const RedirectWarning = ({ closeToast, url }) => (
  <div className="text-right">
    You are about to be redirected to <p className="text-blue-500">{url}</p>
    <div>
      <button onClick={closeToast} type="button" className="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Nah</button>
      <a href={url} target="_blank">
        <button type="button" className="py-2 px-4 mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Procced</button>
      </a>
    </div>
  </div>
)

const names = ['Jimmy Wang', 'Jun Wei Wang', '王俊崴']

function Card() {
  const [name, setName] = useState(0)

  const handleNameChange = () =>
    name + 1 >= names.length ? setName(0) : setName(name + 1)

  const Redirect = (url) =>
    toast.warn(<RedirectWarning url={url} />) 
  
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-md p-5">
        <div className="">
          <img className="w-32 mx-auto shadow-xl rounded-full" src="me1.jpg" alt="Profile face" />
        </div>
        <div className="text-center mt-5">
          <p
            className="text-xl sm:text-2xl font-semibold text-gray-900"
            onClick={handleNameChange}
          >
            {names[name]}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Aspiring software engineer that loves DIY and tinkering with hardware
          </p>
          <div className="flex align-center justify-center mt-3">
            <a
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Redirect(_github)}
            >
               <AiOutlineGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Redirect(_reddit)}
            >
               <AiOutlineReddit />
              <span className="sr-only">Reddit</span>
            </a>
            <a
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Redirect(_linkedIn)}
            >
              <AiOutlineLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Redirect(_instagram)}
            >
              <AiOutlineInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Redirect(_email)}
            >
              <AiOutlineMail />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card