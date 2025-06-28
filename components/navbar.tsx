import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image 
                src="/images/logo.svg" 
                alt="logo" 
                width={100} 
                height={100} 
                className="w-10 h-10"
                />
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <p>Home</p>
            <p>Companions</p>
            <p>My Journey</p>
            <p>Profile</p>
            <p>Subscription</p>
        </div>
    </nav>
  )
}

export default Navbar