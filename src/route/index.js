// Підключаємо технологію express для back-end сервера
const express = require('express')
const { ids } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  person: {
    firstname: 'Taras',
    lastname: 'Shevchenko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ на місяць',
  address: '69104, m. Zaporizhzhya, prosp. Soborny`j, 100',
}

var footer = {
  social: {
    email: {
      text: 'taras@mail.com',
      href: 'mailto:taras@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
			experience in development. Whenever I start to
			work on a new project I learn the domain and try
			to understand the idea of the project. Good team
			player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
			different platforms ( odds ) and sport statistics
			( tournament position, goals etc), analyzing by
			simple mathematics models and preparing
			probability for such events like: money line -
			first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 7,
          isTop: false,
        },
        {
          name: 'Terminal & Git',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Photo',
          isMain: true,
        },
        {
          name: 'Reading',
          isMain: false,
        },
        {
          name: 'Collecting',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'University of Oxford',
          isEnd: true,
        },
        {
          name: 'University of Glasgow',
          isEnd: false,
        },
        {
          name: 'University of Cambridge',
          isEnd: false,
        },
        {
          name: 'University of Edinburgh',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'AWS Certified Developer - Associate',
          id: 10,
        },
        {
          name: 'Java Foundations',
          id: 15,
        },
        {
          name: 'CPA - C++ Certified Associate Programmer',
          id: 20,
        },
        {
          name: 'Certified Associate in Python Programming',
          id: 25,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IBM',
            url: 'https://ibm.com/',
          },
          duration: {
            from: '01.01.2020',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Lorem ipsum dolor sit.',
              stackAmount: 4,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Lorem, ipsum.',
                },
                {
                  name: 'LLorem, ipsum dolor.',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
