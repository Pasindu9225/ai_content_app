"use client";
import Link from "next/link";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import templates from "@/app/(data)/templates";
import { ArrowLeft } from "lucide-react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}
const CreateNewContent = (props: PROPS) => {
  const GenerateAIContent = (userFormInput: any) => {
    console.log("user input data", userFormInput);
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
        />
        <div className=" col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
