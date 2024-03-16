import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import UnderConstruction from "@/components/under-construction";

export default function Downloads() {
  return (
    <div className="bg-accent text-accent-content">
      <Title>Downloads</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
