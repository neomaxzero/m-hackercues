// Ten hierarchy categories

const colors = {
  Tier1: '#FFE0B2',
  Tier2: '#FFE0B2',
  Tier3: '#FFCC80',
  Tier4: '#FFB74D',
  Tier5: '#FFA726',
  Tier6: '#FF9800',
  Tier7: '#FB8C00',
  Tier8: '#F57C00',
  Tier9: '#EF6C00',
  Tier10: '#E65100',
};

export default score => {
  switch (true) {
    case score > 500:
      return colors.Tier10;
    case score > 250:
      return colors.Tier9;
    case score > 200:
      return colors.Tier8;
    case score > 150:
      return colors.Tier7;
    case score > 100:
      return colors.Tier6;
    case score > 50:
      return colors.Tier5;
    case score > 25:
      return colors.Tier4;
    case score > 15:
      return colors.Tier3;
    case score > 5:
      return colors.Tier2;
    case score > 0:
      return colors.Tier1;
    default:
      return colors.Tier1;
  }
};
