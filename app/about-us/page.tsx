import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";

export default function AboutUs() {
  return (
    <div className="bg-primary text-primary-content">
      <Title>About Us</Title>
      <Container>
        <Sidebar>
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
        </Sidebar>
      </Container>
    </div>
  );
}
