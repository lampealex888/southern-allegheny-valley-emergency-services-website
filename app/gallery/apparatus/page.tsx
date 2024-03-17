import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/info-sidebar";
import UnderConstruction from "@/components/under-construction";

export default function Apparatus() {
  return (
    <div className="bg-base-300 text-base-content">
      <Title>Apparatus</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
