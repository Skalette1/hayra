export type SearchItem = {
  id: string;
  title: string;
  path: string;
  content: string;
};

export const searchIndex: SearchItem[] = [
  {
    id: 'home',
    title: 'Главная',
    path: '/',
    content:
      'Хайра — благотворительная организация. Новости, программы помощи, отчеты, поддержать проект, контакты.',
  },
  {
    id: 'help-project',
    title: 'Поддержите наш проект',
    path: '/HelpProject',
    content:
      'Пожертвование, поддержка, Stripe интеграция, благотворительность, помощь нуждающимся.',
  },
  {
    id: 'get-help',
    title: 'Получить помощь',
    path: '/getHelp',
    content:
      'Программы помощи: продуктовая помощь Баракат, Бутик добра, Доктор Хайра, Свой дом, Я донор, Студент, Читай, Свое дело, Наши дети, Дерево в раю. Как написать в WhatsApp.',
  },
  {
    id: 'more-promotion',
    title: 'Дерево в Раю',
    path: '/morepromotion',
    content:
      'Посадка деревьев, улучшение климата, туристы, инвестиции, плодовые деревья, пожертвовать на саженцы.',
  },
  {
    id: 'financial-report',
    title: 'Финансовый отчет',
    path: '/financialreport',
    content:
      'Расходы организации, диаграммы, отчеты по годам, направления расходов, графики.',
  },
  {
    id: 'more-kindness',
    title: 'ТЕПЕРЬ ДОБРА БУДЕТ ЕЩЕ БОЛЬШЕ',
    path: '/placeholder-1',
    content:
      'Совместные сборы, помощь в беде, поддержка неимущих, координация добрых людей.',
  },
  {
    id: 'who-interferes',
    title: 'КТО МЕШАЕТ СДЕЛАТЬ ДОБРОЕ ДЕЛО?',
    path: '/placeholder-2',
    content:
      'Намерение и действие, пожертвование, перевод по QR-коду, изменения в банковских переводах.',
  },
  {
    id: 'be-volonteur',
    title: 'БУДЬ ВОЛОНТЕРОМ «ХАЙРА»',
    path: '/placeholder-3',
    content:
      'Волонтеры, участие в акциях, раздача продуктов, помощь детям-сиротам, фото и видео.',
  },
  {
    id: 'having-hope',
    title: 'НАДЕЖДА ЕСТЬ ДО ТЕХ ПОР, ПОКА ЕСТЬ ОТЗЫВЧИВЫЕ ЛЮДИ',
    path: '/placeholder-4',
    content:
      'Надежда, добрые люди, поддержка, благие дела, помощь ближним.',
  },
  {
    id: 'your-time',
    title: 'ТВОЁ ВРЕМЯ — ЧЬЯ-ТО НАДЕЖДА',
    path: '/placeholder-5',
    content:
      'Отзывчивые люди, волонтерство, поддержка, помощь, надежда.',
  },
  {
    id: 'support-partner',
    title: 'Стать партнером',
    path: '/support/finance',
    content:
      'Партнеры Добра, предприниматели, помощь семьям, консультации, добропиар, поддержка.',
  },
  {
    id: 'support-donor',
    title: 'Стать донором',
    path: '/support/BeDonor',
    content:
      'Доноры крови, профилактика организма, станции переливания, группы волонтеров, реципиенты.',
  },
  {
    id: 'support-volunteer',
    title: 'Стать волонтёром',
    path: '/support/volunteer',
    content:
      'Волонтерские акции, участие, координация, помощь нуждающимся.',
  },
  {
    id: 'support-tree',
    title: 'Дерево в Раю',
    path: '/support/tree',
    content:
      'Посадка деревьев, плодовые деревья, улучшение климата, саженцы, пожертвование.',
  },
  {
    id: 'footer-our-child',
    title: 'Наши дети',
    path: '/footer/ourchild',
    content:
      'Акция Наши дети, досуг детей-сирот, игровые зоны, экскурсии, подарки.',
  },
  {
    id: 'footer-products-poor',
    title: 'Продукты малоимущим',
    path: '/footer/productspoor',
    content:
      'Поддержка малообеспеченных семей продуктами, благотворительная программа.',
  },
  {
    id: 'footer-read',
    title: 'Читай',
    path: '/footer/read',
    content:
      'Проект Читай, бесплатные экземпляры Корана, посредник между добрыми людьми и нуждающимися.',
  },
  {
    id: 'footer-history',
    title: 'Наша история',
    path: '/footer/historyproject',
    content:
      'История проекта, как все начиналось, поддержка нуждающихся.',
  },
];

export function searchItems(query: string): SearchItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  const tokens = normalized.split(/[\s,.;:!?]+/).filter(Boolean);

  const scored = searchIndex
    .map((item) => {
      const haystack = (item.title + ' ' + item.content).toLowerCase();
      const matches = tokens.reduce((acc, t) => acc + (haystack.includes(t) ? 1 : 0), 0);
      const titleBoost = tokens.reduce((acc, t) => acc + (item.title.toLowerCase().includes(t) ? 1 : 0), 0);
      return { item, score: matches * 2 + titleBoost * 3 };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.item);

  return scored;
}


