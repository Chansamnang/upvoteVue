

const submissions = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction and expertise.',
        url: '#',
        vote: 16,
        avatar: 'img/pf1.jpeg',
        submissionImage: 'img/bg1.jpg',
    },
    // {
    //     id: 2,
    //     title: 'Tinfoild: Tailored tinfoil hats',
    //     description: 'We have your measurements and shipping address.',
    //     url: '#',
    //     vote: 4,
    //     avatar: 'img/pf2.jpeg',
    //     submissionImage: 'img/bg2.jpg',
    // },
    // {
    //     id: 3,
    //     title: 'Supermajority: The fantasty Congress League',
    //     description: 'Earn points when your favourite politicians pass legislation.',
    //     url: '#',
    //     vote: 10,
    //     avatar: 'img/pf3.jpeg',
    //     submissionImage: 'img/bg3.jpeg',
    // },
    // {
    //     id: 4,
    //     title: 'Haught or Naught',
    //     description: 'High-minded or absent-minded? You decide.',
    //     url: '#',
    //     vote: 5,
    //     avatar: 'img/pf4.jpeg',
    //     submissionImage: 'img/bg4.jpg',
    // }
];
let app = new Vue({
    el: '#app',
    data: {
        submissions: submissions,
    },
    methods: {

    }

});