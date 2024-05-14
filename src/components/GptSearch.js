import { bgCover } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className="text-white">
      <div className="bg-cover block h-[100%] absolute w-[100%] min-h-[100vh] -z-20">
        <img
          className="min-h-[100%] min-w-[100%]"
          src={bgCover}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch