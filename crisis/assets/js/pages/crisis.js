console.log("crisis.js");

{
  const $section = document.querySelector('[data-section="기사현황"]');
  const $btns = $section.querySelectorAll(".btn");
  const $chartDiv = $section.querySelector(".js-chart-inner");

  // 버튼 액티브 이벤트 추가
  for (let i = 0; i < $btns.length; i++) $btns[i].addEventListener("click", btnClickActive);
  // 버튼 액티브 이벤트 함수
  function btnClickActive() {
    for (let i = 0; i < $btns.length; i++) {
      $btns[i].classList.remove("btn-news--is-active");
    }
    this.classList.add("btn-news--is-active");
  }

  // ------------------------------------------------------

  const ytnLineChart = new rsnCharts.YtnLineChart($chartDiv);
  ytnLineChart.options = {
    cateGridAlpha: 0,
    valueGridAlpha: 0,
  };
  let categorys = ["전체 기사량"];
  let datas = [
    {
      category: "1",
      "column-1": 112,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "2",
      "column-1": 312,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "3",
      "column-1": 212,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "4",
      "column-1": 512,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "5",
      "column-1": 212,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "6",
      "column-1": 112,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "7",
      "column-1": 112,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "8",
      "column-1": 312,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "9",
      "column-1": 212,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "10",
      "column-1": 512,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "11",
      "column-1": 212,
      "column-2": 538,
      "column-3": 400,
    },
    {
      category: "12",
      "column-1": 112,
      "column-2": 538,
      "column-3": 400,
    },
  ];

  ytnLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
  ytnLineChart.reColoring("#407AE8");
}
{
  const $section = document.querySelector('[data-card="검색매체별추이"]');
  const $chartDiv = $section.querySelector(".js-chart");

  // ------------------------------------------------------

  const ytnLineChart2 = new rsnCharts.YtnLineChart($chartDiv);
  ytnLineChart2.options = {
    legend: true,
    useGraphSettings: true,
  };
  let categorys = ["전체", "트위터", "페이스북", "인스타그램", "카카오스토리", "커뮤니티", "블로그/포스트", "정부/공공기관", "기업/단체", "유튜브"];
  let datas = [
    {
      category: "1",
      "column-1": 2112,
      "column-2": 538,
      "column-3": 123,
      "column-4": 321,
      "column-5": 242,
      "column-6": 555,
      "column-7": 333,
      "column-8": 444,
      "column-9": 242,
      "column-10": 552,
    },
    {
      category: "2",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "3",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "4",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "5",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "6",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "7",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "8",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "9",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "10",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "11",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
    {
      category: "12",
      "column-1": 2012,
      "column-2": 438,
      "column-3": 223,
      "column-4": 421,
      "column-5": 442,
      "column-6": 155,
      "column-7": 233,
      "column-8": 344,
      "column-9": 242,
      "column-10": 352,
    },
  ];

  ytnLineChart2.reDataBinding(datas, categorys); // 데이터 변경시킬때
  ytnLineChart2.reColoring(["#1946A3", "#CC0000", "#006633", "#6D0C9E", "#46A3A3", "#FF6D3D", "#666699", "#CC6699", "#33CC00", "#9966CC"]); // 컬러세팅
}
{
  const $card = document.querySelector('[data-card="검색매체별점유율"]');
  const $chartDiv = $card.querySelector(".js-chart");

  // ------------------------------------------------------

  const ytnPieChart = new rsnCharts.YtnPieChart($chartDiv);

  let datas = [
    { category: "트위터", "column-1": "67" },
    { category: "페이스북", "column-1": "25" },
    { category: "인스타그램", "column-1": "33" },
    { category: "카카오스토리", "column-1": "10" },
    { category: "커뮤니티", "column-1": "27" },
    { category: "블로그/포스트", "column-1": "25" },
    { category: "정부/공공기관", "column-1": "33" },
    { category: "기업/단체", "column-1": "10" },
    { category: "유튜브", "column-1": "33" },
  ];

  ytnPieChart.reDataBinding(datas); // 데이터 변경시킬때
  ytnPieChart.reColoring(["#CC0000", "#006633", "#6D0C9E", "#46A3A3", "#FF6D3D", "#666699", "#CC6699", "#33CC00", "#9966CC"]); // 컬러세팅
}
