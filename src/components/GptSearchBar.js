import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchBar = () => {
  const locale = useSelector(store => store.config.language);
  
  return (
    <div className="pt-[10%] flex justify-center">
        <form className=" bg-black w-1/2 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={language[locale].gptSearchPlaceholder}></input>
            <button className="py-2 px-4 bg-red-700 text-white rounded col-span-3 m-2"> {language[locale].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar;