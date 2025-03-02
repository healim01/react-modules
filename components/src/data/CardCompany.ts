import { FunctionComponent, SVGAttributes } from 'react';
import BCCardLogo from '../assets/BC.svg?react';
import ShinHanCardLogo from '../assets/Shinhan.svg?react';
import KakaoBankLogo from '../assets/KakaoBank.svg?react';
import HyundaiLogo from '../assets/Hyundai.svg?react';
import WooriCardLogo from '../assets/Woori.svg?react';
import LotteCardLogo from '../assets/Lotte.svg?react';
import HanaCardLogo from '../assets/Hana.svg?react';
import KukminCardLogo from '../assets/Kukmin.svg?react';

export interface CardCompany {
  name: string;
  logo: FunctionComponent<SVGAttributes<SVGElement>>;
  id: number;
}

export const CARD_COMPANIES: CardCompany[] = [
  {
    name: 'BC카드',
    logo: BCCardLogo,
    id: 1,
  },
  {
    name: '신한카드',
    logo: ShinHanCardLogo,
    id: 2,
  },
  {
    name: '카카오뱅크',
    logo: KakaoBankLogo,
    id: 3,
  },
  {
    name: '현대카드',
    logo: HyundaiLogo,
    id: 4,
  },
  {
    name: '우리카드',
    logo: WooriCardLogo,
    id: 5,
  },
  {
    name: '롯데카드',
    logo: LotteCardLogo,
    id: 6,
  },
  {
    name: '하나카드',
    logo: HanaCardLogo,
    id: 7,
  },
  {
    name: '국민뱅크',
    logo: KukminCardLogo,
    id: 8,
  },
];
