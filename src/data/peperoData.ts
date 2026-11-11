export interface PeperoItem {
  id: string;
  name: string;
  englishName: string;
  icon: string;
  color: string;
  stickColor: string;
  coatingColor: string;
  toppings?: string;
  accentColor: string;
  title: string;
  psych: string;
  tags: string[];
  tea: string;
  teaEng: string;
  teaCategory: '홍차' | '허브티' | '녹차' | '밀크티 / 블렌딩';
  teaIcon: string;
  teaColor: string;
  teaDesc: string;
  flavorNotes: {
    sweetness: number; // 1-5
    body: number; // 1-5
    aroma: number; // 1-5
    refreshing: number; // 1-5
  };
  brewing: {
    temp: string;
    leaf: string;
    water: string;
    time: string;
  };
  pairingTip: string;
  bestChemistry: {
    peperoName: string;
    reason: string;
  };
}

export const PEPERO_DATA: PeperoItem[] = [
  {
    id: 'original',
    name: '오리지널 초코',
    englishName: 'Original Chocolate',
    icon: '🍫',
    color: '#6F3A22',
    stickColor: '#DDB075',
    coatingColor: '#4A2311',
    accentColor: '#D8695C',
    title: '"솔직하고 담백한 순수파"',
    psych: '꾸밈없이 솔직한 성격의 소유자입니다. 복잡한 것보다는 기본에 충실하며, 인간관계에서도 계산 없이 진심으로 사람을 대하는 것을 가장 중요하게 생각합니다. 묵묵하지만 든든한 존재감을 발휘합니다.',
    tags: ['#기본에충실', '#담백한진심', '#신뢰의아이콘', '#순수파'],
    tea: '제니스 오후홍차',
    teaEng: 'JennisTea Afternoon Tea',
    teaCategory: '홍차',
    teaIcon: '☕',
    teaColor: '#A75D3A',
    teaDesc: '깔끔하고 깊은 한국홍차와 아쌈이 만나 초콜릿의 단맛을 싹 잡아주고 질리지 않고 계속 들어가게 도와주는 최적의 바디감!',
    flavorNotes: {
      sweetness: 2,
      body: 4,
      aroma: 4,
      refreshing: 3,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '초콜릿 한입 물고 따뜻한 오후홍차를 한 모금 넘기면 코끝으로 올라오는 몰트향과 카카오의 진한 풍미가 환상적으로 녹아듭니다.',
    bestChemistry: {
      peperoName: '화이트/초코쿠키',
      reason: '기본의 담백함과 쿠키의 다채로운 식감이 만나 서로의 단점을 보완해주는 천생연분!'
    }
  },
  {
    id: 'almond',
    name: '아몬드',
    englishName: 'Almond Crunch',
    icon: '🥜',
    color: '#8A5832',
    stickColor: '#E2B77D',
    coatingColor: '#532D15',
    toppings: 'nuts',
    accentColor: '#D38048',
    title: '"따뜻하고 배려심 넘치는 다정파"',
    psych: '달콤함에 고소한 아몬드가 듬뿍 더해진 것처럼 주변 사람들을 살뜰히 챙기는 따뜻한 마음씨를 가졌습니다. 타인의 감정을 섬세하게 읽어내며 언제나 편안하고 든든한 쉼터가 되어주는 분위기 케어러입니다.',
    tags: ['#다정다감', '#인간난로', '#센스있는배려', '#분위기메이커'],
    tea: '로즈베리그레이',
    teaEng: 'JennisTea Roseberry Grey',
    teaCategory: '홍차',
    teaIcon: '🌹',
    teaColor: '#C4526B',
    teaDesc: '상큼한 베리와 장미향이 아몬드의 고소함과 만나 입안 가득 디저트 뷔페에 온 듯한 풍성함을 선사합니다.',
    flavorNotes: {
      sweetness: 3,
      body: 3,
      aroma: 5,
      refreshing: 4,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '장미와 베리의 화사한 향이 볶은 아몬드의 고소한 너티함을 부드럽게 감싸주어 고급스러운 파리지앵 티타임을 완성합니다.',
    bestChemistry: {
      peperoName: '솔티바닐라',
      reason: '고소한 다정함과 단짠의 위트가 어우러져 매일 대화해도 지루할 틈이 없는 조합!'
    }
  },
  {
    id: 'crunky',
    name: '크런키',
    englishName: 'Crunky Crisp',
    icon: '⚡',
    color: '#5E3E28',
    stickColor: '#DFB377',
    coatingColor: '#4F2E1B',
    toppings: 'crisp',
    accentColor: '#E68A00',
    title: '"톡톡 튀는 개성 만점 호기심파"',
    psych: '늘 새로운 자극과 재미를 추구하며 트렌드에 민감합니다. 평범하고 지루한 일상보다는 신나고 색다른 경험을 좋아하며 주변에 늘 활기와 웃음을 전파하는 파티의 주인공입니다.',
    tags: ['#트렌드세터', '#반짝이는아이디어', '#호기심천국', '#에너지뿜뿜'],
    tea: '부케인더가든',
    teaEng: 'JennisTea Bouquet in the Garden',
    teaCategory: '홍차',
    teaIcon: '💐',
    teaColor: '#E07A5F',
    teaDesc: '화사한 꽃향기가 가득한 홍차로, 바삭하고 톡톡 튀는 크런키 식감에 다채로운 향미를 더해줍니다.',
    flavorNotes: {
      sweetness: 2,
      body: 3,
      aroma: 5,
      refreshing: 4,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '바사삭 씹히는 몰트 퍼프의 경쾌한 소리와 함께 입안에 퍼지는 봄 정원의 꽃내음이 기분을 즉각 끌어올립니다.',
    bestChemistry: {
      peperoName: '스트로베리',
      reason: '상큼 발랄함과 톡톡 튀는 에너지가 시너지를 일으켜 세상에서 제일 신나는 듀오!'
    }
  },
  {
    id: 'dark',
    name: '초코필드 (다크)',
    englishName: 'Dark Chocolate Field',
    icon: '🖤',
    color: '#2B1B17',
    stickColor: '#CFA36B',
    coatingColor: '#1F130E',
    accentColor: '#6B4F4F',
    title: '"깊은 감성의 묵직한 아티스트파"',
    psych: '진한 카카오처럼 감정이 깊고 생각이 사려 깊은 타입입니다. 겉은 다소 시크하고 묵직해 보일 수 있지만 내면에는 따뜻하고 예술적인 정성을 품고 있는 매력적인 사람입니다.',
    tags: ['#감성장인', '#진중함', '#내면의깊이', '#시크한반전'],
    tea: '바닐라그레이',
    teaEng: 'JennisTea Vanilla Grey',
    teaCategory: '홍차',
    teaIcon: '✨',
    teaColor: '#7C5C43',
    teaDesc: '은은하고 부드러운 바닐라 향이 다크 초콜릿의 쌉싸름함과 어울려 고급스러운 아인슈페너 같은 풍미를 만들어냅니다.',
    flavorNotes: {
      sweetness: 2,
      body: 5,
      aroma: 4,
      refreshing: 2,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '다크 초코의 짙은 카카오 닙스 쓴맛을 바닐라 그레이의 크리미한 향이 실크처럼 부드럽게 감싸 안아줍니다.',
    bestChemistry: {
      peperoName: '말차',
      reason: '깊은 카카오와 차분한 녹차의 만남, 조용히 서로의 영혼을 이해하는 힐링 케미!'
    }
  },
  {
    id: 'salty',
    name: '솔티바닐라',
    englishName: 'Salty Vanilla',
    icon: '🧂',
    color: '#E8D2A6',
    stickColor: '#DFC094',
    coatingColor: '#F5E6CC',
    toppings: 'salt',
    accentColor: '#DCA259',
    title: '"단짠단짠 반전 매력파"',
    psych: '알수록 진국인 반전 매력! 겉보기엔 깔끔하고 얌전해 보이지만, 대화할수록 예측불허의 유머와 깊은 속정을 뽐내어 누구든 단숨에 매료시키는 마성의 소유자입니다.',
    tags: ['#단짠매력', '#위트폭발', '#출구없는매력', '#반전남녀'],
    tea: '펌킨라떼',
    teaEng: 'JennisTea Pumpkin Latte Tea',
    teaCategory: '밀크티 / 블렌딩',
    teaIcon: '🎃',
    teaColor: '#D97724',
    teaDesc: '늙은 호박 베이스의 군고구마 향미 밀크티로, 솔티바닐라의 단짠 조합에 구수하고 부드러운 맛을 더해줍니다.',
    flavorNotes: {
      sweetness: 4,
      body: 4,
      aroma: 4,
      refreshing: 2,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '짭조름한 소금 결정과 달콤한 바닐라 크림 뒤로 밀려오는 늙은 호박의 구수한 곡물향이 완벽한 위로를 선물합니다.',
    bestChemistry: {
      peperoName: '오리지널 초코',
      reason: '통통 튀는 반전 매력과 클래식한 순수함의 밸런스가 기가 막힌 궁합!'
    }
  },
  {
    id: 'matcha',
    name: '말차',
    englishName: 'Matcha Green',
    icon: '🍃',
    color: '#4F6F52',
    stickColor: '#D8B682',
    coatingColor: '#53704C',
    accentColor: '#3E5C3B',
    title: '"마음의 평정을 찾는 힐링파"',
    psych: '차분하고 맑은 감성을 가지고 있으며, 바쁘고 복잡한 세상 속에서도 자신만의 평온한 오아시스를 가꿀 줄 아는 푸르른 숲 같은 사람입니다. 곁에 있는 사람까지 편안하게 해줍니다.',
    tags: ['#이너피스', '#숲속휴식', '#자연주의', '#마인드케어'],
    tea: '포레스트민트',
    teaEng: 'JennisTea Forest Mint',
    teaCategory: '허브티',
    teaIcon: '🌿',
    teaColor: '#3A7D61',
    teaDesc: '오후 소화에 좋은 민트 베이스 허브티로 답답할 때 머리가 맑아지는 숲속 향기를 그대로 전달합니다.',
    flavorNotes: {
      sweetness: 1,
      body: 2,
      aroma: 5,
      refreshing: 5,
    },
    brewing: {
      temp: '95°C',
      leaf: '2g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '말차의 은은한 쌉싸름함 뒤에 시원하고 상쾌한 민트 허브의 바람이 지나가며 복잡했던 머릿속이 말끔히 정돈됩니다.',
    bestChemistry: {
      peperoName: '누드 크림치즈',
      reason: '담백한 크림치즈의 깊은 맛과 상쾌한 허브/말차의 만남으로 편안한 힐링 메이트 완성!'
    }
  },
  {
    id: 'strawberry',
    name: '스트로베리',
    englishName: 'Sweet Strawberry',
    icon: '🍓',
    color: '#D85C7A',
    stickColor: '#E4BF88',
    coatingColor: '#E66B88',
    toppings: 'berry_dots',
    accentColor: '#E84A5F',
    title: '"사랑스럽고 생기 넘치는 에너자이저"',
    psych: '새콤달콤한 딸기 향처럼 바라보기만 해도 주변을 환하게 밝혀주는 비타민 같은 에너지를 지녔습니다. 긍정적인 생각과 밝은 미소로 어두운 방에도 햇살을 비춰주는 사랑둥이입니다.',
    tags: ['#인간비타민', '#사랑둥이', '#러블리', '#긍정에너지'],
    tea: '굿모닝애플망고',
    teaEng: 'JennisTea Good Morning Apple Mango',
    teaCategory: '허브티',
    teaIcon: '🥭',
    teaColor: '#E58E26',
    teaDesc: '새콤달콤한 과일 향미로 붓기 완화와 아침 리프레시에 제격인 허브티로 생기를 더욱 업시켜 줍니다.',
    flavorNotes: {
      sweetness: 4,
      body: 2,
      aroma: 5,
      refreshing: 5,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '딸기 초코의 달콤상큼한 맛과 망고·사과의 트로피컬 향미가 만나 입안 가득 과즙 파티가 터집니다.',
    bestChemistry: {
      peperoName: '크런키',
      reason: '둘이 모이면 웃음이 멈추지 않는 마성의 비타민 폭탄 시너지!'
    }
  },
  {
    id: 'cookie',
    name: '화이트/초코쿠키',
    englishName: 'Cookies & Cream',
    icon: '🍪',
    color: '#3C3B3D',
    stickColor: '#E6C697',
    coatingColor: '#F2EDE4',
    toppings: 'black_cookie',
    accentColor: '#3F4E4F',
    title: '"식감과 다채로운 향미의 맛잘알러"',
    psych: '다채로운 토핑을 즐기듯 일상의 다양한 맛과 즐거움을 적극적으로 탐색하는 센스만점 기획자 타입입니다. 소소한 디테일을 캐치하는 눈썰미가 뛰어나며 삶을 풍요롭게 꾸밀 줄 압니다.',
    tags: ['#맛잘알', '#트렌드감별사', '#디테일장인', '#풍요로운취향'],
    tea: '체리초코그린',
    teaEng: 'JennisTea Cherry Choco Green',
    teaCategory: '녹차',
    teaIcon: '🍒',
    teaColor: '#587A54',
    teaDesc: '체리초코케이크 느낌의 풍부한 녹차로 쿠키의 바삭함과 입안에서 케이크처럼 어우러집니다.',
    flavorNotes: {
      sweetness: 3,
      body: 3,
      aroma: 5,
      refreshing: 3,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '바삭한 쿠키 크런치에 체리초코그린이 더해지면 마치 호텔 베이커리의 고급 포레누아 케이크를 먹는 기분!',
    bestChemistry: {
      peperoName: '아몬드',
      reason: '고소함과 크런치함의 극대화! 감각적인 디저트 러버들의 최애 조합.'
    }
  },
  {
    id: 'nude',
    name: '누드 크림치즈',
    englishName: 'Nude Cream Cheese',
    icon: '🧀',
    color: '#C68B59',
    stickColor: '#DFB075',
    coatingColor: '#F5E4BE',
    accentColor: '#C47C35',
    title: '"알수록 진국인 외유내강형"',
    psych: '겉보기엔 담백하고 튀지 않아 보이지만, 속에는 진하고 부드러운 치즈처럼 깊은 생각과 단단한 신념을 품고 있는 외유내강형입니다. 한 번 맺은 인연을 소중하고 깊게 챙깁니다.',
    tags: ['#외유내강', '#알수록진국', '#따뜻한내면', '#든든한의리'],
    tea: '베리굿루이',
    teaEng: 'JennisTea Berry Good Rooi',
    teaCategory: '허브티',
    teaIcon: '🫐',
    teaColor: '#8C3B56',
    teaDesc: '베리우디 향미의 밤 전용 허브티로 카페인 없이 숙면과 심신 안정을 도와 부드러운 크림치즈와 완벽한 조화를 이룹니다.',
    flavorNotes: {
      sweetness: 3,
      body: 3,
      aroma: 4,
      refreshing: 3,
    },
    brewing: {
      temp: '95°C',
      leaf: '3g',
      water: '300ml',
      time: '3분',
    },
    pairingTip: '누드 스틱 안쪽의 크림치즈 풍미가 루이보스의 은은한 우디향과 달콤한 베리 향에 스며들어 포근한 잠자리를 약속합니다.',
    bestChemistry: {
      peperoName: '초코필드 (다크)',
      reason: '부드러운 크림치즈와 묵직한 카카오의 환상적인 하모니!'
    }
  }
];
