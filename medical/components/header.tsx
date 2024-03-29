import { cn } from "@/lib/utils";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";
import { MobileToggle } from "./mobile-toggle";

interface HeaderProps {
    children: React.ReactNode,
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    return (
        <div className={cn("rounded-2xl shadow-md shadow-gray-400 w-[92%] mt-4 mx-auto bg-transparent py-[.7rem] px-[1.2rem]", className)}>
            <div className="w-full flex items-center justify-between">
                <MobileToggle />
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
                    <UserButton afterSignOutUrl="/" />
                </div>

            </div>
        </div>
    );
}

export default Header;
