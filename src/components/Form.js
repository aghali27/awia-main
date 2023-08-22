"use client";

import { useState } from "react";

export default function StateForm({ title, state, service, purpose }) {
  const [selectedState, setSelectedState] = useState(state);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const [selectedService, setSelectedService] = useState(service);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const [selectedPurpose, setSelectedPurpose] = useState(purpose);

  const handlePurposeChange = (event) => {
    setSelectedPurpose(event.target.value);
  };

  var titleHTML = "";
  if (title) {
    titleHTML = title;
  }

  return (
    <form method="get" action="/members">
      <div className={"grid gap-5 lg:grid-cols-5 items-end"}>
        <h2 className="font-semibold">{titleHTML}</h2>
        <div className="text-left">
          <p>I'm looking for</p>
          <select
            name="purpose"
            className="w-full px-8 py-4 bg-white rounded-xl border-none"
            value={selectedPurpose}
            onChange={handlePurposeChange}
          >
            <option value="">An Agency</option>
            <option value="151524236">Design</option>
            <option value="151524238">Development</option>
            <option value="151524239">SEO</option>
            <option value="151524240">Social Media</option>
          </select>
        </div>
        <div className="text-left">
          <p>To help me with</p>
          <select
            name="service"
            className="w-full px-8 py-4 bg-white rounded-xl border-none"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="">A Website</option>
            <option value="151524236">Design</option>
            <option value="151524238">Development</option>
            <option value="151524239">SEO</option>
            <option value="151524240">Social Media</option>
          </select>
        </div>
        <div className="text-left">
          <p>Located in</p>
          <select
            name="state"
            className="w-full px-8 py-4 bg-white rounded-xl border-none"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Australia Wide</option>
            <option value="act">ACT</option>
            <option value="nsw">New South Wales</option>
            <option value="nt">Northern Territory</option>
            <option value="qld">Queensland</option>
            <option value="sa">South Australia</option>
            <option value="tas">Tasmania</option>
            <option value="vic">Victoria</option>
            <option value="wa">Western Australia</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Let's go!"
            className="px-12 py-4 text-white font-semibold cursor-pointer bg-awiapurple rounded-full"
          />
        </div>
      </div>
    </form>
  );
}
