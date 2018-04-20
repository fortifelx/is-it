Vue.component('product-list', {
    props: ['id','img','name','shop','options','rating','like','published'],
    template: '<h1 class="test">{{ name }} {{ id }}</h1>'
});
var section = new Vue({
   el: "#section",
   data: {
       status : 5,
       products : [
           { id: 1, img: 'img/goods/1.jpg', price: 600, name: 'Комплект "ковбой"', shop: 'Техас и джинсы', options: 'в разработке', rating: 3, like: 223, published: true},
           { id: 2, img: 'img/goods/2.jpg', price: 1200, name: 'Кофта "плебей"', shop: 'Техас и джинсы', options: 'в разработке', rating: 3, like: 323, published: true},
           { id: 3, img: 'img/goods/3.jpg', price: 900, name: 'Штаны "Мачо"', shop: 'Мачо и Версачо', options: 'в разработке', rating: 4, like: 263, published: false},
           { id: 4, img: 'img/goods/4.jpg', price: 1900, name: 'Ремень "Мачо"', shop: 'Техас и джинсы', options: 'в разработке', rating: 2, like: 123, published: false},
           { id: 5, img: 'img/goods/5.jpg', price: 2200, name: 'Топанки "Мачо"', shop: 'Техас и джинсы', options: 'в разработке', rating: 5, like: 73, published: true},
           { id: 6, img: 'img/goods/6.jpg', price: 1600, name: 'Туфли "Ляля"', shop: 'Ляля и Диля', options: 'в разработке', rating: 3, like: 523, published: false}
       ],
       shops : [
           { id: 1, name: 'Техас и понты', goods: 167, allow_goods: 200,
               description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
               'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!',
               sales: 131, instagram: 'В разработке',
               published: true,
               contacts: 'nelia.belorus@gmail.com <br> +7 987 698 32 10 <br>+7 987 654 32 22'},
           { id: 12, name: 'Штаны и кофты', goods: 118, allow_goods: 120,
               description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
               'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!',
               sales: 232, instagram: 'В разработке',
               published: false,
               contacts: 'fortifelx@gmail.com <br> +7 890 654 32 10 <br>+7 917 654 32 10'},
           { id: 18, name: 'Понты и джинсы', goods: 43, allow_goods: 100,
               description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
               'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!',
               sales: 30, instagram: 'В разработке',
               published: true,
               contacts: 'nelia.belorus@gmail.com <br> +7 987 654 32 10 <br>+7 927 234 32 10'},
           { id: 21, name: 'Ляля и Даля', goods: 156, allow_goods: 500,
               description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
               'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!',
               sales: 73, instagram: 'В разработке',
               published: false,
               contacts: 'aagrich@gmail.com <br> +7 987 654 32 10 <br>+7 987 354 32 10'},
           { id: 22, name: 'Аосртиментос', goods: 289, allow_goods: 1000,
               description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
               'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!',
               sales: 112, instagram: 'В разработке',
               published: true,
               contacts: 'nelia.belorus@gmail.com <br> +7 987 484 72 10 <br>+7 987 654 32 99'},

       ],
       users: [
           { id: 244, banned: false, avatar: 'img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', comments: 23, favorites: 9, purchases: 8, email: 'fortifelx@gmail.com', contacts: 'не указано'},
           { id: 221, banned: false, avatar: 'img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', comments: 3, favorites: 13, purchases: 12, email: 'temposte@gmail.com', contacts: 'не указано'},
           { id: 132, banned: true, avatar: 'img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', comments: 17, favorites: 2, purchases: 11, email: 'agrich@gmail.com', contacts: 'не указано'},
           { id: 132, banned: true, avatar: 'img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', comments: 7, favorites: 2, purchases: 11, email: 'kalatay@mail.ru', contacts: 'не указано'},
           { id: 132, banned: false, avatar: 'img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', comments: 1, favorites: 4, purchases: 2, email: 'elena@mail.ru', contacts: 'не указано'},
           { id: 132, banned: true, avatar: 'img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', comments: 0, favorites: 0, purchases: 1, email: 'oksana@gmail.com', contacts: 'не указано'},
       ],
       articles: [
           { id: 21, img: '', published: true, title: 'Как подобрать платье по размерной таблице', description: '', content:'', views: 165, like: 92, shares: 12, tags:'', create_date: '19.03.2018', published_date: '22.03.2018'}
       ],
   }
});
