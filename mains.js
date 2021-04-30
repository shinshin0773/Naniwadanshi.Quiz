'use strict';

{
  const question = document.getElementById('question');
  const  choices = document.getElementById('choices');
  const  btn = document.getElementById('btn');
  const coverbtn = document.getElementById('coverbtn');
  const  result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const h1Label = document.querySelector('#result > h1');
  const h2Label = document.querySelector('#result > h2');
  const questionShow = document.getElementById('questionShow');
  const startShow = document.getElementById('startshow');
  
  
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
  
  //何問目の問題か変数
  let currentNum = 0;

  //解答したかどうか確認
  let isAnsewerd;
  
  //スコアの変数
  let score = 0
  

  //選択肢をランダムにする関数
  function shuffle(arr) {
    for(let i = arr.length -1;i > 0;i--) {
      const j = Math.floor(Math.random()* (i+1));
      [arr[j],arr[i]]= [arr[i],arr[j]];
    }
    return arr;
  }

  //正誤判定処理の関数
  function checkAnswer(li) {

    //回答済だった場合は処理を止める
    if(isAnsewerd === true){
      return;
    }
    //解答しました
    isAnsewerd = true;
    
    //正解なら・不正解なら
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      score++;
    }else {
      if(score < 1){
        scoreLabel.textContent = `${score}点です`;
        h2Label.textContent = 'もう長尾担と名乗らないでください。';
        h1Label.textContent = 'あなたは長尾担当失格です。';
      }else if(score >=1 && score < 4){
        scoreLabel.textContent = `${score}点です`;
        h2Label.textContent = 'まだまだですね...';
        h1Label.textContent = 'あなたはもしや偽長尾担ですね？';
      }else if(score >=4 && score <7){
        scoreLabel.textContent = `${score}点です`;
        h2Label.textContent = 'ドンマイ！！平均的です！';
        h1Label.textContent = '長尾担に認定します！'
      } else if(score >=7 && score <10){
        scoreLabel.textContent = `${score}点です`;
        h2Label.textContent = 'あともう少しで長尾くんの彼氏認定されるのに・・・';
        h1Label.textContent = 'あなたは正真正銘の長尾担です！';
      };
      li.classList.add('wrong');
      result.classList.remove('hidden');
    }

    //解答した後にボタンをクリックしたらbtnが青くなる
    btn.classList.remove('disabled')
  }
  
  //画面（問題文,選択肢）表示する関数
  function setQuiz() {
    //解答していません
    isAnsewerd = false;

    //クイズ問題表示
    question.textContent = quizSet[currentNum].q;

    //choicesに最初の子要素がある場合はその要素を消す。を繰り返す
    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    //ランダムされた選択肢変数
     const shuffledChoices = shuffle([...quizSet[currentNum].c]);

    //クイズ選択肢表示
    shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click',() => {
          checkAnswer(li);
        })
        choices.appendChild(li);
    });

    //最後の問題まで行ったらbtnを「結果を見る」に変える
    if(currentNum === quizSet.length -1){
      btn.textContent = '結果を見る';
    }
  }

  setQuiz();

  btn.addEventListener('click',()=> {
    //ボタンをクリックしたときにdesabledクラスがついていたからクリックできないようにする
    if(btn.classList.contains('disabled')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn.classList.add('disabled');

    //「結果を見る」をクリックするとスコアを表示させる
    if(currentNum === 10){
      scoreLabel.textContent = `${quizSet.length}門中${score}点です`;
      h1Label.textContent = 'あなたを長尾の彼氏に認定します！';
      result.classList.remove('hidden');
    }else {
      currentNum++;
      setQuiz();
    }
  });
  
  //最初の画面を表示させる
  startShow.classList.remove('start');
  //ボタンstartを押したときの処理
  coverbtn.addEventListener('click',()=> {
    questionShow.classList.remove('question-text');
    startShow.classList.add('start');
    
  })
  

}