"use client";
import Shapes from "@/components/Shapes/Shapes";
import { Textarea, Tooltip } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import {
  IconViewfinder,
  IconCircleArrowRight,
  IconRepeat,
} from "@tabler/icons-react";
import { useState } from "react";
import { Skeleton } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import LinkCards from "@/components/LinkCard/LinkCards";
export interface Thread {
  // not needed for now
  question?: string;
  prompt?: string;
  sources?: [
    {
      id: number;
      link: string;
      imageUrl: string;
    }
  ];
}
export default function PromptPage() {
  const [thread, setThread] = useState<Thread>({});
  const [dataThread, setDataThread] = useState([]); // [...oldThread, {...newThread}]
  const [promptString, setPromptString] = useState("");
  const [streamString, setStreamString] = useState("");
  const [questionDisplay, setQuestionDisplay] = useState("");
  const [initialPromptDisplayString, setInitialPromptDisplayString] =
    useState("Try Bigfoot...");
  // demo links for the source card
  const handleSubmit = () => fetchPromptData();
  const fetchPromptData = async () => {
    // setThread((state: any) => ({
    //   ...state,
    //   question: promptString
    // }));
    setQuestionDisplay(promptString);
    setPromptString("");
    if (streamString.length > 0) {
      setInitialPromptDisplayString("Please wait...");
      setStreamString("");
    }
    try {
      const response = await fetch("/api/prompt", {
        method: "GET",
        // body: JSON.stringify({ prompt: "Tell me a story of a bigfoot" }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const body = response.body;
      if (!body) {
        throw new Error("Response body is null");
      }
      const reader = body.getReader();
      let st = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          setStreamString(st);
          // setThread((state: any) => ({
          //   ...state,
          //   prompt: st,
          // }));
          break;
          // doing this because the 'react type effect' library does not,
          // support changes on the initial string.
          // The string is streaming as chunks.
        }
        // Handle each chunk as it arrives
        var string = new TextDecoder().decode(value);
        st += string;
        console.log("Chunk received:", string);
      }
      console.log("Streaming complete");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="stream-box-position">
        <div className="flex-center-100">
          <div className="backdrop-blur-md bg-white/30 w-40">
            {/* if clear thread */}
            {streamString?.length === 0 && (
              <TypeAnimation
                speed={75}
                sequence={[
                  initialPromptDisplayString,
                  () => {
                    // dataThread.push({...thread}) // this callback arise complexity
                  },
                ]}
                wrapper="span"
                cursor={false}
                repeat={0}
                style={{ fontSize: "20px", display: "inline-block" }}
              />
            )}

            {/* if thread */}
            {streamString?.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  className="mb-2"
                >
                  {/* <div>
                    <Skeleton className="mr-2" height={30} width={30} circle />
                  </div> */}
                  <div>Question: {questionDisplay}</div>
                </div>
                <div
                  className="mb-2 sub-font"
                >
                  Source:
                </div>
                <LinkCards />
                <div
                  className="mb-2 mr-2 sub-font"
                  
                >
                  Oracle:
                </div>
                {streamString.length > 0 && (
                  <TypeAnimation
                    speed={75}
                    sequence={[
                      streamString,
                      () => {
                        // dataThread.push({...thread})
                      },
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={0}
                    style={{ fontSize: "16px", display: "inline-block" }}
                  />
                )}
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
                      onClick={fetchPromptData}
                    >
                      <IconRepeat
                        style={{
                          width: "14px",
                          height: "14px",
                          marginRight: "5px",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Rewrite
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
                  >
                    {/* <IconCircleArrowRight /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="prompt-box-position">
        {/* Will receive an event from this component */}
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
              placeholder="Ask anything..."
              style={{
                width: "100%",
              }}
              onChange={(e: any) => setPromptString(e.target.value)}
              value={promptString}
              onKeyDown={getHotkeyHandler([["mod+Enter", handleSubmit]])}
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
                <Tooltip
                  position="right-start"
                  label="There is nothing to focus on other than your life. So smile..."
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
                      style={{
                        width: "14px",
                        height: "14px",
                        marginRight: "5px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Focus
                    </p>
                  </div>
                </Tooltip>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={fetchPromptData}
              >
                <IconCircleArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shapes-position">
        <Shapes />
      </div>
    </>
  );
}
