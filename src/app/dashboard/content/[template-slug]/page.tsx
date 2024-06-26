"use client";
import Link from "next/link";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import templates from "@/app/(data)/templates";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "../../../../../utils/AiModal";
import { useState } from "react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}
const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const GenerateAIContent = async (userFormInput: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(userFormInput) + "," + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);

    console.log(result.response.text());

    setAiOutput(result?.response.text());

    setLoading(false);
  };
  const selectedTemplate: TEMPLATE | undefined = templates?.find(
    (template) => template.slug == props.params["template-slug"]
  );

  return (
    <div className=" bg-gray-300">
      <Link href="/dashboard">
        <button className=" mt-4 ml-4 rounded-full shadow-md p-2 bg-black font-bold text-white active:scale-95">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </Link>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className=" col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
