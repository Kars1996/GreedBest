"use client";
import { TbCloudDataConnection } from "react-icons/tb";
import { MdOutlineTimeline } from "react-icons/md";
import { ImConnection } from "react-icons/im";
import { HiServerStack } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Status() {
  const [shards, setShards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://v1.pretend.best/shards/greed/get",
          headers: {
            "api-key":
              "q5kyMps9R1SKllw1bKwORmpR941qKY4jbFtqml3htSkQJsgadPbilXbc7d31tW4K",
          },
        };

        axios
          .request(config)
          .then((response: any) => {
            console.log(JSON.stringify(response.data));
            setShards(response.data['shards'])
          })
          .catch((error) => {
            console.log(error);
          });
        //   const response = await fetch("https://v1.pretend.best/shards/get", {
        //             headers: {
        //                 "Access-Control-Allow-Origin": "*",
        //                 "api-key": "q5kyMps9R1SKllw1bKwORmpR941qKY4jbFtqml3htSkQJsgadPbilXbc7d31tW4K"
        //             }
        //         });
        //         const data = await response.json();
        //         setShards(data['shards']);
      } catch (error) {
        console.error("Error fetching shards:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="mt-20 mx-10">
      <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
        <div className="flex flex-row justify-between gap-20">
          <div className="flex flex-row items-center gap-2 text-white">
            <div className="flex flex-row justify-center items-center w-12 h-12 bg-loti-200 rounded-full">
              <TbCloudDataConnection className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Shards</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10 lg:flex-row">
          {shards.length === 0 ? (
            <div className="flex items-center justify-center text-white">
              <p className="text-2xl animate-pulse">
                Fetching shards information...
              </p>
            </div>
          ) : (
            shards.map((shard: any) => (
              <Shard
                key={shard.shard_id}
                shard={shard.shard_id.toString()}
                uptime={shard.uptime}
                latency={shard.latency.toString()}
                servers={shard.server_count.toString()}
                users={shard.member_count.toString()}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

const Shard = ({
  shard,
  uptime,
  latency,
  servers,
  users,
}: {
  shard: string;
  uptime: string;
  latency: number;
  servers: string;
  users: string;
}) => {
  return (
    <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white">
      <div className="h-full flex flex-col justify-between">
        <div className="px-6">
          <div className="flex items-start justify-between gap-x-4">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold inline-flex items-center">
                Shard {shard}
              </p>
            </div>
            <div className="flex justify-center items-center bg-loti-400 border border-loti-300 rounded-xl px-2 py-1 gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold inline-flex items-center text-green-500">
                Operational
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <IoInformationCircleSharp className="text-loti-600" />
            <p className="text-sm text-loti-600">Refresh For Updates</p>
          </div>
        </div>
        <hr className="border-t border-loti-300 w-full my-4" />
        <div className="grid grid-cols-2 gap-4 px-6">
          <div className="flex flex-col gap-2">
            <p className="text-md text-loti-600">Uptime</p>
            <div className="flex flex-row gap-2 items-center">
              <MdOutlineTimeline className="text-loti-600" />
              <p className="text-md font-semibold">
                {uptime
                  .replaceAll("days", "d")
                  .replaceAll("day", "d")
                  .replaceAll("hours", "hrs")
                  .replaceAll("hour", "hr")
                  .replaceAll("minutes", "m")
                  .replaceAll("minute", "m")
                  .replace("seconds", "s")
                  .replace("second", "s")
                  .replaceAll(" ", "")
                  .replaceAll("and", " ")
                  .replaceAll(",", " ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-loti-600">Latency</p>
            <div className="flex flex-row gap-2 items-center">
              <ImConnection className="text-loti-600" />
              <p className="text-md font-semibold">
                {Math.floor(latency * 1000)}ms
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-loti-600">Servers</p>
            <div className="flex flex-row gap-2 items-center">
              <HiServerStack className="text-loti-600" />
              <p className="text-md font-semibold">{servers}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-loti-600">Users</p>
            <div className="flex flex-row gap-2 items-center">
              <FaUsers className="text-loti-600" />
              <p className="text-md font-semibold">{users}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
