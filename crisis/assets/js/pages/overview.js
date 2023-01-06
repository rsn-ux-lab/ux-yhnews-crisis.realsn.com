{
  const $section = document.querySelector('[data-section="기사현황"]');
  const $btns = $section.querySelectorAll('.btn');
  const $chartDiv = $section.querySelector('.js-chart');

  // 버튼 액티브 이벤트 추가
  for (let i = 0; i < $btns.length; i++) $btns[i].addEventListener('click', btnClickActive);
  // 버튼 액티브 이벤트 함수
  function btnClickActive() {
    for (let i = 0; i < $btns.length; i++) {
      $btns[i].classList.remove('btn-news--is-active');
    }
    this.classList.add('btn-news--is-active');
  }

  // ------------------------------------------------------

  const ytnLineChart = new rsnCharts.YtnLineChart($chartDiv);

  let categorys = ['전체 기사량'];
  let datas = [
    {
      category: '1',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '2',
      'column-1': 312,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '3',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '4',
      'column-1': 512,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '5',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '6',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '7',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '8',
      'column-1': 312,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '9',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '10',
      'column-1': 512,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '11',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '12',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
  ];

  // ytnLineChart.reCategorying(categorys); // 카테고리만 변경시킬때
  ytnLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
}
{
  const $section = document.querySelector('[data-card="검색매체별추이"]');
  const $chartDiv = $section.querySelector('.js-chart');

  // ------------------------------------------------------

  const ytnLineChart = new rsnCharts.YtnLineChart($chartDiv);
  ytnLineChart.options = { legend: true };

  let categorys = ['전체', '트위터', '페이스북', '인스타그램'];
  let datas = [
    {
      category: '1',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '2',
      'column-1': 312,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '3',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '4',
      'column-1': 512,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '5',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '6',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '7',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '8',
      'column-1': 312,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '9',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '10',
      'column-1': 512,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '11',
      'column-1': 212,
      'column-2': 538,
      'column-3': 400,
    },
    {
      category: '12',
      'column-1': 112,
      'column-2': 538,
      'column-3': 400,
    },
  ];

  // ytnLineChart.reCategorying(categorys); // 카테고리만 변경시킬때
  ytnLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
}
{
  const $card = document.querySelector('[data-card="검색매체별점유율"]');
  const $chartDiv = $card.querySelector('.js-chart');

  // ------------------------------------------------------

  const ytnPieChart = new rsnCharts.YtnPieChart($chartDiv);

  let datas = [
    { category: '트위터', 'column-1': '67' },
    { category: '페이스북', 'column-1': '25' },
    { category: '인스타그램', 'column-1': '33' },
    { category: '카카오스토리', 'column-1': '10' },
    { category: '커뮤니티', 'column-1': '27' },
    { category: '블로그/포스트', 'column-1': '25' },
    { category: '정부/공공기관', 'column-1': '33' },
    { category: '기업/단체', 'column-1': '10' },
    { category: '유튜브', 'column-1': '33' },
  ];

  ytnPieChart.reDataBinding(datas); // 데이터 변경시킬때
  ytnPieChart.reColoring(['#CC0000', '#006633', '#6D0C9E', '#46A3A3', '#FF6D3D', '#666699', '#CC6699', '#33CC00', '#9966CC']); // 데이터 변경시킬때
}
