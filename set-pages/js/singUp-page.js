$(function () {
    // wow init
    new WOW().init();

    // select-gender-dropdown
    $('#select-gender-dropdown').dropdown({
        onChange: function (val) {
            if (val == 'male') {
                $('#choose-img-fields').html(
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb1" name="chooseImg">' +
                    '<label for="cb1"><img src="images/temp-signUp-img/boy-1.png"></label>' +
                    '</div>' +
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb2" name="chooseImg">' +
                    '<label for="cb2"><img src="images/temp-signUp-img/boy-2.png"></label>' +
                    '</div>' +
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb3" name="chooseImg">' +
                    '<label for="cb3"><img src="images/temp-signUp-img/boy-3.png"></label>' +
                    '</div>' +
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb4" name="chooseImg">' +
                    '<label for="cb4"><img src="images/temp-signUp-img/boy-4.png"></label>' +
                    '</div>'
                );
            } else if (val == 'female') {
                $('#choose-img-fields').html(
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb1" name="chooseImg">' +
                    '<label for="cb1"><img src="images/temp-signUp-img/girl-1.png"></label>' +
                    '</div>' +
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb2" name="chooseImg">' +
                    '<label for="cb2"><img src="images/temp-signUp-img/girl-2.png"></label>' +
                    '</div>' +
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb3" name="chooseImg">' +
                    '<label for="cb3"><img src="images/temp-signUp-img/girl-3.png"></label>' +
                    '</div>' +
                    '<div class="four wide field wow rubberBand">' +
                    '<input type="radio" id="cb4" name="chooseImg">' +
                    '<label for="cb4"><img src="images/temp-signUp-img/girl-4.png"></label>' +
                    '</div>'
                );
            }
        }
    });

    //ui.form
    $('.ui.form').form({
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'empty',
                    prompt: '請輸入您的名字'
                }]
            },
            gender: {
                identifier: 'gender',
                rules: [{
                    type: 'empty',
                    prompt: '請選擇您的性別'
                }]
            },
            account: {
                identifier: 'account',
                rules: [{
                    type: 'empty',
                    prompt: '請輸入您的學號'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: '請輸入您的密碼'
                }]
            },
            confirmPassword: {
                identifier: 'confirmPassword',
                rules: [{
                    type: 'empty',
                    prompt: '請再次確認您的密碼'
                }]
            }
        }
    });

    // TW telephone formate
    var cleave = new Cleave('.input-tel', {
        phone: true,
        phoneRegionCode: 'TW'
    });
});
