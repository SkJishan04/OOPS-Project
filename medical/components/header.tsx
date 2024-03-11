import { cn } from "@/lib/utils";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";

interface HeaderProps {
    children: React.ReactNode,
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    return (
        <div className={cn("h-fit bg-emerald-400  p-6", className)}>
            <div className="w-full mb-4 flex items-center justify-between">
            {children}
                <div className="hidden md:flex gap-x-2 items-center ">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition  ">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition  ">
                        <BiSearch className="text-black" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition  ">
                        <FaUserDoctor className="text-black" size={20} />
                    </button>
                    <UserButton afterSignOutUrl="/"/>
                </div>
                
            </div>
        </div>
    );
}

export default Header;