import UnderConstruction from "@/components/under-construction";
import Container from "@/components/container";
import Title from "@/components/title";
import Sidebar from "@/components/sidebar";

export default function FireStations() {
  return (
    <div className="bg-primary text-primary-content">
      <Title>Fire Stations</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
