import Nav from "@/components/Nav";
import AboutPanel from "@/components/panels/AboutPanel";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px" }}>
        <AboutPanel />
      </main>
    </>
  );
}
