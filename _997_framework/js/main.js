jQuery(document).ready(function($) {
    var formModal = $('.user-modal'),
        formLogin = formModal.find('#login'),
        formSignup = formModal.find('#signup'),
        formForgotPassword = formModal.find('#reset-password'),
        formModalTab = $('.switcher'),
        tabLogin = formModalTab.children('li').eq(0).children('a'),
        tabSignup = formModalTab.children('li').eq(1).children('a'),
        forgotPasswordLink = formLogin.find('.form-bottom-message a'),
        backToLoginLink = formForgotPassword.find('.form-bottom-message a'),
        mainNav = $('.main-nav'),
        navRight = $('.nav'),
        password = $('#signup-password');
    passwordConfirm = $('#signup-password-confirm');




    //open sign-up form
    navRight.on('click', '.signup', signup_selected);
    //open login-form form
    navRight.on('click', '.login', login_selected);

    //close modal
    formModal.on('click', function(event) {
        if ($(event.target).is(formModal) || $(event.target).is('.close-form')) {
            formModal.removeClass('is-visible');
        }
    });
    //close modal when clicking the esc keyboard button
    $(document).keyup(function(event) {
        if (event.which == '27') {
            formModal.removeClass('is-visible');
        }
    });

    //switch from a tab to another
    formModalTab.on('click', function(event) {
        event.preventDefault();
        ($(event.target).is(tabLogin)) ? login_selected(): signup_selected();
    });

    //hide or show password
    // $('.hide-password').on('click', function(){
    // 	var togglePass= $(this),
    // 		passwordField = togglePass.prev('input');

    // 	( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
    // 	( '隱藏密碼' == togglePass.text() ) ? togglePass.text('顯示密碼') : togglePass.text('隱藏密碼');
    // 	//focus and move cursor to the end of input field
    // 	passwordField.putCursorAtEnd();
    // });

    //show forgot-password form 
    forgotPasswordLink.on('click', function(event) {
        event.preventDefault();
        forgot_password_selected();
    });

    //back to login from the forgot-password form
    backToLoginLink.on('click', function(event) {
        event.preventDefault();
        login_selected();
    });
    //註冊密碼不符合規則
    var rule = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]).{7,15}$/;
    password.on('keyup', function() {
        if (rule.test(password.val())) {
            password.next('span').removeClass('is-visible');
        } else {
            password.next('span').addClass('is-visible');
        }
    });

    //註冊確認密碼不一致
    passwordConfirm.on('keyup', this, password_different);


    //驗證畫面按確認後回到主畫面
    $('.confirm-button').on('click', function() {
        $('.confirm-success').toggleClass('is-visible');
    });

    function login_selected() {
        navRight.removeClass('is-visible');
        formModal.addClass('is-visible');
        formLogin.addClass('is-selected');
        formSignup.removeClass('is-selected');
        formForgotPassword.removeClass('is-selected');
        tabLogin.addClass('selected');
        tabSignup.removeClass('selected');
    }

    function signup_selected() {
        navRight.children('ul').removeClass('is-visible');
        formModal.addClass('is-visible');
        formLogin.removeClass('is-selected');
        formSignup.addClass('is-selected');
        formForgotPassword.removeClass('is-selected');
        tabLogin.removeClass('selected');
        tabSignup.addClass('selected');
    }

    function forgot_password_selected() {
        formLogin.removeClass('is-selected');
        formSignup.removeClass('is-selected');
        formForgotPassword.addClass('is-selected');
    }

    function password_different() {
        if ($('#signup-password').val() != passwordConfirm.val()) {

            passwordConfirm.next('span').addClass('is-visible');
        } else {
            passwordConfirm.next('span').removeClass('is-visible');
        }
    }


    // myJamEvent 收合
    var myJamEvent = $('.my-jam-event-title');
    var linkDiv = $('.my-jam-event-link');

    myJamEvent.on('mouseover', function() {
        myJamEvent.addClass('isopen');
        linkDiv.fadeIn("slow");
    })

    linkDiv.on('mouseleave', function() {
        myJamEvent.removeClass('isopen');
        linkDiv.fadeOut("slow");
    })



    //..........會員資料展開收合...........
    $('.abtbtn.show').on('click', function() {
        $('.profolio-about-me-defualt').hide();
        $('.profolio-about-me-show').show();
    })

    $('.abtbtn.hide').on('click', function() {
        $('.profolio-about-me-show').hide();
        $('.profolio-about-me-defualt').show();
    })
});
