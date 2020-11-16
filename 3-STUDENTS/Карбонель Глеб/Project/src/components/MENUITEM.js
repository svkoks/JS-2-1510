let topMenuItems = [
    {
        name: 'Home',
        href: 'product.html'
    },
    {
        name: 'Man',
        href: 'product.html'
    },
    {
        name: 'Women',
        href: 'product.html'
    },
    {
        name: 'Kids',
        href: 'product.html'
    },
    {
        name: 'Accessories',
        href: 'product.html'
    },
    {
        name: 'Featured',
        href: 'product.html'
    },
    {
        name: 'Hot Deals',
        href: 'product.html'
    }

];

let footerMenuItems = [
    {
        heading: 'company',
        name: ['Home', 'SHOP', 'About', 'How It Works', 'Contact'],
        href: '#'
    },
    {
        heading: 'information',
        name: ['Terms and Conditions', 'Privacy Polocy', 'How to Buy', 'How to Sell', 'Promotion'],
        href: '#'
    },
    {
        heading: 'shop category',
        name: ['Men', 'Women', 'Child', 'Apparel', 'Browse All'],
        href: '#'
    }
];

export class MenuItem{
    render(type){
        let addItem = '';
        if (type === 'main') {
            topMenuItems.forEach((item) => {
                addItem += `<a href="${item.href}">${item.name}</a>`;
            });
            return addItem;
        } else {
            footerMenuItems.forEach((item) => {
                addItem += `
                    <div class="footer-menu__right-item">
                        <h3>${item.heading}</h3>
                        <a href=${item.href}>${item.name[0]}</a>
                        <a href=${item.href}>${item.name[1]}</a>
                        <a href=${item.href}>${item.name[2]}</a>
                        <a href=${item.href}>${item.name[3]}</a>
                        <a href=${item.href}>${item.name[4]}</a>
                    </div>
                `;
            });
            return addItem;
        }
    }
}