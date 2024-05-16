import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showpo UK",
};

export default async function Page() {
  return (
    <Container>
      <h1>Showpo Storefront Home Page</h1>
    </Container>
  );
}
