"use client";
import Link from "next/link";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import templates from "@/app/(data)/templates";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "../../../../../utils/AiModal";
import { useState } from "react";
import { db } from "../../../../../utils/db";
import { AIOutput } from "../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Result } from "postcss";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const selectedTemplate: TEMPLATE | undefined = templates?.find(
    (template) => template.slug == props.params["template-slug"]
  );

  const GenerateAIContent = async (userFormInput: any) => {
    setLoading(true);
    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAiPrompt =
        JSON.stringify(userFormInput) + "," + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAiPrompt);
      const aiResponse = await result.response.text();

      setAiOutput(aiResponse);
      await SaveInDb(
        JSON.stringify(userFormInput),
        selectedTemplate?.slug,
        aiResponse
      );
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (
    formData: any,
    slug: string | undefined,
    aiOutput: string
  ) => {
    if (!slug) return;
    try {
      await db.insert(AIOutput).values({
        FormData: formData,
        templateSlug: slug,
        aiResponse: aiOutput,
        createdBy: user?.primaryEmailAddress?.emailAddress || "",
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      });

      console.log("db saved result", Result);
    } catch (error) {
      console.error("Error saving to database:", error);
    }
  };

  return (
    <div className="bg-gray-300">
      <Link href="/dashboard">
        <button className="mt-4 ml-4 rounded-full shadow-md p-2 bg-black font-bold text-white active:scale-95">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
