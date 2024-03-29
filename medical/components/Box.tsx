import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode
    className?: string;
}
const Box: React.FC<BoxProps> = ({ children, className }) => {
    return (
        <div className={twMerge(`bg-transparent shadow-md shadow-gray-600 rounded-lg h-[100vh] w-full`, className)}>
            {children}
        </div>
    );
}

export default Box;