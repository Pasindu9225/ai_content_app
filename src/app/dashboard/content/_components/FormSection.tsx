"use client";
import { Input } from "@/components/ui/input";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
}

const FormSection = ({ selectedTemplate, userFormInput }: PROPS) => {
  const [formdata, setFormdata] = useState<any>();
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formdata);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  return (
    <div className="p-5 shadow-md rounded-md border bg-white">
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
      )}
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 line-clamp-4">
        {selectedTemplate?.description}
      </p>
      <form className="mt-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="mb-4 gap-2 flex-col flex my-2">
            <label className=" font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-md w-full"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default FormSection;
