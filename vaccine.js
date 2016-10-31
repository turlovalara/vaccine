var data = [
 { interval: { hours: 24 }, age: 'Новорожденные (в первые 24 ч)', vaccine: '1-я вакцинация против гепатита В' },
 { interval: { days: 3 }, age: 'Новорожденные (3-7 дней)', vaccine: 'Вакцинация против туберкулеза' },
 { interval: { months: 1 }, age: 'Дети: 1 месяц', vaccine: '2-я вакцинация против гепатита В' },
 { interval: { years: 18 }, age: 'Взрослые от 18 лет', vaccine: 'Ревакцинация против дифтерии, столбняка — каждые 10 лет со времени последней ревакцинации' },
];

window.getVaccineHtml = function(date) {
  var date = moment(date);

  result = data.map(function(d) {
    return [
      '<td>' + date.add(d.interval).format('L') + '</td>',
      '<td>' + d.age + '</td>',
      '<td>' + d.vaccine + '</td>',
    ].join('');
  }).join('</tr><tr>');

  return $('<tr>' + result + '</tr>');
}
