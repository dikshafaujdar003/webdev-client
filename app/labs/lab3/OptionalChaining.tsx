type House = {
  address?: { city?: string; zip?: string };
  garage?: { cars: number };
};

export default function OptionalChaining() {
  const house: House = { address: { city: "Roma" } };
  return (
    <div id="wd-optional-chaining">
      <h4>Optional chaining and nullish coalescing</h4>
      house.address?.city = {house.address?.city} <br />
      house.address?.zip ?? &quot;none&quot; = {house.address?.zip ?? "none"} <br />
      house.garage?.cars ?? 0 = {house.garage?.cars ?? 0}
      <hr />
    </div>
  );
}
