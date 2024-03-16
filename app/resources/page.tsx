import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import UnderConstruction from "@/components/under-construction";

export default function Resources() {
  return (
    <div className="bg-accent text-accent-content">
      <Title>Resources</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
