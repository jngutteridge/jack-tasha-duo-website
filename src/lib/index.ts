interface Occurrence {
  day: string;
  week: string;
}

export const eventsLinks = [
  {
    title: 'Grand Union Leicester open mic',
    href: '/events/grand-union-open-mic',
    imgSrc: 'jack-tasha-grand-union.jpg',
  },
  {
    title: 'Baton Rouge at Queens open mic',
    href: '/events/baton-rouge-queens-open-mic',
    imgSrc: 'jack-tasha-baton-rouge.jpg',
  },
];

export function getOccurrencesView(occurrences: Occurrence[]) {
  const occurrencesView: string[] = [];
  const now = new Date();
  const duration = 90;
  for (let currentDay = 0; currentDay < duration; currentDay += 1) {
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + currentDay);
    const currentWeekDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][currentDate.getDay()];
    const currentWeek = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][getWeekDayOfTheMonth(currentDate)];
    let last = false;
    if (currentDate.getMonth() !== (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7)).getMonth()) {
      last = true;
    }

    for (const occurrence of occurrences) {
      if (currentWeekDay === occurrence?.day && (currentWeek === occurrence.week || occurrence.week === 'last' && last || occurrence.week === 'every')) {
        occurrencesView.push(getFormattedDate(currentDate));
      }
    }
  }

  return occurrencesView;
}

function getWeekDayOfTheMonth(date: Date) {
  return Math.ceil((date.getDate()) / 7) - 1;
}

function getFormattedDate(currentDate: Date) {
  return [['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][currentDate.getDay()], currentDate.getDate(), ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][currentDate.getMonth()]].join(' ');
}
