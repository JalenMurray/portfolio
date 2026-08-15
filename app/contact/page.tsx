import Nav from "@/components/Nav";
import ContactPanel from "@/components/panels/ContactPanel";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "480px", margin: "0 auto", padding: "40px 20px" }}>
        <ContactPanel />
      </main>
    </>
  );
}
