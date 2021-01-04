import {
  cardsProfileListMock,
  cardsListMock,
} from '../components/lists/card-list-view/card-list-view.mock';

// export interface sectionInterface {
//   title:
//   description:
//   backgroundColor:
//   backgroundUrl:
//   cards:
//   button:

// }

export const getSectionItemsQuery = (): Array<any> => [
  {
    type: 'section-head',
    id: 'home',
    title: 'Supera te stesso e supererai il mondo',
    bodyContent:
      'Non soffocare la tua ispirazione e la tua immaginazione, non diventare lo schiavo del tuo modello',
    buttonValue: 'VIEW MORE',
    isSelected: true,
  },
  {
    type: 'section-body',
    id: 'members',
    title: 'Chi Siamo',
    bodyContent:
      "RainbowTech nasce da un gruppo di amici che condividono la passione per l'informatica e la voglia di sperimentare nuove tecnologie con l'obiettivo di apprendere e migliorare nuove competenze",
    cards: cardsProfileListMock,
    isSelected: false,
  },
  {
    type: 'section-body',
    id: 'portfolio',
    title: 'portfolio',
    bodyContent:
      "C'è vero progresso solo quando i vantaggi di una nuova tecnologia diventano per tutti",
    cards: cardsListMock,
    isSelected: false,
  },
  {
    type: 'section-body',
    id: 'blog',
    title: 'blog',
    bodyContent:
      'Il maggior piacere nel fare qualcosa di nuovo sta nel pensiero di poterlo condividere',
    cards: cardsListMock,
    isSelected: false,
  },
];

// = graphql`
// {
//   allStrapiArticle {
//     edges {
//       node {
//         id
//       }
//     }
//   }
// }
// `
