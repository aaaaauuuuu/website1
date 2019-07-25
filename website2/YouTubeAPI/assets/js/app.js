$(function(){
  //btnを押した時 
  $('#btn').on('click',function(){
    let searchword = $('#text').val();

    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        key:
        keyword: searchword,
        
      }
      
    }).done((data) => {
      console.log(data);
      $('results').empty();
    })
  })
})