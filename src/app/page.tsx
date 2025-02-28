
import { Footer } from "@/components/shared/Footer";
import { Programs } from "@/components/shared/Programs";
import { Title } from "@/components/ui/Title";
import { Wrapper } from "@/components/ui/Wrapper";


export default async function Home() {

  return (
    <Wrapper>
      <Title as="h1" textalign="center">Специализированные дисциплины</Title>
      <Programs />
      <Footer />
    </Wrapper>
  );
}
