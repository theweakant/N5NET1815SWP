import React from "react";

import { Button } from "primereact/button";

export default function BasicButton({ text, icon }) {
  return (
    <div className="card flex flex-wrap justify-content-center gap-3 divbutton">
      <Button
        label={text}
        icon={icon}
        // rounded-button
        className="p-button-rounded"
      />
    </div>
  );
}
