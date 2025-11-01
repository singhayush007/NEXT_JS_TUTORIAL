"use client";
import Button from "./Button";
import React, { ChangeEvent, useRef, useState } from "react";

function page() {
  const input = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent) => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={input} onChange={handleChange} />
        <button>click</button>
      </form>
    </div>
  );
}

export default page;
