

const Button = ({name}) => {
   
    
  return (
    <button
    href="#"
    className="relative flex items-center justify-center px-4 py-2 mt-2  bg-black text-white rounded-md shadow-sm font-medium text-sm transition-all duration-300 ease-out hover:bg-black/90 hover:ring-2 hover:ring-black hover:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  >
    {/* <!-- Decorative Highlight --> */}
    <span
      className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
    ></span>
  
    {/* <!-- Main Button Content --> */}
    <div className="flex items-center">
     
     
      <span className="ml-1 text-white">{name}</span>
    </div>
  
   
  </button>
  
  )
}

export default Button