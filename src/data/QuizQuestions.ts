const questionsData = {
  HTML: [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Trainer Marking Language',
        'Hyper Text Marketing Language',
        'Hyper Text Markup Language',
        'Hyper Text Markup Leveler',
      ],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which tag is used to create a hyperlink in HTML?',
      options: ['<link>', '<a>', '<href>', '<hyperlink>'],
      correctAnswer: '<a>',
    },
    {
      question: 'What is the purpose of the alt attribute in an <img> tag?',
      options: [
        'To specify the image source',
        'To provide alternative text for the image',
        'To set the image height',
        'To set the image width',
      ],
      correctAnswer: 'To provide alternative text for the image',
    },
    {
      question: 'Which HTML tag is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      correctAnswer: '<ul>',
    },
  ],
  CSS: [
    {
      question: 'What does CSS stand for?',
      options: [
        'Cascading Style Sheets',
        'Creative Style System',
        'Computer Style Sheets',
        'Colorful Style Sheets',
      ],
      correctAnswer: 'Cascading Style Sheets',
    },
    {
      question:
        'Which property is used to change the text color of an element?',
      options: ['font-color', 'text-color', 'color', 'font-style'],
      correctAnswer: 'color',
    },
    {
      question: 'How do you select an element with id "header" in CSS?',
      options: ['.header', '#header', 'header', '*header'],
      correctAnswer: '#header',
    },
    {
      question:
        'Which property is used to change the background color of an element?',
      options: ['background-color', 'color', 'bg-color', 'background-image'],
      correctAnswer: 'background-color',
    },
  ],
  JavaScript: [
    {
      question: 'What is JavaScript primarily used for?',
      options: [
        'Styling web pages',
        'Structuring web content',
        'Creating interactive web elements',
        'Designing web layouts',
      ],
      correctAnswer: 'Creating interactive web elements',
    },
    {
      question: 'Which keyword is used to declare a variable in JavaScript?',
      options: ['var', 'let', 'const', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    {
      question: 'What is the output of 2 + "2" in JavaScript?',
      options: ['4', '22', 'NaN', 'undefined'],
      correctAnswer: '22',
    },
    {
      question:
        'Which method is used to add an element at the end of an array in JavaScript?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correctAnswer: 'push()',
    },
  ],
  Accessibility: [
    {
      question: 'What is web accessibility?',
      options: [
        'Ensuring that a website is visually appealing',
        'Ensuring that a website can be accessed by everyone, including people with disabilities',
        'Ensuring that a website loads quickly',
        'Ensuring that a website is mobile-friendly',
      ],
      correctAnswer:
        'Ensuring that a website can be accessed by everyone, including people with disabilities',
    },
    {
      question: 'Which attribute is used to provide a label for form elements?',
      options: ['id', 'name', 'label', 'aria-label'],
      correctAnswer: 'aria-label',
    },
    {
      question: 'What does WCAG stand for?',
      options: [
        'Web Content Accessibility Guidelines',
        'Web Content Authoring Guidelines',
        'Web Communication Accessibility Guidelines',
        'Web Content Accessibility Group',
      ],
      correctAnswer: 'Web Content Accessibility Guidelines',
    },
    {
      question:
        'Which HTML element is used to define important text that screen readers will emphasize?',
      options: ['<strong>', '<em>', '<important>', '<highlight>'],
      correctAnswer: '<strong>',
    },
  ],
};

export default questionsData;
