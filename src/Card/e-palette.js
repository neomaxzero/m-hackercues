// Ten hierarchy categories

const colors = {
  Tier1: '#90A4AE',
  Tier2: '#E0E0E0',
  Tier3: '#A1887F',
  Tier4: '#FF8A65',
  Tier5: '#FFB74D',
  Tier6: '#FFD54F',
  Tier7: '#FFF176',
  Tier8: '#DCE775',
  Tier9: '#AED581',
  Tier10: '#81C784',
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
