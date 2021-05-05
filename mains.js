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
    {q: 'なにわ男子の結成年は？', c: ['２０１８年', '２０１７年', '２０１９年']},
    {q: 'なにわ男子のリーダーは？', c: ['大橋和也', '藤原丈一郎', '西畑大吾']},
    {q: '高橋恭平はグループの中で何キャラ？', c: ['ナルシスト', '最年少', 'わがまま']},
    {q: '西畑大吾の誕生日は？',c:['１月９日','8月７日','１月１０日']},
    {q: '２０２１年春から始まったなにわ男子レギュラーの番組名は？',c:['まだアプデしてないの?','なにわからAぇ! 風吹かせましょう!','なにわ男子と一流姉さん']},
    {q: '入所が同期のメンバー道枝駿佑、長尾謙杜あと一人はだれ',c:['高橋恭平','大西流星','西畑大吾']},
    {q: '西畑大吾と藤原丈一郎の二人のコンビはなんと呼ばれている？',c:['エンドレス','西原コンビ','藤畑コンビ']},
    {q: '長尾謙杜のメンバーカラーは？',c:['黄色','オレンジ','黄緑']},
    {q: '道枝駿介のメンバーカラーは',c:['ピンク','オレンジ','黄緑']},
    {q: 'なにわ男子の最年少はだれ？',c:['長尾謙杜','大橋和也','道枝駿佑']},
  ]);

  //準二級の問題
  const quizSet2 = shuffle2([
    {q: 'グループ初の全国ツアーの名前は？', c: ['〜なにわと一緒に#アオハルしよ?〜', 'Kansai Johnny s DREAM PAVILION 〜Shall we #AOHARU?〜', '～全国ツアーしちゃってもいいですかっ!?～｣']},
    {q: '現在女子高生などの間で流行しているなにわ男子の大西流星が考案したポーズは？', c: ['ちゅきちゅきポーズ', '低空ピース', '顎ピース']},
    {q: '長尾謙杜が道枝駿佑と共に出演したドラマのタイトルは？', c: ['俺のスカートどこ行った', 'ごちそうさん', '教場']},
    {q: 'なにわ初のオリジナル曲は？',c:['なにわLucky boy','ダイヤモンドスマイル','僕空']},
    {q: 'なにわ男子のメンバーの藤原丈一郎の呼び名は？',c:['丈くん','丈さん','藤原くん']},
    {q: 'プロフィールに記載されている高橋恭平の特技はバスケともう一つは？',c:['ローラースケート','料理','ボーリング']},
    {q: 'なにわ男子のファンの名称はなんという？',c:['なにふぁむ','らぶふぁむ','なに担']},
    {q: '道枝駿介の入所日は？',c:['１１月２３日','５月２３日','８月３日']},
    {q: 'なにわ男子の中でドラマ「母になる」に出演していた人は誰？',c:['道枝駿介','西畑大吾','大西流星']},
    {q: 'なにわ男子が初めてテレビＣＭに単独出演することになったお菓子のＣＭは？',c:['ハイチュウ','ぷっちょ','ダース']},
  ]);

  //二級の問題文
  const quizSet3 = shuffle3([
    {q: 'Soda Pop Loveのセンターは？', c: ['大西流星', '大橋和也', '道枝駿介']},
    {q: '西畑大吾の身長は？', c: ['１６７ｃｍ', '１７０ｃｍ', '１６４ｃｍ']},
    {q: 'なにわ男子がレギュラーで出ているキャストは何曜日？', c: ['水曜日', '月曜日', '火曜日']},
    {q: 'なにわ男子をプロデューサーしたのは？',c:['横山祐','村上信五','メリー喜多川']},
    {q: '西畑大吾と同期はこのうちだれ？',c:['永瀬廉','平野紫耀','末澤誠也']},
    {q: '高橋恭平が初めて髪の毛染めたときの色は何色？',c:['茶色','ミルクテー','シルバー']},
    {q: '大西流星の愛猫の名前は？',c:['トキ','ナコ','フォールド']},
    {q: 'なにわ皇子、西畑大吾と大西流星あと一人はだれ',c:['永瀬廉','向井康二','大橋和也']},
    {q: '道枝駿佑の血液型は？',c:['Ｏ型','Ａ型','ＡＢ型']},
    {q: '長尾謙杜ほくろの位置は？',c:['右の顎下','人中の右','左の顎下']},
  ]);
  
  //一級の問題
  const quizSet4 = shuffle4([
    {q: '夕暮れマンデーズ（西畑×長尾）になった由来は', c: ['とれ関でサイトでコンビ名を決めたことから', '夕暮れが好きな二人だから', 'ハッピーマンデーズにちなんで']},
    {q: 'ラジラーサンデーに出演しているなにわ男子ですがともに出演している関ジュ先輩は？', c: ['浜中文一', '室龍太', '濱田崇裕']},
    {q: 'なにわTubeでの罰ゲームスゴロク大西流星がタンクトップになりましたが、その罰ゲームを考えたのは？', c: ['長尾謙杜', '高橋恭平', '大橋和也']},
    {q: '道枝駿佑のマイブームは？',c:['ドローン','料理','ファッション']},
    {q: '道枝駿介の入所のきっかけともなった憧れの先輩は？',c:['山田涼介','山下智久','近藤真彦']},
    {q: 'なにわtubeでの企画会議で「道長卒業式」を考案したメンバーは誰？',c:['大西流星', '藤原丈一郎', '大橋和也']},
    {q: '2Fasedの歌詞での問題です。「あどけない笑顔から()真顔まで」の括弧の中に入る歌詞は？',c:['艶めいた','端正な','端麗な']},
    {q: '道枝駿介は２匹イヌを飼っている「ラデュレ」もう一匹のイヌの名前はなに？',c:['アール','チップ','マカロン']},
    {q: 'メンズ校で大橋和也が演じた役名は？',c:['藤木一郎','源田新','桃井天']},
    {q: '西畑大吾がドラマ「ごちそうさん」で演じた役名は？',c:['西門活男','東門活男','南門活男']},
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
          h1Label.classList.add('yellow');
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
