// Ustawienia API i importy
//Być może udało Ci się zauważyć, że w adresie podanym w metodzie .get używamy obiektu api – zapiszemy go sobie w pliku src/settings.js, aby tam przechowywać ustawienia naszej aplikacji. 
// Dzięki temu informacje takie jak adres API będą zapisane tylko w jednym miejscu i łatwo będzie je zmienić w razie potrzeby.

export const api = {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : '') + '/api',
    product: 'product',
    order: 'order',
    booking: 'booking',
    event: 'event',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  };