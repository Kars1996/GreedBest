"use client";
import { ReactNode, useRef, useState } from "react";
import { BiCommand, BiCopy } from "react-icons/bi";
import {
  FaBookOpen,
  FaMoneyBillWaveAlt,
  FaMedal,
  FaTicketAlt,
  FaSearch,
} from "react-icons/fa";
import { FaShield, FaMoneyBill1Wave, FaSquareLastfm } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdAddReaction } from "react-icons/md";
import {
  SiFsecure,
  SiFunimation,
  SiSlashdot,
  SiLevelsdotfyi,
} from "react-icons/si";
import { FaMusic, FaList } from "react-icons/fa6";
import { RiChatVoiceFill, RiSlashCommands, RiRobot3Fill } from "react-icons/ri";
import {
  IoInformationCircleSharp,
  IoShareSocial,
  IoGameController,
} from "react-icons/io5";
import { AiFillProfile, AiFillPicture } from "react-icons/ai";
import Exported from "./commands.json";
import "./../../styles/globals.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Commands() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsScrolling(true);
    setScrollStartX(event.clientX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isScrolling) return;
    const scrollX = event.clientX - scrollContainerRef.current!.offsetLeft;
    const scrollDelta = scrollX - scrollStartX;
    scrollContainerRef.current!.scrollLeft = scrollLeft - scrollDelta;
  };

  const handleCategoryClick = (category: string) => {
    if (isScrolling) return;
    setActiveCategory(category);
  };

  const commands = Object.values(Exported)
    .flat()
    .sort((a, b) => a.name.localeCompare(b.name));

  const activeCommands = commands.filter(
    (command) => command.category === activeCategory
  );

  const activeCommandsSearch = commands.filter(
    (command) => command.category === activeCategory
  );

  return (
    <main className="mt-20 mx-10" onMouseUp={handleMouseUp}>
      <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
        <div className="flex flex-row row-3 justify-between gap-20">
          <div className="flex flex-row items-center gap-2 text-white">
            <div className="flex flex-row justify-center items-center w-12 h-12 bg-loti-200 rounded-full">
              <BiCommand className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Commands</h1>
          </div>
          <div className="flex flex-row gap-12"></div>
          <div className="flex flex-row gap-12">
            <Popup
              className="gap-20 color-white"
              trigger={
                <button className="float-right block w-full px-4 py-4 pl-4 text-sm rounded-lg bg-[#1a1a19] placeholder-zinc-400 text-white focus:outline-none">
                  {" "}
                  <FaSearch className="w-5 h-5" />{" "}
                </button>
              }
              modal
            >
              <span style={{ width: "20%" }}>
                <div className="modal" style={{ color: "white" }}>
                  <div className="header">
                    <center>
                      <input
                        type="search"
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="flex items-center justify-center w-[98%] px-12 py-4 pl-4 text-sm rounded-3xl border border-loti-300 bg-[#30302F]  placeholder-zinc-400 text-white focus:outline-none"
                        placeholder="Search for a command..."
                        required
                      />
                    </center>
                  </div>
                  <div className="content">
                    <div className="mt-1 grid grid-cols-1 gap-3">
                      {" "}
                      {activeCommandsSearch
                        .filter((command) => {
                          if (searchInput === "") {
                            return command;
                          } else if (
                            command.name
                              .toLowerCase()
                              .includes(searchInput.toLowerCase())
                          ) {
                            return command.name;
                          }
                        })
                        .map((commandsSearch) => (
                          <CommandSearch
                            key={commandsSearch.name}
                            name={commandsSearch.name}
                            description={commandsSearch.help ?? "None"}
                            args={commandsSearch.aliases ?? ["None"] ?? "None"}
                            permissions={commandsSearch.brief ?? "None"}
                            category={commandsSearch.category ?? "None"}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </span>
            </Popup>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="mt-10 flex items-center overflow-x-scroll no-scrollbar touch-scroll h-14 bg-loti-200 rounded-2xl w-full border border-loti-300"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          <SelectorItem
            name="All"
            amount={commands
              .filter((command) => command.category === "All")
              .length.toString()}
            icon={<RiSlashCommands className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Info"
            amount={commands
              .filter((command) => command.category === "Info")
              .length.toString()}
            icon={<IoInformationCircleSharp className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Utility"
            amount={commands
              .filter((command) => command.category === "Utility")
              .length.toString()}
            icon={<FaMoneyBillWaveAlt className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Moderation"
            amount={commands
              .filter((command) => command.category === "Moderation")
              .length.toString()}
            icon={<FaShield className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Donator"
            amount={commands
              .filter((command) => command.category === "Donator")
              .length.toString()}
            icon={<FaMoneyBill1Wave className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Config"
            amount={commands
              .filter((command) => command.category === "Config")
              .length.toString()}
            icon={<PiNotebookFill className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Fun"
            amount={commands
              .filter((command) => command.category === "Fun")
              .length.toString()}
            icon={<IoIosSettings className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Lastfm"
            amount={commands
              .filter((command) => command.category === "Lastfm")
              .length.toString()}
            icon={<FaSquareLastfm className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Emoji"
            amount={commands
              .filter((command) => command.category === "Emoji")
              .length.toString()}
            icon={<FaBookOpen className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Vanity"
            amount={commands
              .filter((command) => command.category === "Vanity")
              .length.toString()}
            icon={<SiSlashdot className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Webhooks"
            amount={commands
              .filter((command) => command.category === "Webhooks")
              .length.toString()}
            icon={<SiFunimation className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Music"
            amount={commands
              .filter((command) => command.category === "Music")
              .length.toString()}
            icon={<FaMusic className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Antinuke"
            amount={commands
              .filter((command) => command.category === "Antinuke")
              .length.toString()}
            icon={<SiFsecure className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Automod"
            amount={commands
              .filter((command) => command.category === "Automod")
              .length.toString()}
            icon={<GiSettingsKnobs className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Events"
            amount={commands
              .filter((command) => command.category === "Events")
              .length.toString()}
            icon={<RiChatVoiceFill className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Logs"
            amount={commands
              .filter((command) => command.category === "Logs")
              .length.toString()}
            icon={<FaList className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Leveling"
            amount={commands
              .filter((command) => command.category === "Leveling")
              .length.toString()}
            icon={<SiLevelsdotfyi className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Voicemaster"
            amount={commands
              .filter((command) => command.category === "Voicemaster")
              .length.toString()}
            icon={<IoGameController className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Autopfp"
            amount={commands
              .filter((command) => command.category === "Autopfp")
              .length.toString()}
            icon={<AiFillPicture className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Boosterrole"
            amount={commands
              .filter((command) => command.category === "Boosterrole")
              .length.toString()}
            icon={<FaMedal className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Ticket"
            amount={commands
              .filter((command) => command.category === "Ticket")
              .length.toString()}
            icon={<FaTicketAlt className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Responders"
            amount={commands
              .filter((command) => command.category === "Responders")
              .length.toString()}
            icon={<RiRobot3Fill className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Sob"
            amount={commands
              .filter((command) => command.category === "Sob")
              .length.toString()}
            icon={<MdAddReaction className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Profile"
            amount={commands
              .filter((command) => command.category === "Profile")
              .length.toString()}
            icon={<AiFillProfile className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
          <SelectorItem
            name="Poster"
            amount={commands
              .filter((command) => command.category === "Poster")
              .length.toString()}
            icon={<IoShareSocial className="w-6 h-6" />}
            active={activeCategory}
            onClick={handleCategoryClick}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeCommands.map((command) => (
            <Command
              key={command.name}
              name={command.name}
              description={command.help ?? "None"}
              args={command.aliases ?? ["None"] ?? "None"}
              permissions={command.brief ?? "None"}
              category={command.category ?? "None"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const SelectorItem = ({
  name,
  amount,
  icon,
  active,
  onClick,
}: {
  name: string;
  amount: string;
  icon: ReactNode;
  active: string;
  onClick: (category: string) => void;
}) => {
  const handleButtonClick = () => {
    onClick(name);
  };

  return (
    <button
      className={`flex flex-row gap-2 items-center h-full px-4 ${
        active == name
          ? "text-white bg-loti-300"
          : "text-loti-500 hover:bg-loti-dim hover:text-white"
      }`}
      onClick={handleButtonClick}
    >
      <div className="text-loti-500">{icon}</div>
      <span className="text-base font-medium">{name}</span>
      <div className="flex bg-loti-400 px-2 py-1 rounded-xl">
        <span className="text-sm font-semibold text-loti-500">{amount}</span>
      </div>
    </button>
  );
};

const Command = ({
  name,
  description,
  args,
  permissions,
  category,
}: {
  name: string;
  description: string;
  args: string[];
  permissions: string;
  category: string;
}) => {
  return (
    <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white">
      <div className="h-full flex flex-col justify-between">
        <div className="px-6">
          <div className="flex items-start justify-between gap-x-4">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold inline-flex items-center">
                {name}
              </p>
            </div>
            <button
              data-clipboard-text={name}
              className="text-neutral-500 transition duration-200 ease-linear hover:text-white"
              onClick={() => navigator.clipboard.writeText(name)}
            >
              <BiCopy className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
            {description}
          </p>
        </div>
        <div>
          <hr className="border-t border-loti-300 w-full my-4" />
          <div className="px-6 flex flex-col gap-4">
            <div>
              <p className="text-sm tracking-wide text-loti-pink font-medium">
                aliases
              </p>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-neutral-200 inline-block text-sm py-1">
                  {args.join(", ") || "None"}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm tracking-wide text-loti-pink font-medium">
                permissions
              </p>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-white font-medium inline-block text-xs py-1.5">
                  {permissions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommandSearch = ({
  name,
  description,
  args,
  permissions,
  category,
}: {
  name: string;
  description: string;
  args: string[];
  permissions: string;
  category: string;
}) => {
  return (
    <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white gap-20">
      <div className="h-full flex flex-col justify-between">
        <div className="px-6">
          <div className="flex items-start justify-between gap-x-4">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold inline-flex items-center">
                {name}
              </p>
            </div>
            <button
              data-clipboard-text={name}
              className="text-neutral-500 transition duration-200 ease-linear hover:text-white"
              onClick={() => navigator.clipboard.writeText(name)}
            >
              <BiCopy className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
            {description}
          </p>
        </div>
        <div>
          <hr className="border-t border-loti-300 w-full my-4" />
          <div className="px-6 flex flex-col gap-4">
            <div>
              <p className="text-sm tracking-wide text-loti-pink font-medium">
                aliases
              </p>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-neutral-200 inline-block text-sm py-1">
                  {args.join(", ") || "None"}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm tracking-wide text-loti-pink font-medium">
                permissions
              </p>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-white font-medium inline-block text-xs py-1.5">
                  {permissions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
