/**
 * Анимация прокрутки
 */

class Animation {

    /**
     * @param {object} elem     - элемент, конечная позиция
     * @param {number} indent   - отступ от конечной позиции (необязательный)
     * @param {number} duration - время прокрутки (необязательный)
     * @return void
     */

    scroll(elem, indent, duration) {
        // Если отступ не указан или указан не правильно то он равен 0
        indent = typeof indent == 'number' ? indent : 0;
        // Если время прокрутки не указано или указано не правильно то оно равно 400мс
        duration = typeof duration == 'number' ? duration : 400;

        let startPos = document.documentElement.scrollTop || document.body.scrollTop,
            finishPos = elem ? elem.getBoundingClientRect().top + pageYOffset - indent : 0,
            diffPos = finishPos - startPos,
            startTime = new Date().getTime(),
            finishTime = startTime + duration;

        let anim = setInterval( () => {
            let currentTime = new Date().getTime(),
                newPos;

            if (currentTime >= finishTime) {
                newPos = finishPos;
                clearInterval(anim);
            } else {
                let diffTime = finishTime - currentTime,
                    diffPrc =  diffTime / duration;
                newPos = finishPos - (diffPos * diffPrc);
            }

            window.scrollTo(0, newPos);
        },10);

    }
};

export default new Animation;