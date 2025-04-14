const data = {
    headerMenus: [
        {
            name: "Today's Deal",
            href: '/search?tag=todays-deal',
        },
        {
            name: 'New Arrivals',
            href: '/search?tag=new-arrival',
        },
        {
            name: 'Featured Products',
            href: '/search?tag=featured',
        },
        {
            name: 'Best Sellers',
            href: '/search?tag=best-seller',
        },
        {
            name: 'Browsing History',
            href: '/#browsing-history',
          },
        {
            name: 'Customer Service',
            href: '/page/customer-service',
        },
        {
            name: 'About Us',
            href: '/page/about-us',
        },
        {
            name: 'Help',
            href: '/page/help',
        },
    ],

    carousels: [
        {
            title: 'Most popular Rings for Sale',
            buttonCaption: 'Shop Now',
            image: '/images/banner2.jpg',
            url: '/search?category=Rings',
            isPublished: true,
        },
        {
            title: 'Best Sellers in Necklaces',
            buttonCaption: 'Shop Now',
            image: '/images/banner1.jpg',
            url: '/search?category=Necklaces',
            isPublished: true,
        },
        {
            title: 'Best Deals on Braclets',
            buttonCaption: 'Shop Now',
            image: '/images/banner3.jpg',
            url: '/search?category=Rings',
            isPublished: true,
        },
    ],


}

export default data