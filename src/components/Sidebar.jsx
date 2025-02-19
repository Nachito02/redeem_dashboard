import { FaWineGlass, FaUser, FaWineBottle } from "react-icons/fa";
import { RxTokens } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { GiCellarBarrels } from "react-icons/gi";

const Sidebar = () => {
  const session = useSession();
  return (
    <div className="flex">
      <div className="fixed z-41 w-20 h-full p-4 bg-[#F1EDE2] border-r-[1px] flex flex-col justify-between shadow-xl ">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-[#840C4A] hover:opacity-40 cursor-pointer text-white p-3 rounded-lg inline-block">
              <FaWineGlass size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-[#840C4A] w-full p-2"></span>
          <Link href="/">
            <div className="bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-[#840C4A]">
              <RxTokens size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-[#840C4A]">
              <FaUser size={20} />
            </div>
          </Link>

          <Link href="/redeems">
            <div className="bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-[#840C4A]">
              <FaWineBottle size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-[#840C4A]">
              <Image
                src={"/assets/mtb23.png"}
                width={200}
                height={200}
                alt="mtb23"
              />
            </div>
          </Link>
          {session.data?.isAdmin && (
            <Link href="/winarys">
              <div className="bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-[#840C4A]">
                <GiCellarBarrels size={20} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
