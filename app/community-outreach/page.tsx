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
          <div className="flex flex-col md:flex-row mb-6 md:mb-0 gap-8">
            <EventsSidebar />
            <div className="hidden xl:block text-base-content bg-neutral p-4 rounded-xl w-full border">
              <Calendar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
