import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/info-sidebar";
import UnderConstruction from "@/components/under-construction";

export default function Resources() {
  return (
    <div className="bg-neutral text-neutral-content">
      <Title>Resources</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
