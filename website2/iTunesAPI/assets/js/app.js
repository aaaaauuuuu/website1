$(function() {

    // カードの雛形
    let cardTemplate = null;

  // card.htmlを読み込む
  $.get('card.html', function(temp) {
    cardTemplate = $(temp);
  })

  $('#search-btn').on('click', function() {
    // 検索ボタンがクリックされたら
    
    // 検索ワードを取得する
    let searchword = $('#search-word').val();

    // itunesに曲の検索をしに行く(Ajax)

    $.ajax({
      // データの通信をするところ
      url: 'https://itunes.apple.com/search', // 通信先URL
      type: 'GET',  // GET送信 or POST送信
      dataType: 'jsonp', // 検索結果の形式
      data: {
        term: searchword,
        country: 'jp',
      }
    }).done( (data) => {
      // 通信成功した時
      // CDの画像
      $('#result').empty();

      for (item of data.results) {
        // 画像のパス
        let imgPath = item.artworkUrl100;

        // CDタイトル
        let collectionName = item.collectionName;

        // iTunesのリンク
        let collectionViewUrl = item.collectionViewUrl;

        // 変数にテンプレートのクローンを入れる
        let card = cardTemplate.clone();

        // クローンを#resultに追加する
        $('#result').append(card);

        // クローンにタイトルなど設定
        card.find('img').attr('src',imgPath);
        card.find('h5').text(collectionName);
        card.find('a').attr('href',collectionViewUrl);

        
        $('#result').append(cardTemplate);
        

      }

    }).fail((error) => {
      // 通信失敗した時
      console.log(error);
    })

  })

})

// media: 'music',
// let previewUrl = item.previewUrl;
// card.find('video').attr('src',previewUrl);