"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UploadFormInProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UploadFormIn: React.FC<UploadFormInProps> = ({ onSubmit }) => {
  return (
    <div className="flex items-center mx-auto ">
      <form className="flex mx-auto gap-4" onSubmit={onSubmit}>
        <Input
          type="file"
          id="file"
          name="file"
          accept="application/pdf"
          required
          className="border-red-300"
        />
        <Button className="bg-pink-500 text-amber-50">Upload</Button>
      </form>
    </div>
  );
};

export default UploadFormIn;
