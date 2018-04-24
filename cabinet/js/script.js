Vue.component('product-list', {
    props: ['id','img','name','shop','options','rating','like','published'],
    template: '<h1 class="test">{{ name }} {{ id }}</h1>'
});
var section = new Vue({
   el: "#section",
   data: {
       status : 1,
       filter: 0,
       createProduct: false,
       newProduct: {
         id: 0, img: '', price: 0, name: '', shop: '', options: 'в разработке', rating: 0, like: 0, published: false
       },
       newProductStatus: 1,
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
       categories: [
           { id: 1, published: true, illustration: 'img/categories/cat1.jpg', sectionName: 'Section1', sectionDescription:'section description, give short description about section', title: 'Category 1', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 2, published: true, illustration: 'img/categories/cat2.jpg', sectionName: 'Section name 2', sectionDescription:'section description, give short description about section', title: 'Category name', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 31, published: true, illustration: 'img/categories/cat3.jpg', sectionName: 'Section type 3', sectionDescription:'section description, give short description about section', title: 'Long category name', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 12, published: false, illustration: 'img/categories/cat4.jpg', sectionName: 'Test long name', sectionDescription:'section description, give short description about section', title: 'Short title', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 13, published: false, illustration: 'img/categories/cat5.jpg', sectionName: 'Section interesting name', sectionDescription:'section description, give short description about section', title: 'and title or name', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 22, published: true, illustration: 'img/categories/cat6.jpg', sectionName: 'Try long name 4', sectionDescription:'section description, give short description about section', title: 'Trying', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 11, published: true, illustration: 'img/categories/cat7.jpg', sectionName: 'Section first try 1', sectionDescription:'section description, give short description about section', title: 'Testing progress', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 8, published: true, illustration: 'img/categories/cat8.jpg', sectionName: 'Section simple', sectionDescription:'section description, give short description about section', title: 'Category are done', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 7, published: false, illustration: 'img/categories/cat2.jpg', sectionName: 'Good boot', sectionDescription:'section description, give short description about section', title: 'One more category', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 82, published: true, illustration: 'img/categories/cat3.jpg', sectionName: 'Pants for mans', sectionDescription:'section description, give short description about section', title: 'Clocks', description: 'Category description give as short description about category, and about its goods and maybe something else '},
           { id: 123, published: false, illustration: 'img/categories/cat7.jpg', sectionName: 'Iam a last for now', sectionDescription:'section description, give short description about section', title: 'Pants', description: 'Category description give as short description about category, and about its goods and maybe something else '},

       ],
       colors: [
           { id: 1, name: 'Red', code: 'red', published: true },
           { id: 2, name: 'Green', code: 'green', published: true },
           { id: 3, name: 'Black', code: 'black', published: false },
           { id: 4, name: 'Yellow', code: 'yellow', published: true }
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
       create: function(){
           this.createProduct = true;
         console.log('start');
       },
    }
});
