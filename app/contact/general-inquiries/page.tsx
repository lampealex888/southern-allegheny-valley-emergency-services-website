import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import UnderConstruction from "@/components/under-construction";

export default function GeneralInquiries() {
  return (
    <div className="bg-success text-success-content">
      <Title>General Inquiries</Title>
      <Container>
        <Sidebar>
          <UnderConstruction />
        </Sidebar>
      </Container>
    </div>
  );
}
