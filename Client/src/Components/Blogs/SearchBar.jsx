import React from 'react'

const SearchBar = () => {
  return (
    <div className="holder flex justify-center items-center">
        
        {
          screen.width<1700 &&
          <><div className="searchBar w-[84vw] md:w-[77vmin]">
          <input type="text" name="search" id="search" placeholder='Search for Blogs...' className='w-[84vw] md:w-[77vmin] border-headerUnderline border-[1px] p-2' />
        </div><div className="searchIcon w-[10vmin] h-[10vmin] md:w-[6vmin] md:h-[5.65vmin] bg-lightBlue flex justify-center items-center mt-[0.25px]">
            <img src={require("../../../assets/search3.png")} height={25} width={25} />
          </div></>
        }
        {
          screen.width>=1700 && screen.width<1900 &&
          (
            <><div className="searchBar w-[84vw] md:w-[70vmin]">
            <input type="text" name="search" id="search" placeholder='Search for Blogs...' className='w-[84vw] md:w-[70vmin] border-headerUnderline border-[1px] p-3 h-[6vmin] text-[2.15vmin]' />
          </div><div className="searchIcon w-[10vmin] h-[10vmin] md:w-[6.5vmin] md:h-[6.5vmin] bg-lightBlue flex justify-center items-center mt-[0.25px]">
              <img src={require("../../../assets/search3.png")} height={25} width={25} />
            </div></>
          )
        }
      {
          screen.width>=1900 && screen.width<2048 &&
          (
            <><div className="searchBar w-[84vw] md:w-[70vmin]">
            <input type="text" name="search" id="search" placeholder='Search for Blogs...' className='w-[84vw] md:w-[70vmin] border-headerUnderline border-[1px] p-3 h-[6vmin] text-[2.15vmin]' />
          </div><div className="searchIcon w-[10vmin] h-[10vmin] md:w-[6.5vmin] md:h-[6.5vmin] bg-lightBlue flex justify-center items-center mt-[0.25px]">
              <img src={require("../../../assets/search3.png")} height={25} width={25} />
            </div></>
          )
        }
           {
          screen.width>=2048 &&
          (
            <><div className="searchBar w-[84vw] md:w-[70vmin]">
            <input type="text" name="search" id="search" placeholder='Search for Blogs...' className='w-[84vw] md:w-[70vmin] border-headerUnderline border-[1px] p-3 h-[6vmin] text-[2.15vmin]' />
          </div><div className="searchIcon w-[10vmin] h-[10vmin] md:w-[6.5vmin] md:h-[6.5vmin] bg-lightBlue flex justify-center items-center mt-[0.25px]">
              <img src={require("../../../assets/search3.png")} height={25} width={25} />
            </div></>
          )
        }
  
    </div>
  )
}

export default SearchBar
