import { bgCover } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <>
       <div className="bg-cover block h-[100%] fixed -z-20">
        <img
          className="min-h-[100%] min-w-[100%]"
          src={bgCover}
          alt="logo"
        />
      </div>
      <div className="pt-[20%] md:p-0">
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearch