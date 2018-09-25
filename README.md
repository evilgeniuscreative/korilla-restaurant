[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Korilla React Receipts

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.
Use this template to structure your READMEs for labs.

## Prerequisites

* React

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

## Requirements

Follow the walkthrough and finish all parts. If you have extra time, finish the bonus as well.

## Part 1: Sample Receipts

You'll be rendering some sample receipts:

```js
const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: false
}

```

- Add the first receipt to the state of the app:

```js
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = receipt1
  }
  //...
}
```

Make a Receipt component that renders the first receipt's:

- person
- order
    - main
    - protein
    - rice
    - sauce
    - drink
    - cost

**Optional:** render the toppings

Add the next two receipts to state and make two more `Receipt` components so that you get a view like this (some css has been implemented already for you)

![korilla receipts rendered Mark](https://i.imgur.com/27V4KW8.png)


## Part 2: Conditionally Render the receipts if they have been paid or not

Right now, all the receipts are not paid.

Modify your render function in App.js to only render a component if the receipt has  been paid.

Then go into the receipt data and change a paid value to true, then verify that the receipt doesn't render.

## Part 3: Refactor for Dynamic Rendering

Obviously we don't want to have to modify our code every time we get a new receipt. Let's instead put all the receipt data in an array and then map over it to render the output.

Update your code so it renders the same, but instead of hard coding 3 receipts, it maps over the array.

<details>
  <summary>
  Receipt data in an array
  </summary>

```js
const receipts = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
]
```

</details>

## Bonus

Add a click event on the receipt that changes the value of paid from false to true. Once clicked the receipt should immediately disappear from the browser view.

You'll have to research on your own...

How do you style react components, programmatically, from within react?

[A nice place to start](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)

But also, [why style components...rather than use a good old css file?](https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)


## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
