import { useState } from "react";
import AgeGate from "@/components/AgeGate";
import HubPage from "@/components/HubPage";

const Index = () => {
  const [verified, setVerified] = useState(false);

  if (!verified) {
    return (
      <AgeGate
        onAccept={() => setVerified(true)}
        onReject={() => window.location.href = "https://google.com"}
      />
    );
  }

  return <HubPage />;
};

export default Index;
