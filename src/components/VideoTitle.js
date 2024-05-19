const VideoTitle = ({title, overview}) => {
  
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='md:text-4xl text-2xl font-bold '>{title}</h1>
      <p className='py-6 text-lg w-[60%] md:inline-block hidden'>{overview}</p>
      <div className='my-4 md:my-0'>
        <button className='bg-white bg-transparent text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
        <button className='bg-gray-400 bg-transparent text-white p-4 px-12 mx-2 text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80 hidden md:inline-block'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle