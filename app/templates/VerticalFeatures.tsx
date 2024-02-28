import VerticalFeatureRow from "../components/feature/VerticalFeatureRow";

export default function VerticalFeatures() {
  return (
<>
      <VerticalFeatureRow
        title={"Planes Libre Elección"}
        description={"Atención con cualquier prestador. El porcentaje de bonificación será aplicado sobre el valor real de las prestaciones"}
        image={"/images/vertical/feature3.svg"}
      />
      
      <VerticalFeatureRow
        title={"Planes Preferentes"}
        description={"Atención preferencial en los prestadores establecidos en tu contrato, mejorando el porcentaje de bonificación en estos"}
        image={"/images/vertical/feature2.svg"}
        reversed
      />
      
      <VerticalFeatureRow
        title={"Planes Cerrados"}
        description={"Obtén cobertura en los establecimientos determinados en tu contrato"}
        image={"/images/vertical/feature.svg"}
      />
  </>);
}
