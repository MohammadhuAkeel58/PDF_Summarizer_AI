"use client";
import React from "react";
import UploadFormIn from "./UploadFormIn";
import { z } from "zod";
import { file } from "zod/v4";

const uploadSchema = z.object({
  file: z
    .instanceof(File, { message: "Please upload a valid file." })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File Size Must be less than 20 mb"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File Must be a PDF"
    ),
});

const UploadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // validating the feilds
    const result = uploadSchema.safeParse({ file });

    if (!result.success) {
      console.log("Validation failed", result.error);
    }
    //schema with zod
    // upload the file to uploadthing
    //parse the pdf using langchain
    //summarize the pdf using ai
    //save the summary to the database
    //redirect to the summary page
  };
  return (
    <div>
      <UploadFormIn onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
