$(function () {
    // init coupled modal
    $('.coupled.modal').modal({
        allowMultiple: false
    });

    // open second modal on first modal buttons
    $('.feedback.modal').modal('attach events', '#firstModal-button');

    // click return button show return-modal(first)
    $('.ui.return.button').bind('click', function () {
        // 判斷是哪個按鈕
        // $(this).attr('id');
        console.log($(this));
        $('.return.modal').modal('show');

        // ajax send comment
        $.ajax({
            url: ".aspx",
            type: "POST",
            data: {
                'borrowerID': '借閱者ID',
                'bookerID': '被借閱者ID',
                'star': 'star-rate-value',
                'feedback': 'comment'
            },
            success: function (data) {
                // 評分完成後
                $('#return-complete-btn').bind('click', function () {
                    $('.return-complete.modal').modal('show');
                });
            },
            error: function() {
                // 錯誤
            }
        });

    });

    // rating init
    $('.ui.huge.star.rating').rating({
        initialRating: 3,
        maxRating: 5
    });

});
