const VideoTitle = ({title, overview}) => {
  
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold '>{title}</h1>
      <p className='py-6 text-lg w-[60%] '>{overview}</p>
      <div className=''>
        <button className='bg-white bg-transparent text-black p-4 px-12  text-xl rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
        <button className='bg-[#6D6D6D] bg-transparent text-white p-4 px-12 mx-2 text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle