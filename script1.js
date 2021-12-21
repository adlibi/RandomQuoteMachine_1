$(document).ready(function(){
    const quoteObj = {
        1: 'Build your own dreams, or someone else will hire you to build theirs.',
        2: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
        3: 'If you look at what you have in life, you\’ll always have more. If you look at what you don\’t have in life, you\’ll never have enough.',
        4: 'Certain things catch your eye, but pursue only those that capture the heart.',
        5: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
        6: 'You may be disappointed if you fail, but you are doomed if you don\’t try.',
        7: 'What\’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
        8: 'If you want to lift yourself up, lift up someone else.',
        9: 'Nothing is impossible, the word itself says, \'I\’m possible!\'',
        10: 'The battles that count aren\’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that\’s where it\’s at.'
    };
    const authObj = {
        1: '- Farrah Gray',
        2: '- Christopher Columbus',
        3: '- Oprah Winfrey',
        4: '- Ancient Indian Proverb',
        5: '- Anne Frank',
        6: '- Beverly Sills',
        7: '- Bob Dylan',
        8: '- Booker T. Washington',
        9: '- Audrey Heburn',
        10: '- Jesse Owens'
    };
    
    const colObj = {
        1 : '#62704d',
        2: '#53868b',
        3: '#8e635e',
        4: '#dbd8a7',
        5: '#50846e',
        6: '#c44961',
        7: '#c6e2ff',
        8: '#ffba00',
        9: '#f4a460',
        10:'#bcb88a'
    }

    let rnd = 5;
    let prevRnd = 5;
    
    const changeQuote = (num) => {
        $('#text').text(quoteObj[num]);
        $('#author').text(authObj[num]);
        $('section').css('background-color',colObj[num]);
        $('.fa-quote-left').css('color', colObj[num]);
        $('#text').css('color', colObj[num]);
        $('#author').css('color',colObj[num]);
        $('button').css('background-color',colObj[num]);
    }
    changeQuote(rnd);

    $('#new-quote').click(function(){
        do{rnd = (Math.floor(Math.random() * 10) + 1);} while(prevRnd === rnd);
        prevRnd = rnd;
        changeQuote(rnd);
    })
})
