import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
];

export default function LinkCards(source: any) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      {images?.map((source: any, index: number) => (
        <div
          style={{
            height: "auto",
            width: "180px",
            marginRight: "10px",
          }}
          className="mb-4"
          key="index"
        >
          <Card
            withBorder
            shadow="sm"
            radius="md"
            style={{
              cursor: "pointer",
            }}
          >
            <Card.Section>
              <Image src={source} />
            </Card.Section>
            <Text mt="sm" c="dimmed" size="sm">
              <Text span inherit c="var(--mantine-color-anchor)">
                200+ images uploaded
              </Text>{" "}
              since last visit, review them to select which one...
            </Text>
          </Card>
        </div>
      ))}
    </div>
  );
}
