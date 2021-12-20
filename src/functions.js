export const handleHeaderText = (type) => {
    switch (type) {
        case 'hall':
            return 'зала';
        case 'film':
            return 'фильма';
        case 'session':
            return 'сеанса';
        default:
            return 'Что-то пошло не так';
    }
}

export const handleInputPlaceholder = (type) => {
    switch (type) {
        case 'hall':
            return 'Зал 1';
        case 'film':
            return 'Московская жара';
        case 'session':
            return 'сеанса';
        default:
            return 'Что-то пошло не так';
    }
}

export const handleSubmitText = (type) => {
    switch (type) {
        case 'hall':
            return 'зал';
        case 'film':
            return 'фильм';
        case 'session':
            return 'сеанс';
        default:
            return 'Что-то пошло не так';
    }
}
