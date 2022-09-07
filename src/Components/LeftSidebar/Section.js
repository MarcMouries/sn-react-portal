import React from "react";
import { Button } from "@blueprintjs/core";

export default function Section(props) {
  const { title, children, action } = props;

  return (
    <div className="panel-section">
      <div className="panel-section--header">
        {title && <h3>{title}</h3>}
        {action &&
          <Button minimal={true} intent="primary">
            <small>{action}</small>
          </Button>
        }
      </div>
      {children}
    </div>
  );
}
