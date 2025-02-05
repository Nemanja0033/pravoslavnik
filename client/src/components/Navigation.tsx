import { Calendar, Languages, Menu, SunMoon, X } from "lucide-react";
import { useState } from "react"
import { months } from "../utils/moths";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMonths, setIsOpenMonths] = useState(false);
    const {language, toggleLanguage} = useLanguage();
    const {theme, toggleTheme} = useTheme();
    
    if (isOpen) {
        return (
            <div className={`w-full z-50 absolute top-0 left-0 h-screen flex justify-center items-center text-2xl ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'}`}>
                <div className="flex flex-col gap-4 text-center">
                    <button className="self-end p-2 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <X size={30} />
                    </button>
    
                    <b className="text-3xl flex items-center justify-center">
                        {language === 'СР' ? 'Православни Календар' : 'Pravoslavni Kalendar'} ☦️
                    </b>
    
                    <Link className="flex items-center justify-center gap-1 hover:text-amber-500" 
                        to={''} 
                        onClick={() => setIsOpenMonths(!isOpenMonths)}
                    >
                        {language === 'СР' ? 'Календар за целу годину' : 'Kalendar za celu godinu'} 
                        <Calendar size={20} />
                    </Link>
    
                    <Link className="hover:text-amber-500" to={'/post'}>
                        {language === 'СР' ? 'Постови' : 'Postovi'}
                    </Link>
    
                    <Link className="hover:text-amber-500" to={'/o-aplikaciji'}>
                        {language === 'СР' ? 'О апликацији' : 'O aplikaciji'}
                    </Link>
    
                    <div className="flex justify-center gap-4 mt-4">
                        <button onClick={toggleLanguage} className="cursor-pointer hover:text-amber-500 flex gap-1 items-center">
                            <Languages size={20} /> SR/СР
                        </button>
                        <button onClick={toggleTheme} className="cursor-pointer hover:text-amber-500">
                            <SunMoon size={20} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    

  return (
    <div className="flex justify-center items-center">
    <nav className={`md:w-[80%] w-[90%] rounded-full h-[70px] mt-5 ${theme === 'light' ? 'bg-amber-100/40 hover:bg-amber-100' : 'bg-black text-white'} backdrop-blur-sms transition-all items-center flex justify-between`}>
        <div className="flex justify-center md:ml-20 ml-5">
            <b className="text-xl flex items-center">{language === 'СР' ? 'Православни Календар' : 'Pravoslavni Kalendar'} ☦️</b>
        </div>
        <div className="md:flex hidden justify-around gap-4 items-center mr-20">
            <div
                className="relative"
                onMouseEnter={() => setIsOpenMonths(true)}
                onMouseLeave={() => setIsOpenMonths(false)}
            >
                <Link className="flex items-center gap-1 hover:text-amber-500" to={''}>
                    {language === 'СР' ? 'Календар за целу годину' : 'Kalendar za celu godinu'} <Calendar size={16} />
                </Link>
                {isOpenMonths && (
                    <div  className={`${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} z-50 absolute left-0 w-44 rounded-xl shadow-lg p-2`}>
                        {months.map((m, index) => (
                            <Link key={index} to={`/kalendar/${m}`} className="block px-4 py-2 hover:bg-amber-200 rounded">
                                {m} 2025
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Link className="hover:text-amber-500" to={'/post'}>{language === 'СР' ? 'Постови' : 'Postovi'}</Link>
            <Link className="border-r pr-3 hover:text-amber-500" to={'/o-aplikaciji'}>{language === 'СР' ? 'О апликацији' : 'O aplikaciji'}</Link>
            <button onClick={toggleLanguage} className="cursor-pointer hover:text-amber-500 flex gap-1 items-center">
                <Languages size={20} />SR/СР
            </button>
            <button onClick={toggleTheme} className="cursor-pointer hover:text-amber-500">
                <SunMoon />
            </button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="mr-5 md:hidden cursor-pointer">
            <Menu />
        </button>
    </nav>
</div>
  )
}

export default Navbar