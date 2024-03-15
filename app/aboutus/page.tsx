import PageTitle from "@/components/pageTitle";
import PageContainer from "@/components/pageContainer";
import Sidebar from "@/components/sidebar";

export default function History() {
  return (
    <div>
      <PageContainer>
        <PageTitle title="About Us" />

        <div className="flex">
          <div className="flex-grow">

            <p style={{ marginBottom: '16px' }}>
              Example Example Example Example Example Example Example Example Example Example Example Example Example Example
            </p>

            <p style={{ marginBottom: '16px' }}>
            Example Example Example Example Example Example Example Example Example Example Example Example Example Example
            </p>


          </div>

          <Sidebar />
        </div>
      </PageContainer>
    </div>
  );
}
