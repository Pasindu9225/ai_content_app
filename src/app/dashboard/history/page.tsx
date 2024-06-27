"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { fetchAIOutputList } from "../../../../utils/dbFunctions";

const HistoryPage = () => {
  const [aiOutputList, setAiOutputList] = useState<any[]>([]);
  const [filteredOutputList, setFilteredOutputList] = useState<any[]>([]);
  const user = useUser().user;
  const emailAddress = user?.emailAddresses[0]?.emailAddress;

  // Logging user email address
  useEffect(() => {
    if (emailAddress) {
      console.log("Signed in user email:", emailAddress);
    } else {
      console.log("User email address not available.");
    }
  }, [emailAddress]);

  // Fetch AI output list on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAIOutputList();
        setAiOutputList(result);
      } catch (error) {
        console.error("Error fetching AI output list:", error);
      }
    };

    fetchData();
  }, []);

  // Filter AI output list based on emailAddress
  useEffect(() => {
    if (aiOutputList.length > 0 && emailAddress) {
      const filteredList = aiOutputList.filter(
        (output) => output.createdBy === emailAddress
      );
      setFilteredOutputList(filteredList);
    }
  }, [aiOutputList, emailAddress]);

  console.log("AI output list:", aiOutputList);
  console.log("Filtered AI output list:", filteredOutputList);

  return (
    <div className="bg-gray-300 min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">History</h1>
      <ul>
        {filteredOutputList.map((output) => (
          <li key={output.id} className="p-2 border rounded mb-2">
            <p>
              <strong>Form Data:</strong> {output.FormData}
            </p>
            <p>
              <strong>Template Slug:</strong> {output.templateSlug}
            </p>
            <p>
              <strong>AI Response:</strong> {output.aiResponse}
            </p>
            <p>
              <strong>Created By:</strong> {output.createdBy}
            </p>
            <p>
              <strong>Created At:</strong> {output.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
