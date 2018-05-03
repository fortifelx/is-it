Vue.component('ckeditor', {
        template: `<div class="ckeditor"><textarea :id="id" :value="value"></textarea></div>`,
        props: {
            value: {
                type: String
            },
            id: {
                type: String,
                default: 'editor'
            },
            height: {
                type: String,
                default: '30vh',
            },
            toolbar: {
                type: Array,
                default: () => [
                ['Undo','Redo'],
                ['Bold','Italic','Strike'],
                ['NumberedList','BulletedList'],
                ['Cut','Copy','Paste'],
            ]
        },
        language: {
            type: String,
            default: 'ru'
        },
        extraplugins: {
            type: String,
            default: ''
        }
    },
    beforeUpdate () {
    const ckeditorId = this.id
    if (this.value !== CKEDITOR.instances[ckeditorId].getData()) {
        CKEDITOR.instances[ckeditorId].setData(this.value)
    }
},
mounted () {
    const ckeditorId = this.id
    console.log(this.value);
    const ckeditorConfig = {
        toolbar: this.toolbar,
        language: this.language,
        height: this.height,
        extraPlugins: this.extraplugins
    };
    CKEDITOR.replace(ckeditorId, ckeditorConfig);
    CKEDITOR.instances[ckeditorId].setData(this.value);
    CKEDITOR.instances[ckeditorId].on('change', () => {
        let ckeditorData = CKEDITOR.instances[ckeditorId].getData()
        if (ckeditorData !== this.value) {
        this.$emit('input', ckeditorData)
    };
})
},
destroyed () {
    const ckeditorId = this.id;
    if (CKEDITOR.instances[ckeditorId]) {
        CKEDITOR.instances[ckeditorId].destroy()
    }
}
});





var section = new Vue({
   el: "#section",
   data: {
       status : 2,
       filter: 0,
       activeSection: 1,
       createProductBlock: false,
       newOption: '',
       newProductStatus: 1,
       newProduct: {
         id: 0, img: false, price: 0, name: '', shop: '', brand:'', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 0, like: 0, published: false, deleted: false,
         colors: [3,4,5], sizes: [1,2,3], activeOptions: [1,2,3], description: '', categoryId: 22,
         sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223],
           images: [
             { id: 0, url: 'img/newProduct/black.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
             { id: 1, url: 'img/newProduct/balck2.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
             { id: 2, url: 'img/newProduct/black3.jpg', colors: [], sizes: [], options: [], published: true, deleted: false}
         ],
       },
       productTemplate: {
         id: 0, img: false, price: 0, name: '', shop: '', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 0, like: 0, published: false, deleted: false,
         colors: [1,2,3], sizes: [2,3,4], activeOptions: [1,2,3], description: '', categoryId: 22,
           sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223],
         images: [
             { id: 0, url: 'img/newProduct/black.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
             { id: 1, url: 'img/newProduct/balck2.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
             { id: 2, url: 'img/newProduct/black3.jpg', colors: [], sizes: [], options: [], published: true, deleted: false}
         ],
       },
       products : [
           { id: 1, img: 'img/goods/1.jpg', price: 600, sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223, 543], name: 'Комплект "ковбой"', description: '', categoryId: 6, brand:'Dolge Gabana', shop: 'Техас и джинсы', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 3, like: 223, published: true, colors: [2,3,4], sizes: [1,2,3,4], activeOptions: [0, 2, 3], images: [
                   { id: 0, url: 'img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 1, url: 'img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                   { id: 2, url: 'img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 3, url: 'img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                   { id: 4, url: 'img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                   { id: 5, url: 'img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                   { id: 6, url: 'img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                   { id: 7, url: 'img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                   { id: 8, url: 'img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
               ], deleted: false},
           { id: 21, img: 'img/goods/2.jpg', price: 1200, sizePrices: [100, 200, 345,,200], colorPrices: [0, 70,222], optionPrices: [0, 220,223], name: 'Кофта "плебей"', description: '', categoryId: 22, brand:'Green wave', shop: 'Техас и джинсы', optionsName: 'Пошив', options: ['slimFit', 'Regular', 'Huge'], rating: 3, like: 323, published: true, colors: [5,2,1], sizes: [3,4,6], activeOptions: [2, 0], images: [
                   { id: 0, url: 'img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 1, url: 'img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                   { id: 2, url: 'img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 3, url: 'img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                   { id: 4, url: 'img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                   { id: 5, url: 'img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                   { id: 6, url: 'img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                   { id: 7, url: 'img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                   { id: 8, url: 'img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
               ], deleted: true},
           { id: 32, img: 'img/goods/3.jpg', price: 900, sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223, 234], name: 'Штаны "Мачо"', description: '', categoryId: 5, brand:'Hugo Boss', shop: 'Мачо и Версачо', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 4, like: 263, published: false, colors: [3,2], sizes: [3,4,6,5], activeOptions: [1, 2, 3], images: [
                   { id: 0, url: 'img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 1, url: 'img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                   { id: 2, url: 'img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 3, url: 'img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                   { id: 4, url: 'img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                   { id: 5, url: 'img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                   { id: 6, url: 'img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                   { id: 7, url: 'img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                   { id: 8, url: 'img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
               ], deleted: false},
           { id: 43, img: 'img/goods/4.jpg', price: 1900, sizePrices: [100, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223], name: 'Ремень "Мачо"', description: '', categoryId: 9, brand:'Red type', shop: 'Техас и джинсы', optionsName: 'Пошив', options: ['slimFit', 'Regular', 'Huge'], rating: 2, like: 123, published: false, colors: [9,8,7], sizes: [2,6,5], activeOptions: [1, 2, 0], images: [
                   { id: 0, url: 'img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 1, url: 'img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                   { id: 2, url: 'img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 3, url: 'img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                   { id: 4, url: 'img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                   { id: 5, url: 'img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                   { id: 6, url: 'img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                   { id: 7, url: 'img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                   { id: 8, url: 'img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
               ], deleted: true},
           { id: 55, img: 'img/goods/5.jpg', price: 2200, sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222, 100], optionPrices: [0, 180,223], name: 'Топанки "Мачо"', description: '', categoryId: 31, brand:'Waykiki', shop: 'Техас и джинсы', optionsName: 'Пошив', options: ['slimFit', 'Regular', 'Huge'], rating: 5, like: 73, published: true, colors: [5,3,4], sizes: [2,6,5], activeOptions: [1, 2], images: [
                   { id: 0, url: 'img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 1, url: 'img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                   { id: 2, url: 'img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 3, url: 'img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                   { id: 4, url: 'img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                   { id: 5, url: 'img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                   { id: 6, url: 'img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                   { id: 7, url: 'img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                   { id: 8, url: 'img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
               ], deleted: true},
           { id: 63, img: 'img/goods/6.jpg', price: 1600, sizePrices: [100, 200, 345,,200], colorPrices: [0, 230,222], optionPrices: [0, 220,223], name: 'Туфли "Ляля"', description: '', categoryId: 33, brand:'Waykiki', shop: 'Ляля и Диля', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 3, like: 523, published: false, colors: [2,4,7], sizes: [3,4,6], activeOptions: [0, 1, 2, 3], images: [
                   { id: 0, url: 'img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 1, url: 'img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                   { id: 2, url: 'img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                   { id: 3, url: 'img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                   { id: 4, url: 'img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                   { id: 5, url: 'img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                   { id: 6, url: 'img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                   { id: 7, url: 'img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                   { id: 8, url: 'img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
               ], deleted: false}
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
           { id: 21, img: 'img/articles/size1.png', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 165, like: 92, shares: 12, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '22.03.2018'},
           { id: 22, img: 'img/articles/size3.jpg', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 165, like: 92, shares: 12, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '22.03.2018'},
           { id: 23, img: 'img/articles/size2.jpg', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 165, like: 92, shares: 12, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '22.03.2018'},
           { id: 28, img: 'img/articles/size3.jpg', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 165, like: 92, shares: 12, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '22.03.2018'}
       ],
       comments: [
           { id: 64, published: false, avatar: 'img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', productImg:'img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 124, productShop: 'Техас и джинсы', rating: 4, date: '28/06/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 63, published: true, avatar: 'img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', productImg:'img/goods/2.jpg', productName: 'Кофта "плебей"', productPrice: 120, productRating: 4, productLike: 224, productShop: 'Штаны и кофты', rating: 4, date: '21/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 122, published: true, avatar: 'img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'img/goods/3.jpg', productName: 'Штаны "Мачо"', productPrice: 500, productRating: 3, productLike: 510, productShop: 'Ляля и Диля', rating: 4, date: '12/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 61, published: true, avatar: 'img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', productImg:'img/goods/4.jpg', productName: 'Ремень "Мачо"', productPrice: 1600, productRating: 4, productLike: 92, productShop: 'Мачо и Версачо', rating: 4, date: '28/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 26, published: false, avatar: 'img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 2600, productRating: 5, productLike: 21, productShop: 'Мачо и Версачо', rating: 4, date: '21/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 164, published: false, avatar: 'img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', productImg:'img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 600, productRating: 5, productLike: 5, productShop: 'Техас и джинсы', rating: 4, date: '28/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 92, published: true, avatar: 'img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'img/goods/6.jpg', productName: 'Туфли "Ляля"', productPrice: 600, productRating: 2, productLike: 687, productShop: 'Ляля и Диля', rating: 4, date: '22/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
           { id: 36, published: true, avatar: 'img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', productImg:'img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 512, productShop: 'Техас и джинсы', rating: 4, date: '08/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
       ],
       sections: [
           { id: 1, published: true, description:'Одежда и обувь для женщин', title: 'Женщинам'},
           { id: 2, published: true, description:'Одежда и обувь для мужчин', title: 'Мужчинам'},
           { id: 3, published: true, description:'Все для детей и младенцев', title: 'Детям'},
           { id: 4, published: false, description:'section description, give short description about section', title: 'Аксесуары'},
           { id: 5, published: false, description:'Все для дома', title: 'Дом и быт'},
           { id: 6, published: true, description:'section description, give short description about section', title: 'Еда и напитки'},
           { id: 7, published: true, description:'section description, give short description about section', title: 'Украшения'},
       ],
       categories: [
           { id: 1, published: true, illustration: 'img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Верхняя одежда', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 2, published: true, illustration: 'img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Толстовки и худи', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 3, published: true, illustration: 'img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Свитеры', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 4, published: true, illustration: 'img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Топы и рубашки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 5, published: true, illustration: 'img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Платья', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 6, published: true, illustration: 'img/categories/cat2.jpg', sectionId: 5, sectionName: 'Дом и быт', sectionDescription:'Все для дома', title: 'Забота о себе', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 7, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Брюки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 8, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Свитеры', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 9, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Рубашки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 10, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Верхняя одежда', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 11, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Обувь', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 12, published: false, illustration: 'img/categories/cat4.jpg', sectionId: 5, sectionName: 'Дом и быт', sectionDescription:'Все для дома', title: 'Домашний декор', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 13, published: false, illustration: 'img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Сумки, рюкзаки и кошельки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 15, published: false, illustration: 'img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Головные уборы', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 16, published: false, illustration: 'img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Очки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 17, published: false, illustration: 'img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Ремни', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 18, published: false, illustration: 'img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Галстуки и запонки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 19, published: true, illustration: 'img/categories/cat6.jpg', sectionId: 7, sectionName: 'Украшения', sectionDescription:'section description, give short description about section', title: 'Колье', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 20, published: true, illustration: 'img/categories/cat6.jpg', sectionId: 7, sectionName: 'Украшения', sectionDescription:'section description, give short description about section', title: 'Кулоны и цепочки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 21, published: true, illustration: 'img/categories/cat6.jpg', sectionId: 7, sectionName: 'Украшения', sectionDescription:'section description, give short description about section', title: 'Чокеры', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 22, published: true, illustration: 'img/categories/cat7.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'section description, give short description about section', title: 'Юбки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 23, published: true, illustration: 'img/categories/cat8.jpg', sectionId: 6, sectionName: 'Еда и напитки', sectionDescription:'section description, give short description about section', title: 'Бакалея', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 24, published: true, illustration: 'img/categories/cat8.jpg', sectionId: 6, sectionName: 'Еда и напитки', sectionDescription:'section description, give short description about section', title: 'Сладости и снеки', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 25, published: true, illustration: 'img/categories/cat8.jpg', sectionId: 6, sectionName: 'Еда и напитки', sectionDescription:'section description, give short description about section', title: 'Масла, соусы и специи', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 26, published: false, illustration: 'img/categories/cat2.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Обувь для мальчиков', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 27, published: false, illustration: 'img/categories/cat2.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Обувь для мальчиков', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 28, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Наматрасники', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 29, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Аксесуары', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 30, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Одежда для девочек', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 31, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Одежда для младенцев', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 32, published: true, illustration: 'img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Одежда для мальчиков', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 33, published: false, illustration: 'img/categories/cat7.jpg', sectionId: 5, sectionName: 'Дом и быт', sectionDescription:'Все для дома', title: 'Аксесуары для електроники', description: 'Category description give as short description about category, and about its goods and maybe something else '},

       ],
       colors: [
           { id: 1, name: 'Red', code: 'red', categories: '', published: true },
           { id: 2, name: 'Green', code: 'green', published: true },
           { id: 3, name: 'Black', code: 'black', published: false },
           { id: 4, name: 'Purple', code: 'purple', published: false },
           { id: 5, name: 'Gray', code: 'grey', published: false },
           { id: 6, name: 'White', code: 'white', published: false },
           { id: 7, name: 'Blue', code: 'blue', published: false },
           { id: 8, name: 'Yellow', code: 'yellow', published: true },
           { id: 9, name: 'Brown', code: 'brown', published: true },
       ],
       sizes: [
           { id: 1, name: 'S', description: 'description for size', published: true },
           { id: 2, name: 'L', description: 'some description', published: true },
           { id: 3, name: 'XS', description: 'description' },
           { id: 4, name: 'SL', description: 'some description', published: true },
           { id: 5, name: 'XL', description: 'description for size', published: true },
           { id: 6, name: 'XXL', description: 'description', published: true }
       ]

   },
    methods: {
        addOption: function(){
            this.newProduct.options.push(this.newOption);
            this.newOption = '';
       },
        removeOption: function(e){
           var i = e.target.dataset.id;
           this.newProduct.options.splice(i, 1);
        },
        addSizeToProduct: function(){
            var sizes = this.$refs.new_product_size;
            this.newProduct.sizes.length = 0;
            for(var i = 0; i < sizes.length; i++){
                if(sizes[i].checked){
                    this.newProduct.sizes.push(sizes[i].value);
                    console.log(this.newProduct.sizePrices);
                }
            }
        },
        addColorToProduct: function(){
            var colors = this.$refs.new_product_color;
            this.newProduct.colors.length = 0;
            for(var i = 0; i < colors.length; i++){
                if(colors[i].checked){
                    this.newProduct.colors.push(colors[i].value);
                }
            }
        },
        addOptionToProduct: function(){
            var options = this.$refs.new_product_option;
            this.newProduct.activeOptions.length = 0;
            for(var i = 0; i < options.length; i++){
                if(options[i].checked){
                    this.newProduct.activeOptions.push(options[i].value);
                }
            }
        },
        previewThumbnail: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newProduct.img = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        showThumbnail: function(event) {
            var input = event.target;
            var reader = [];
            if (input.files && input.files[0]) {
                for(var i = 0; i <input.files.length; i++) {
                    reader[i] = new FileReader();
                    reader[i].readAsDataURL(input.files[i]);
                }
                var length = this.newProduct.images.length;
                var filesLength = input.files.length;
                var x = 0;
                var pictures = [];
                if(this.newProduct.images.length > 0) {
                    pictures = this.newProduct.images;
                }
                for(var i = length; i < filesLength + length; i++) {
                    var img = {};
                    img.id = i;
                    img.colors = [];
                    img.sizes = [];
                    img.options = [];
                    img.published = true;
                    img.deleted = false;
                    var vm = this;
                    pictures.push(img);
                    reader[x].onload = function(e) {
                        var y = 0;
                        for(var x = length; x < filesLength+length; x++){
                            pictures[x].url = reader[y].result;
                            vm.$set(vm.newProduct.images, x, pictures[x]);
                            y++;
                        }
                       // vm.newProduct.images = pictures;

                    };
                    x++;
                }
                };
        },
        updateProduct: function(product){
           console.log('send data to server');
        },
        deleteProduct: function(product){
           product.deleted = !product.deleted;
           this.updateProduct(product);
        },
        publishProduct: function(product){
           product.published = !product.published;
           this.updateProduct(product);
        },
        createProduct: function(){
           this.newProduct = this.productTemplate;
           this.createProductBlock = true;
        },
        changeProduct: function(product){
            this.newProduct = product;
            for(var i = 0; i < this.categories.length; i++){
                if(product.categoryId == this.categories[i].id){
                    this.activeSection = this.categories[i].sectionId;
                }
            }
            this.createProductBlock = true;
        },
        saveProduct: function(){
            this.updateProduct(this.newProduct);
            this.getProducts();
            this.createProductBlock = false;
        },
        getProducts: function(options){
            console.log('get product list');
        }

    },
    computed: {

    }
});
