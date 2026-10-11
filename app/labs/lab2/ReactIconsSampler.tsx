import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdLibraryBooks } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdLibraryBooks className="text-blue-600" />
        <HiAcademicCap className="text-4xl text-blue-600" />
        {/* On my own 2.2 */}
        <IoRocketOutline className="text-2xl text-green-600" />
        <BsFillPatchCheckFill className="text-2xl text-pink-600" />
      </div>
    </div>
  );
}