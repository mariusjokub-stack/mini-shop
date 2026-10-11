

interface WelcomeProps {
  vardas: string;
  miestas: string;
}

function Welcome({ vardas, miestas }: WelcomeProps) {
  return (
    <h3>
      Labas, {vardas}! Tu gyveni {miestas}.
    </h3>
  );
}

export default Welcome;

