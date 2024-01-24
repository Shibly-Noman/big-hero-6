'use client'
import { Textarea } from "@mantine/core";
import {
  IconViewfinder,
  IconCircleArrowRight,
  IconRepeat,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import LinkCards from "@/components/LinkCard/LinkCards";


export default function Stream(data: any) {
  const [streamData, setStreamData] = useState(data);
  const [responseString, setResponseString] = useState(
    data
  );

  useEffect(() => {
    setStreamData(data);
    console.log('From stram', streamData);
  }, [data])

  return (
    <>
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
            border: "0px solid #DED0B6",
            borderRadius: "8px",
            padding: "14px",
            width: "40%",
          }}
          className="backdrop-blur-md bg-white/30"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              style={{
                borderRadius: "10px",
              }}
              className="mr-2 mb-4"
              height={250}
              width={250}
            />
            <div
              style={{
                height: "auto",
                width: "250px",
              }}
              className="mb-4"
            >
              <LinkCards />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <Skeleton
                className="mr-2"
                height={30}
                width={30}
                circle
                mb="xl"
              />
            </div>
            <TypeAnimation
              speed={75}
              sequence={[
                responseString,
                () => {
                  // console.log("Sequence completed"); event will update the state
                },
              ]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{ fontSize: "16px", display: "inline-block" }}
            />
          </div>
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
                <IconRepeat
                  style={{ width: "14px", height: "14px", marginRight: "5px" }}
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
      </div>
    </>
  );
}
