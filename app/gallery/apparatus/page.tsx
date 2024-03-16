import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import UnderConstruction from "@/components/under-construction";

export default function Apparatus() {
  return (
    <div className="bg-neutral text-neutral-content">
      <Title>Apparatus</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}