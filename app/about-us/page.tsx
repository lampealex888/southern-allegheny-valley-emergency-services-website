import Title from "@/components/title";
import Container from "@/components/container";
import InfoSidebar from "@/components/info-sidebar";

export default function AboutUs() {
  return (
    <div className="bg-primary text-primary-content">
      <Title>About Us</Title>
      <Container>
        <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0 gap-8 min-h-screen my-8">
          <InfoSidebar />
          <div className="flex flex-col gap-4 pt-8">
            <p>
              Example Example Example Example Example Example Example Example
              Example Example Example Example Example Example
            </p>

            <p>
              Example Example Example Example Example Example Example Example
              Example Example Example Example Example Example
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
