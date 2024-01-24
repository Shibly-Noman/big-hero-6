import { Textarea } from "@mantine/core";
import { IconViewfinder, IconCircleArrowRight } from "@tabler/icons-react";
import { useState, useEffect } from "react";
export default function Prompt() {
  const [promptString, setPromptString] = useState('');
  const onSubmit = () => {
    if(promptString !== ""){
      // console.log("Prompting:", promptString);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "2px solid #DED0B6",
          borderRadius: "8px",
          padding: "14px",
          width: "40%",
        }}
      >
        <Textarea
          variant="unstyled"
          placeholder="Ask anything"
          style={{
            width: "100%",
          }}
          onChange={(e: any) => setPromptString(e.target.value)}
        />
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                padding: "3px 5px",
                backgroundColor: "#DED0B633",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "5px",
              }}
            >
              <IconViewfinder
                style={{ width: "14px", height: "14px", marginRight: "5px" }}
              />
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                Focus
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onSubmit}
          >
            <IconCircleArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
