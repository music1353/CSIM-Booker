$(function(){
    // click borrow button show borrow-modal(first)
    $('.ui.borrow.button').bind('click', function () {
        // 判斷是哪個按鈕
        // $(this).attr('id');
        console.log($(this));
        $('.borrow.modal').modal('show');
        
        // 確認借閱完成
        $('#borrowModal-button').bind('click', function(){
            console.log('借閱完成');
            $('.borrow-complete.modal').modal('show');
            
            // 重新整理網頁
        });
    });
});