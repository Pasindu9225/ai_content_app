"use client";
import templates from "@/app/(data)/templates";
import TemplateCard from "./TemplateCard";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export interface TEMPLATE {
  name: string;
  description: string;
  category: string;
  icon: StaticImageData;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSection = ({
  userSearchInput,
}: {
  userSearchInput: string;
}) => {
  const [templatelist, setTemplateList] = useState(templates);
  useEffect(() => {
    console.log("User Search Input:", userSearchInput);
  }, [userSearchInput]);

  useEffect(() => {
    if (userSearchInput) {
      const filteredTemplates = templates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(templates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 py-5">
      {templatelist.map((item, index: number) => {
        const template: TEMPLATE = {
          ...item,
          form: item.form?.map((formItem) => ({
            label: formItem.label,
            field: formItem.field,
            name: formItem.name,
            required: formItem.required,
          })),
        };
        return <TemplateCard template={template} key={index} />;
      })}
    </div>
  );
};

export default TemplateListSection;
