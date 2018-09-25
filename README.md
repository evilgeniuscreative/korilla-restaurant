[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Korilla React Receipts

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## Prerequisites

* React

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies (`npm install`).
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

Make a Receipt component that renders the following data from the first receipt:

- person
- order
    - main
    - protein
    - rice
    - sauce
    - drink
    - cost

**Optional:** render the toppings

Add the next two receipts to state and make two more `Receipt` components so that you get a view like this. Some css has been implemented already for you, take a look at class names in the various css files.

![korilla receipts rendered Mark](https://i.imgur.com/27V4KW8.png)


## Part 2: Conditionally Render the receipts if they have been paid or not

Right now, all the receipts are not paid.

Modify your render function in App.js to only render a component if the receipt has  been paid.

Then go into the receipt data and change a paid value to true, then verify that the receipt doesn't render.

## Part 3: Refactor for Dynamic Rendering

Obviously we don't want to have to modify our code every time we get a new receipt. Let's instead put all the receipt data in an array and then map over it to render the output.

Update your code so it renders the same, but instead of hard coding 3 receipts, it maps over the array. You still want the receipts to display if they're unpaid, and hide if they are paid.

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


## Part 4: Add receipts

Add a form that allows you to enter more receipts.
The form should have a field for each value, and a "submit" button which updates the state.

You have the choice between making the form fields [controlled components](https://reactjs.org/docs/forms.html) or [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html). There is no right answer. Look at both and see which one makes more sense.

Because there are a lot of fields, try to avoid making an event listener for each input individually. See if you can make one event listener handle all of them.

Note that the toppings field is an array. To save some complexity, limit yourself to 3 toppings, and therefore 3 fields.


## Bonus 1

Instead of harcoding the toppings fields and limiting yourself to 3, add some buttons that will increase and decrease the number of toppings fields. This will allow you to dynamically add an unlimited number of toppings!

## Bonus 2

Implement a search field that allows you to search by person. The search should automatically update as you type, hiding every receipt that doesn't match the name you're spelling out. It should display receipts that are both paid and not paid.

You'll have to research on your own to figure out how to approach this. 

Hint: Think about how the search will work. How do you make something happen when typing? What needs to happen? What values are you comparing?

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
