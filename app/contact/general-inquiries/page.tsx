import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/info-sidebar";
import UnderConstruction from "@/components/under-construction";

export default function GeneralInquiries() {
  return (
    <div className="bg-base-content text-base-100">
      <Title>General Inquiries</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
