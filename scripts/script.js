$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
$('[name="tel-564"], [name="tel-565"]').mask("+38X 00 000 00 00", {
  placeholder: "+380  __  ___  __  __",
  clearIfNotMatch: true,
  translation: {X: {pattern: /0/, optional: false, fallback: '0'}}
});
    document.addEventListener('DOMContentLoaded', function () {
        const fieldsets = document.querySelectorAll('fieldset');
        const nextButtons = document.querySelectorAll('.next-button');

        nextButtons.forEach((button, index) => {
          const currentFieldset = fieldsets[index];
          const inputsInFieldset = currentFieldset.querySelectorAll('input, select, textarea');

          button.disabled = true; // Спочатку кнопка неактивна

          const checkButtonShow = () => {
            // Перевіряємо, чи всі поля заповнені
            const allInputsFilled = Array.from(inputsInFieldset).every((input) => input.value.trim() !== '');
            button.disabled = !allInputsFilled; // Активуємо кнопку, якщо всі поля заповнені
          };

          inputsInFieldset.forEach((input) => {
            input.addEventListener('input', () => {
              checkButtonShow();
            });
          });
          currentFieldset.addEventListener('click', (e) => {
            const target = e.target;
            if (target.tagName === 'LI') {
              checkButtonShow();
            }
          });
          button.addEventListener('click', function () {
            addActiveStep.call(this);
            // add
            fieldsets[index].style.display = 'none';
            fieldsets[index + 1].style.display = 'block';

            // Перевіряємо кнопку наступного блоку
            if (fieldsets[index + 1]) {
              const nextButton = fieldsets[index + 1].querySelector('.next-button');
              if (nextButton) {
                nextButton.disabled = true; // Робимо наступну кнопку неактивною
              }
            }
          });
        });
      });

      function addActiveStep() {
        if (window.innerWidth > 768) {
          const previousActive = document.querySelector('.step.active');
          previousActive.classList.remove('active');
        }
        const stepName = this.dataset.step;
        const stepItem = document.getElementById(stepName).closest('.step');
        stepItem.classList.add('active');
      }
