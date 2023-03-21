import Link from "next/link";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

export default function Navigation() {

    const barreRecherche =  {
        width: 200,
        backgroundColor: "var(--color-grayLight)"
    }

    return(
        <nav>
            <div className="flex p-12 justify-between items-center border-b-2">
                <div>
                    <img src="./Logo.svg" alt="Logo" style={{maxWidth: 200}} />
                </div>
                <div className="flex gap-10 font-bold"
                style={{color: "var(--color-blueDark)"}}>
                    <Link href='/home'>Home</Link>
                    <Link href='/about'>About</Link>
                    <div>
                        <Link href='/pages' className="inline-flex items-center">Pages <AiOutlineDown size={15} className='pl-2'/></Link>
                        <div>

                        </div>
                    </div>
                    <Link href='/shop'>Shop</Link>
                    <Link href='/projects'>Projects</Link>
                    <Link href='/news'>News</Link>
                </div>
                <div className="flex">
                    <span className="inline-flex items-center border rounded-full p-1 mx-5"
                    style={{ backgroundColor: "var(--color-grayLight)"}}>
                        <input type="text" style={barreRecherche}
                        className='p-3 rounded-full hover:bottom-0'/>
                        <button className="p-3 rounded-full"
                        style={{backgroundColor: 'var(--color-green)'}}>
                            <BsSearch size={21}
                            style={{color: "white"}}
                            />
                        </button>
                    </span>
                    <span className="inline-flex items-center border rounded-full p-1">
                        <button className="p-3 rounded-full"
                        style={{backgroundColor: 'var(--color-blueDark)'}}>
                            <BsCart3 size={21}
                            style={{color: "white"}}
                            />
                        </button>
                        <p className="p-2">Cart (0)</p>
                    </span>
                </div>
            </div>
        </nav>
    )
}