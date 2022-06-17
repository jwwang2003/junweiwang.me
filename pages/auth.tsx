import { MdPassword } from 'react-icons/md'

function Auth() {
  return (
    <div className="w-1/3 mx-auto">
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
      <div className="mt-1 relative shadow-sm w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MdPassword className="text-black" />
        </div>
        <input type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300" placeholder=""/>

      </div>
    </div>
  )
}

export default Auth;