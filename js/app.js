// 발표자를 선정하는 함수
function makeLottoNumber(lottoNum, count) {
  let selectedNum = [];
  while (selectedNum.length < count) {
    let randomIndex = Math.floor(Math.random() * lottoNum.length);
    let num = lottoNum[randomIndex];
    if (!selectedNum.includes(num)) {
      selectedNum.push(num);
    }
  }
  return selectedNum;
}

// 로또 번호 생성을 위한 함수
function makeLottoNum() {
  // 로또 번호 배열 초기화-> makeLottoNumber 함수 사용
  var x = makeLottoNumber(lottoNum, 7);

  // 결과를 담기 위한 영역 호출
  const result = document.getElementById('ball-container');
  result.innerHTML = '';

  // 생성된 로또 번홀를 갖고 for문
  x.forEach((num, index) => {
    // 보너스 번호인 경우
    if (index === 6) {
      // 보너스 번호를 표시하기 위한 div 태그 생성 및 번호 표출
      var tmp = `<div class="bonus-ball">${num}</div>`;
    } else {
      var tmp = `<div class="ball">${num}</div>`;
    }
    result.innerHTML += tmp;
  });
  // 지난 회차 번호 확인하기 위한 영역 호출
  const afterPick = document.getElementById('after-pick');

  // 지난 회차 번호 확인하는 링크 생성
  afterPick.innerHTML =
    '<h2><a href="https://www.lotto.co.kr/article/list/AC01" target="blank">지난 회차 번호 확인하러가기</h2>';
}
