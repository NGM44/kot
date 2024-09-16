import React, { useRef } from "react";
import { HStack } from "../../component/utils";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Droplets } from "lucide-react";
import { Icon } from "@iconify/react";
import { CardModel } from "./GenerateDashboardData";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const DataCards = ({ value }: { value: CardModel }) => {
  return (
    <div
      className={
        "flex-1  bg-transparent relative text-xl rounded-xl p-[1px] overflow-hidden "
      }
    >
      {!(
        parseFloat(value.value) >= (value.min ?? 0) &&
        parseFloat(value.value) <= (value.max ?? 100000000)
      ) && (
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${100} * 0.96)` }}
        >
          <MovingBorder duration={3000} rx="30%" ry="30%">
            <div
              className={
                "h-40 w-60 opacity-[0.8] bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]"
              }
            />
          </MovingBorder>
        </div>
      )}

      <div
        className={
          "relative backdrop-blur-xl text-white rounded-xl  text-sm antialiased"
        }
      >
        <div
          id={value.key}
          className={`flex-1 ${
            parseFloat(value.value) >= (value.min ?? 0) &&
            parseFloat(value.value) <= (value.max ?? 100000000)
              ? "bg-white"
              : "bg-red-50"
          } p-4 shadow-box rounded-xl`}
        >
          <HStack className="w-full whitespace-nowrap items-center justify-between">
            <HStack className="items-center ">
              <p className="text-sm text-secondary font-medium">{value.name}</p>
              <InformationCircleIcon className="w-4 h-4 ml-2 text-gray-400" />
            </HStack>
            <button
              type="button"
              className="rounded-xl bg-white px-3 py-2.5 text-xs1 font-semibold text-gray-900 shadow-box  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              See Details
            </button>
          </HStack>
          <HStack className="gap-2 mt-6 mb-2">
            <div className="p-2 shadow-box bg-gray-50 border-gray-200 border rounded-lg">
              {/* <Droplets className="w-4 h-4 text-primary" /> */}
              <Icon
                className="w-5 h-5 text-primary font-bold"
                icon={value.iconName}
              />
            </div>
            <p className="text-secondary text-3xl font-semibold">
              {value.value}
            </p>
            <p className="text-gray-400 text-lg pt-2 font-medium">
              {value.unit}
            </p>
            {/* <div className="p-1 shadow-box h-6 text-sm bg-green-50 text-green-500 font-semibold rounded-lg">
          {value.change}
        </div> */}
          </HStack>
          <HStack className="gap-2 mt-2">
            <p className="text-gray-500 text-xs1">{value.content}</p>
          </HStack>
        </div>
      </div>
    </div>
  );
};

export default DataCards;

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
