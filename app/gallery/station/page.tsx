import Title from "@/components/title";
import Container from "@/components/container";
import UnderConstruction from "@/components/under-construction";

export default async function Station() {
  return (
    <div className="bg-base-300 text-base-content">
      <Title>Station</Title>
      <Container>
        <UnderConstruction />
      </Container>
    </div>
  );
}
