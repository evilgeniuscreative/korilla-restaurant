import React from "react";

export default function Receipt({ id, person, order, paid }) {
  return (
    <article className='receipt'>
      <header>
        <h2>
          <strong>Guest: </strong>
          {person} {id}
        </h2>
      </header>
      <section>
        <p>
          <strong>Main:</strong> {order.main}
        </p>
        <p>
          <strong> Protein:</strong> {order.protein}
        </p>
        <p>
          <strong>Rice:</strong> {order.rice}
        </p>
        <p>
          <strong>Sauce:</strong> {order.sauce}
        </p>
        <p>
          <strong>Toppings:</strong>
          <ul className='toppings'>
            {order.toppings.map((topping) => {
              return <li> {topping}</li>;
            })}
          </ul>
        </p>
        <p>
          <strong>Drink:</strong> {order.drink}
        </p>
        <p>
          <strong>Cost:</strong> ${order.cost}
        </p>
        <p>
          <strong>Paid:</strong> {paid}
        </p>
      </section>
    </article>
  );
}
