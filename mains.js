'use strict';

{
  const question = document.getElementById('question');
  const  choices = document.getElementById('choices');
  const  btn = document.getElementById('btn');
  const coverbtn = document.getElementById('coverbtn');
  const  result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const h1Label = document.querySelector('#result > h1');
  const questionShow = document.getElementById('questionShow');
  const startShow = document.getElementById('startshow');
  const nextbtn2 = document.getElementById('nextbtn2');
  const nextbtn3 = document.getElementById('nextbtn3');
  const nextbtn4 = document.getElementById('nextbtn4');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const headH1 = document.getElementById('headh1');
  const headH2 = document.getElementById('headh2');
  const headH3 = document.getElementById('headh3');
  const headH4 = document.getElementById('headh4');
  const currentText = document.getElementById('currentNum');
  
  //三級の問題
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

  //準二級の問題
  const quizSet2 = shuffle2([
    {q: 'プロフィールで公開されている長尾謙杜の好きな食べ物は？', c: ['りんご', 'いちご', 'さんま']},
    {q: '長尾謙杜の担当は？', c: ['衣装', '運動', '年上']},
    {q: 'グループの中で何キャラ？', c: ['年下', '大人締め', 'リーダー']},
    {q: 'なにわ男子の曲は',c:['アオハル','夜空ノムコウ','モンスター']},
    {q: '長尾謙杜の好きな曲は？',c:['リアルフェイス','平成ジャンプ','elemald']},
    {q: '得意料理は？',c:['にくじゃが','人参炒め','ちゃーはん']},
    {q: '長尾謙杜ほくろは？',c:['ある','ない',' どちらでもない']},
    {q: '道枝駿介のメンバーカラーは',c:['ピンク','オレンジ','黄緑']},
    {q: '長尾クイズの創始者は？',c:['長澤','ロン','エメラル']},
    {q: '長尾謙杜の仲良しメンバーは？',c:['道枝駿介','大橋和也','二宮和也']},
  ]);

  //二級の問題文
  const quizSet3 = shuffle3([
    {q: '高橋恭平の身長は？', c: ['170', '165', '160']},
    {q: '西畑大悟の身長は？', c: ['165', '180', '170']},
    {q: '何キャラ？', c: ['年下', '大人締め', 'リーダー']},
    {q: 'なにわ男子のプロデューサーは？',c:['横山','井上','高橋']},
    {q: 'カンジュのメンバーは？',c:['嶋崎','猪狩','アポイント']},
    {q: '西村たくやの髪型は？',c:['耳かけ','アフロ','なすび']},
    {q: '長尾謙杜ほくろは？',c:['ある','ない',' どちらでもない']},
    {q: '長澤伸一郎の身長は？',c:['１６２','１８０','１９０']},
    {q: 'なにわ男子クイズの創設者は？',c:['長澤','ロン','エメラル']},
    {q: 'なにわ男子が好きな人なんという？',c:['なにふぁむ','かつん','スの担']},
  ]);
  
  //一級の問題
  const quizSet4 = shuffle4([
    {q: '関西ジュニアの先輩メンバーは？', c: ['末澤誠也', '西村拓哉', '斎藤佑樹']},
    {q: '大橋和也の身長は？', c: ['165', '180', '170']},
    {q: '高橋恭平はなにキャラ？', c: ['ナルシスト', '最年少', 'リーダー']},
    {q: '大橋和也のメンバーカラーは？',c:['緑','紫','ピンク']},
    {q: '元カンジュのメンバーは？',c:['浅倉','高橋優斗','流星']},
    {q: 'なにわ皇子のメンバーは？',c:['永瀬廉','高橋海人','作間流斗']},
    {q: '大西流星は何キャラ？',c:['かわいい','いかつい',' どちらでもない']},
    {q: '道枝駿介の身長は？',c:['１8２','１６０','１６５']},
    {q: 'なにわ男子の結成日は？',c:['2018年','2015年','2010年']},
    {q: 'なにきんのメンバーは？',c:['平野','大橋','井上']},
  ])
  //何問目の問題か変数
  let currentNum = 0;

  let currentNum2 = 0;

  let currentNum3 = 0;

  let currentNum4 = 0;
  //解答したかどうか確認
  let isAnsewerd;
  
  //スコアの変数
  let score = 0;

  //スコアの変数
  let score2 = 0;

  //スコアの変数
  let score3 = 0;
  
  //スコアの変数
  let score4 = 0;

  //選択肢をランダムにする関数
  function shuffle(arr) {
    for(let i = arr.length -1;i > 0;i--) {
      const j = Math.floor(Math.random()* (i+1));
      [arr[j],arr[i]]= [arr[i],arr[j]];
    }
    return arr;
  }

　//選択肢をランダムにする関数２
  function shuffle2(arr2) {
    for(let i = arr2.length -1;i > 0;i--) {
      const j = Math.floor(Math.random()* (i+1));
      [arr2[j],arr2[i]]= [arr2[i],arr2[j]];
    }
    return arr2;
  }
  //選択肢をランダムにする関数３
  function shuffle3(arr3) {
    for(let i = arr3.length -1;i > 0;i--) {
      const j = Math.floor(Math.random()* (i+1));
      [arr3[j],arr3[i]]= [arr3[i],arr3[j]];
    }
    return arr3;
  }
  //選択肢をランダムにする関数４
  function shuffle4(arr4) {
    for(let i = arr4.length -1;i > 0;i--) {
      const j = Math.floor(Math.random()* (i+1));
      [arr4[j],arr4[i]]= [arr4[i],arr4[j]];
    }
    return arr4;
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
          
          li.classList.add('wrong');

        }

        //解答した後にボタンをクリックしたらbtnが青くなる
        btn.classList.remove('disabled')
      }

  
        //正誤判定処理の関数2
        function checkAnswer2(li) {
          
          //回答済だった場合は処理を止める
          if(isAnsewerd === true){
            return;
        }
        //解答しました
        isAnsewerd = true;
        
        //正解なら・不正解なら
        if(li.textContent === quizSet2[currentNum2].c[0]){
          li.classList.add('correct');
          score2++;
        }else {
          nextbtn2.classList.add('nextstage2');
          li.classList.add('wrong');
        }
        
        //解答した後にボタンをクリックしたらbtnが青くなる
        btn2.classList.remove('disabled2');
      }

      //正誤判定処理の関数3
      function checkAnswer3(li) {

      //回答済だった場合は処理を止める
      if(isAnsewerd === true){
        return;
      }
      //解答しました
      isAnsewerd = true;
      
      //正解なら・不正解なら
      if(li.textContent === quizSet3[currentNum3].c[0]){
        li.classList.add('correct');
        score3++;
      }else {
        nextbtn3.classList.add('nextstage3');
        li.classList.add('wrong');
      }

      //解答した後にボタンをクリックしたらbtnが青くなる
      btn3.classList.remove('disabled3');
      }

    //正誤判定処理の関数4
    function checkAnswer4(li) {

        //回答済だった場合は処理を止める
        if(isAnsewerd === true){
          return;
        }
        //解答しました
        isAnsewerd = true;
        
        //正解なら・不正解なら
        if(li.textContent === quizSet4[currentNum4].c[0]){
          li.classList.add('correct');
          score4++;
        }else {
          nextbtn4.classList.add('nextstage4');
          li.classList.add('wrong');
        }
    
        //解答した後にボタンをクリックしたらbtnが青くなる
        btn4.classList.remove('disabled4');
    }
  

//画面（問題文,選択肢）表示する関数
function setQuiz() {
  //解答していません
    isAnsewerd = false;

    //クイズ問題表示
    question.textContent = quizSet[currentNum].q;

    //何問目か表示
    currentText.textContent = `${currentNum + 1}門目`;

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
    btn.classList.remove('btn1hidden');



    // //最後の問題まで行ったらbtnを「結果を見る」に変える
    if(currentNum === quizSet.length -1){
      btn.textContent = '結果を見る';
    }
  }

  setQuiz();

  function setQuiz2() {
    //解答していません
    isAnsewerd = false;

    //クイズ問題表示
    question.textContent = quizSet2[currentNum2].q;

   //何問目か表示
    currentText.textContent = `${currentNum2 + 1}門目`;
    //choicesに最初の子要素がある場合はその要素を消す。を繰り返す
    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    //ランダムされた選択肢変数
     const shuffledChoices = shuffle2([...quizSet2[currentNum2].c]);

    //クイズ選択肢表示
    shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click',() => {
          checkAnswer2(li);
        })
        choices.appendChild(li);
    });

    // //最後の問題まで行ったらbtnを「結果を見る」に変える
    if(currentNum2 === quizSet2.length -1){
      btn2.textContent = '結果を見る';
    }
  }

  
//画面（問題文,選択肢）表示する関数
function setQuiz3() {
  //解答していません
    isAnsewerd = false;

    //クイズ問題表示
    question.textContent = quizSet3[currentNum3].q;

    //何問目か表示
    currentText.textContent = `${currentNum3 + 1}門目`;

    //choicesに最初の子要素がある場合はその要素を消す。を繰り返す
    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    //ランダムされた選択肢変数
     const shuffledChoices = shuffle([...quizSet3[currentNum3].c]);

    //クイズ選択肢表示
    shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click',() => {
          checkAnswer3(li);
        })
        choices.appendChild(li);
    });

    // //最後の問題まで行ったらbtnを「結果を見る」に変える
    if(currentNum3 === quizSet3.length -1){
      btn3.textContent = '結果を見る';
    }
  }

  //画面（問題文,選択肢）表示する関数
function setQuiz4() {
  //解答していません
    isAnsewerd = false;

    //クイズ問題表示
    question.textContent = quizSet4[currentNum4].q;

    //何問目か表示
    currentText.textContent = `${currentNum4 + 1}門目`;

    //choicesに最初の子要素がある場合はその要素を消す。を繰り返す
    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    //ランダムされた選択肢変数
     const shuffledChoices = shuffle([...quizSet4[currentNum4].c]);

    //クイズ選択肢表示
    shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click',() => {
          checkAnswer4(li);
        })
        choices.appendChild(li);
    });

    // //最後の問題まで行ったらbtnを「結果を見る」に変える
    if(currentNum4 === quizSet4.length -1){
      btn4.textContent = '結果を見る';
    }
  }


  

  btn.addEventListener('click',()=> {
    //ボタンをクリックしたときにdesabledクラスがついていたからクリックできないようにする
    if(btn.classList.contains('disabled')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn.classList.add('disabled');

    //「結果を見る」をクリックするとスコアを表示させる
    if(currentNum === quizSet.length -1){
      if(score < 1){
      scoreLabel.textContent = `${quizSet.length}門中${score}点です`;
      h1Label.textContent = 'あなたは長尾担当失格です。';
        }else if(score >=1 && score < 4){
      scoreLabel.textContent = `${quizSet.length}門中${score}点です`;
      h1Label.textContent = 'あなたはもしや偽長尾担ですね？';
        }else if(score >=4 && score <7){
      scoreLabel.textContent = `${quizSet.length}門中${score}点です`;
      h1Label.textContent = 'あともう少しで準二級にすすめるのに・・・';
        }else {
        h1Label.textContent = 'おめでとうございます！準二級に進めます！';
        scoreLabel.textContent = `${quizSet.length}門中${score}点です`;
        nextbtn2.classList.remove('nextstage2');
      };
      result.classList.remove('hidden');
    }else {
      currentNum++;
      setQuiz();
    }
  });

  btn2.addEventListener('click',()=> {
    //ボタンをクリックしたときにdesabledクラスがついていたからクリックできないようにする
    if(btn2.classList.contains('disabled2')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn2.classList.add('disabled2');

    //「結果を見る」をクリックするとスコアを表示させる
    if(currentNum2 === quizSet2.length - 1){
      if(score2 < 1){
        scoreLabel.textContent = `${quizSet.length}門中${score2}点です`;
        h1Label.textContent = '勉強し直してください';
        nextbtn2.classList.add('nextstage2');
          }else if(score2 >=1 && score2 < 4){
        scoreLabel.textContent = `${quizSet.length}門中${score2}点です`;
        h1Label.textContent = '勉強し直してください';
        nextbtn2.classList.add('nextstage2');
          }else if(score2 >=4 && score2 <7){
        scoreLabel.textContent = `${quizSet.length}門中${score2}点です`;
        h1Label.textContent = 'もう少しで二級に進めるのに・・・';
        nextbtn2.classList.add('nextstage2');
          }else {
          h1Label.textContent = 'おめでとうございます！\n２級に進めます！';
          scoreLabel.textContent = `${quizSet2.length}門中${score2}点です`;
          nextbtn2.classList.add('nextbtn2');
          nextbtn3.classList.remove('nextstage3');
        };
        result.classList.remove('hidden');
      }else {
        currentNum2++;
        setQuiz2();
      }
  });
  
  btn3.addEventListener('click',()=> {
    //ボタンをクリックしたときにdesabledクラスがついていたからクリックできないようにする
    if(btn3.classList.contains('disabled3')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn3.classList.add('disabled3');

    //「結果を見る」をクリックするとスコアを表示させる
    if(currentNum3 === quizSet3.length - 1){
      if(score3 < 1){
        scoreLabel.textContent = `${quizSet.length}門中${score3}点です`;
        h1Label.textContent = '勉強して出直してください';
        nextbtn2.classList.add('nextstage2');
          }else if(score3 >=1 && score3 < 4){
        scoreLabel.textContent = `${quizSet.length}門中${score3}点です`;
        h1Label.textContent = '勉強して出直してください';
        nextbtn2.classList.add('nextstage2');
          }else if(score3 >=4 && score3 <7){
        scoreLabel.textContent = `${quizSet.length}門中${score3}点です`;
        h1Label.textContent = 'あともう少しで１級にすすめるのに・・・';
        nextbtn2.classList.add('nextstage2');
          }else {
          h1Label.textContent = 'おめでとうございます！１級に進めます！';
          scoreLabel.textContent = `${quizSet3.length}門中${score3}点です`;
          nextbtn3.classList.add('nextstage3');
          nextbtn4.classList.remove('nextstage4');
        };
        result.classList.remove('hidden');
      }else {
        currentNum3++;
        setQuiz3();
      }
  });

  btn4.addEventListener('click',()=> {
    //ボタンをクリックしたときにdesabledクラスがついていたからクリックできないようにする
    if(btn4.classList.contains('disabled4')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn4.classList.add('disabled4');

    //「結果を見る」をクリックするとスコアを表示させる
    if(currentNum4 === quizSet4.length - 1){
      if(score4 < 1){
        scoreLabel.textContent = `${quizSet.length}門中${score4}点です`;
        h1Label.textContent = 'あなたは長尾担当失格です。';
        nextbtn3.classList.add('nextstage3');
          }else if(score4 >=1 && score4 < 4){
        scoreLabel.textContent = `${quizSet.length}門中${score4}点です`;
        h1Label.textContent = 'あなたはもしや偽長尾担ですね？';
        nextbtn3.classList.add('nextstage3');
          }else if(score3 >=4 && score3 <7){
        scoreLabel.textContent = `${quizSet.length}門中${score4}点です`;
        h1Label.textContent = 'あともう少しで１級合格にできるのに・・・';
        nextbtn3.classList.add('nextstage3');
          }else {
          h1Label.textContent = 'おめでとうございます！なにわ男子検定一級合格です！';
          scoreLabel.textContent = `${quizSet4.length}門中${score4}点です`;
          nextbtn3.classList.add('nextstage3');
          // nextbtn4.classList.remove('nextstage4');
        };
        result.classList.remove('hidden');
      }else {
        currentNum4++;
        setQuiz4();
      }
  });
  //最初の画面を表示させる
  startShow.classList.remove('start');
  //ボタンstartを押したときの処理
  coverbtn.addEventListener('click',()=> {
    questionShow.classList.remove('question-text');
    startShow.classList.add('start');
    //三級ですを表示させる。
    headH1.classList.remove('headH1');
    currentText.classList.remove('current');
  });

  //次のステージに進みますか？をクリックした時
  nextbtn2.addEventListener('click',()=> {
    console.log('click');
    result.classList.add('hidden');
    setQuiz2();
    btn2.classList.remove('btn2hidden');
    btn.classList.add('btn1hidden');
    //三級表示を停止して二級の文字を表示させる
    headH1.classList.add('headH1');
    headH2.classList.remove('headH2');
    //ボタンをクリックしたときにdesabledクラスがついていたからクリックできないようにする
    if(btn.classList.contains('disabled')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn.classList.add('disabled');
  });
  
  //次のステージに進みますか？をクリックした時 二級に進む
  nextbtn3.addEventListener('click',()=> {
    btn2.classList.add('btn2hidden');
    btn3.classList.remove('btn3hidden');
    console.log('click');
    result.classList.add('hidden');
    setQuiz3();
    //２級表示を停止して準二級の文字を削除させる
    headH2.classList.add('headH2');
    headH3.classList.remove('headH3');
    //ボタンをクリックしたときにdesabled3クラスがついていたからクリックできないようにする
    if(btn3.classList.contains('disabled3')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn3.classList.add('disabled3');
  });

  nextbtn4.addEventListener('click',()=> {
    btn3.classList.add('btn3hidden');
    btn4.classList.remove('btn4hidden');
    console.log('click');
    result.classList.add('hidden');
    setQuiz4();
    //２級表示を停止して準二級の文字を削除させる
    headH3.classList.add('headH3');
    headH4.classList.remove('headH4');
    //ボタンをクリックしたときにdesabled3クラスがついていたからクリックできないようにする
    if(btn4.classList.contains('disabled4')){
      return;
    }
    //ボタンがクリックされたらdisabledクラスをつけてグレーにする
    btn4.classList.add('disabled4');
  });
}
