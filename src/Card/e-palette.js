// Ten hierarchy categories

const colors = {
  Tier1: "#e30613",
  Tier2: "#fb8800",
  Tier3: "#fbb900",
  Tier4: "#ffe731",
  Tier5: "#63aa5a",
};

export default (score) => {
  switch (true) {
    case score > 1000:
      return colors.Tier5;
    case score > 500:
      return colors.Tier4;
    case score > 250:
      return colors.Tier3;
    case score > 100:
      return colors.Tier2;
    default:
      return colors.Tier1;
  }
};
