// "use client";
// import { useUser } from "@clerk/nextjs";
// import React, { useEffect } from "react";
// import { db } from "../../../../utils/db";
// import { AIOutput } from "../../../../utils/schema";

// const UsageTrack = async () => {
//   const { user } = useUser();
//   const result = await db
//     .select()
//     .from(AIOutput)
//     .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

//   useEffect(() => {
//     result && GetTotalUsage();
//   }, [result && user]);
//   const GetTotalUsage = () => {
//     let total: number = 0;
//     result.forEach((element) => {
//       total = total + Number(element.aiResponse?.length);
//     });
//     console.log(total);
//   };
//   return (
//     <div className=" p-2">
//       <div className=" bg-primary text-white p-3 rounded-lg">
//         <div className="">
//           <h2 className=" font-medium">Credits</h2>
//           <div className="h-2 bg-black w-full rounded-full">
//             <div
//               className="h-2 bg-white rounded-full"
//               style={{ width: "50%" }}
//             ></div>
//           </div>
//           <h2 className=" text-sm my-2">5000/10000 credits used</h2>
//         </div>
//       </div>
//       <button className="w-full my-4 py-2 bg-black rounded-md text-white">
//         Upgrade
//       </button>
//     </div>
//   );
// };

// export default UsageTrack;
