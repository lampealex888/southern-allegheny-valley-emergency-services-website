import Title from "@/components/title";
import Container from "@/components/container";
import Calendar from "@/components/calendar";
import EventsSidebar from "@/components/events-sidebar";

export default function CommunityOutreach() {
  return (
    <div className="bg-accent text-accent-content">
      <Title>Community Outreach</Title>
      <Container>
        <div className="my-8">
          <EventsSidebar>
            <Calendar />
          </EventsSidebar>
        </div>
      </Container>
    </div>
  );
}
