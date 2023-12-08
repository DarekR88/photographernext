"use client";

import Link from "next/link";
import Image from "next/image";

export default function RequestService() {
  return (
    <>
      <p className="text-center py-4 lg:py-6">Request Service</p>
      <div className="flex max-w-[600px] m-auto text-center py-4 lg:mb-[100px] lg:py-9">
        <form className="m-auto">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              className="w-[300px] lg:w-[400px] m-auto border-2 border-black"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="w-[300px] lg:w-[400px] m-auto border-2 border-black"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-row max-w-[300px] m-auto justify-between my-3">
            <div>
              <input type="checkbox" name="event" id="event" />
              <label for="event">Events</label>
            </div>
            <div>
              <input type="checkbox" name="family" id="family" />
              <label for="event">Portraits</label>
            </div>
            <div>
              <input type="checkbox" name="headshots" id="headshots" />
              <label for="headshots">Head Shots</label>
            </div>
          </div>
          <input
            type="text"
            name="summary"
            className="w-[300px] lg:w-[400px] h-[100px] border-2 border-black"
            placeholder="Request Summary"
          />
          <button className="w-[300px] h-[50px] mt-3 bg-black text-font-secondary">Submit Request</button>
        </form>
      </div>
    </>
  );
}
