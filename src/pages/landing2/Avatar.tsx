import { Box, Center } from "../../component/utils";

function Avatar({
  name,
  status,
  isDark,
}: {
  name: string;
  status?: string;
  isDark?: boolean;
}) {
  
  return (
    <Center className="relative w-8 h-8 loader-linear ">
      <Center
        className={`flex w-8 h-8 rounded-full 
         ${isDark ? "bg-gray-100 text-gray-700" : "bg-gray-200 text-gray-700"}
        `}
      >
        <p className="text-base font-medium ">{name.charAt(0)}</p>
      </Center>
      {status && status !== "Employed" ? (
        <Box
          className="absolute bottom-0 right-0 flex w-2.5 h-2.5
         bg-red-500 border-2 border-white rounded-full "
        ></Box>
      ) : (
        ""
      )}
    </Center>
  );
}
export default Avatar;
