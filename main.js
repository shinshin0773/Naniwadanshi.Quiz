'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const scoreText = document.querySelector('#result > h1');

  const quizSet = shuffle([
    {q: 'プロフィールで公開されている長尾謙杜の身長は？', c: ['１６６ｃｍ', '１６４ｃｍ', '１６７ｃｍ']},
    {q: '長尾謙杜の特技は次のうちどれ？', c: ['空手', 'フィンスイミング', 'ピアノ']},
    {q: '長尾謙杜が道枝駿佑と共に出演したドラマのタイトルは？', c: ['俺のスカートどこ行った', 'ごちそうさん', '教場']},
    {q: '長尾謙杜がライブ衣装を担当することになったきっかけは次のうちどれ',c:['なにわ男子のプロデューサーでもある関ジャニ∞の大倉忠義さんに「全員の衣装を考えてみたい」といったことから','なにわ男子のリーダー大橋和也に「衣装担当やってくれ」と頼まれたから。','有名スタイリストの西ゆりこさんにファッションセンスを認めてもらえたから']},
    {q: '長尾謙杜の好きなタイプは次のうちどれ',c:['明るく笑顔がかわいくて行動力のある人','ごはんをおいそうに食べる人','余裕があって落ち着いている人']},
    {q: '長尾謙杜は母親のことを何と呼ぶ？',c:['おかん','ママ','お母さん']},
    {q: '長尾謙杜と同期のなにわ男子のメンバーは？',c:['道枝駿佑','大西流星','西畑大吾']},
    {q: '長尾謙杜のメンバーカラーは？',c:['黄色','オレンジ','黄緑']},
    {q: '長尾謙杜が入所したころは何年生？',c:['小学六年生','小学五年生','中学一年生']},
    {q: '長尾謙杜の憧れの人物は？',c:['生田斗真','大橋和也','二宮和也']},

    
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
        scoreLabel.textContent = `${quizSet.length}門中 / ${score}点`;
        result.classList.remove('hidden');
        if(score < 3){
            scoreText.textContent = 'あなたは長尾謙杜担失格です';
        }else if(score < 6 && score >=3 ){
            scoreText.textContent = 'あなたは偽長尾担当です。';
        }else if(score <10 && score >=6){
            scoreText.textContent = 'あなたは正真正銘の長尾担です！！';
        }else {
            scoreText.textContent = 'あなたを長尾謙杜の彼女に認定します！！';
        };
    } else {
      currentNum++;
      setQuiz();
    }
  });
}