document.addEventListener('DOMContentLoaded', () => {
    const menu_items = document.querySelectorAll('.menu_item'),
          menu_list = document.querySelector('.menu_items'),
          container = document.querySelector('.container');

    let items = [];
    class menu{
        constructor(img,name,coast,descr,type){
            this.img = img;
            this.name = name;
            this.coast = coast;
            this.descr = descr;
            this.type = type;
        }
    }
    function clearMenuList(){
        document.querySelectorAll('.menu_item').forEach(element => {
            element.remove();
        });
    }
    function showItems(selector,all){
        if(!all){
            items.forEach(item => {
                if(item.type == selector){
                    menu_list.innerHTML += `
                    <div class="menu_item">
                    <img src="${item.img}">
                    <div class="menu_item_info">
                      <div class="name_coast">
                        <h3>${item.name}</h3>
                        <span>${item.coast}₽</span>
                      </div>
                      <hr>
                      <p>${item.descr}</p>
                    </div>
                  </div>
                    `;
                }
            });
        }else{
            items.forEach(item => {
                menu_list.innerHTML += `
                <div class="menu_item">
                <img src="${item.img}">
                <div class="menu_item_info">
                    <div class="name_coast">
                    <h3>${item.name}</h3>
                    <span>${item.coast}₽</span>
                    </div>
                    <hr>
                    <p>${item.descr}</p>
                </div>
                </div>
                `;
            });
        }  
    }
    function initMenu(){
        items[0] = new menu('img/1.jpg','Вырезка говядины на гриле',300,'С соусом порто на блинчике с булгуром и грибами','lunch');
        items[1] = new menu('img/2.jpg','Телятина, тушеная в томатном соусе',250,'С красным вином и специями с картофельным пюре со сливочным маслом','lunch');
        items[2] = new menu('img/3.jpg','Утиное филе',400,'С овощным гарниром и соусом из черной смородины','lunch');
        items[3] = new menu('img/4.jpg','Наполеон',150,'Приготовленный по домашнему рецепту с апельсиновым рагу','breakfast');
        items[4] = new menu('img/5.jpg','Блинчики со сливочно-сырной начинкой',150,'Под соусом из цельной спелой вишни','breakfast');
        items[5] = new menu('img/6.jpg','Брауни шоколадный',250,'С обжаренным грецким орехом','breakfast');
        items[6] = new menu('img/7.jpg','Салат с командорским кальмаром',300,'С овощами в пикантном соусе','dinner');
        items[7] = new menu('img/8.jpg','Цезарь',250,'С куриным филе, листьями салата романо и айсберг, соусом цезарь, сыром пармезан, чесночными сухариками, томатами черри и зеленью','dinner');
        items[8] = new menu('img/9.jpg','Салат слоеный с лососем слабого посола',350,'С творожным сыром, чесночком и хреном, овощами и лепестками миндаля на бородинском хлебе','dinner');
        items[9] = new menu('img/10.jpg','Цыпленок в луково-чесночном маринаде',350,'С картофелем фри и соусом барбекю','lunch');

    }
    container.addEventListener('click', e => {
        e.preventDefault();
        if(e.target && e.target.tagName == 'BUTTON'){
            switch (e.target.textContent){
                case 'Все':
                    clearMenuList();
                    showItems('',true);
                    break;
                case 'Завтрак':
                    clearMenuList();
                    showItems('breakfast',false);
                    break;
                case 'Обед':
                    clearMenuList();
                    showItems('lunch',false);
                    break;
                case 'Ужин':
                    clearMenuList();
                    showItems('dinner',false);
                    break;    
            }
        }
    });
    clearMenuList();
    initMenu();
    showItems('',true);
});
