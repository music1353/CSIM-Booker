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
            schoolID: {
                identifier: 'schoolID',
                rules: [{
                    type: 'empty',
                    prompt: '請輸入您的學號'
                }]
            },
            birthday: {
                identifier: 'birthday',
                rules: [{
                    type: 'empty',
                    prompt: '請輸入您的生日'
                }]
            },
            telephone: {
                rules: [
                    {
                        type: 'empty',
                        prompt: '請輸入您的手機'
                    },
                    {
                        type: 'regExp[/^09\d{2}-?\d{3}-?\d{3}$/]',
                        prompt: '請輸入正確的手機格式'
                    }
                ]
            },
        }
    });

    // TW telephone formate
    var cleave = new Cleave('.input-tel', {
        phone: true,
        phoneRegionCode: 'TW'
    });
});
