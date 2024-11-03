import React from 'react'
import Footer from './Footer'
import TitleComponent from './TitleComponent'
import Header from './Header'
import Card from './Card'

const TeamPage = () => {

  const apiResponse = [
    {
      name: 'Aritra Chakraborty',
      title: 'Founder and Managing Partner',
      image: "https://i.ibb.co/ZfcQgJV/Aritra-Pic.jpg",
      Link:'https://www.linkedin.com/in/aritra-chakraborty-396604217/',
      description:'With deep expertise in technology and strategy Aritra Chakraborty brings in  that knowledge and experience  in the firm  to scale and manage its operations & technical infrastruture by solving complex day to day challenges in the business',
    },
    { 
      name: 'Abhishek Kr. Pandey',
      title: 'Founder and Managing Partner',
      image: "https://i.ibb.co/9qKVQ4Z/Abhishek-Pic-modified.jpg",
      Link:'https://www.linkedin.com/in/abhishek-kr-pandey-57544325a/',
      description:'With vast business experience Abhishek Kr. Pandey brings in the management expertise  in the firm which scales from client relations to HR and help to manage and handle the managerial needs of the firm.',
    },
    {
      name: 'Anish Gupta',
      title: 'Founder and Partner',
      image: "https://i.ibb.co/5xKh9Bh/Anish-Pic-modified.jpg",
      Link:'https://www.linkedin.com/in/anish-gupta-5471a129a/',
      description:'With expertise in digital ads and web development, Anish Gupta brings in expertise over the marketing and development domain for the firm. He also plays a pivotal role in managing the employee relations for the firm.',
    }
  ]




  return (
    <>
    <Header />
     <TitleComponent title="Our Team" slogan="Meet the pillars of Codemap scaling and making it as trusted brand" />
     <div className="TeamCardHolder flex flex-col flex-wrap justify-center  items-center mt-12 md:mt-9  gap-y-[10vmin] md:gap-y-[10vmin] lg:gap-y-[6vmin] pb-16 pl-2 pr-1">
 
      {apiResponse.map((val, index) => (
          <Card data={apiResponse[index]} type="Team" value={index}/>
        ))}
   

     </div>
    <Footer />     
    </>
  )
}

export default TeamPage
