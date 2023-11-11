import React from "react";

export default function Receipt({ receipt }) {
  return (
    <article className='receipt'>
      <header>
        <h2>
          <span>Guest:</span>
          {receipt.person}
        </h2>
        <p className='visit'>Visit: {receipt.id}</p>
      </header>
      <section>
        <p>
          <strong>Main:</strong> {receipt.order.main}
        </p>
        <p>
          <strong> Protein:</strong> {receipt.order.protein}
        </p>
        <p>
          <strong>Rice:</strong> {receipt.order.rice}
        </p>
        <p>
          <strong>Sauce:</strong> {receipt.order.sauce}
        </p>
        <p>
          <strong>Toppings:</strong>
          <ul className='toppings'>
            {receipt.order.toppings.map((topping) => {
              return <li> {topping}</li>;
            })}
          </ul>
        </p>
        <p>
          <strong>Drink:</strong> {receipt.order.drink}
        </p>
        <p>
          <strong>Cost:</strong> ${receipt.order.cost}
        </p>
        <p>
          <strong>Paid:</strong> {receipt.paid}
        </p>
      </section>
    </article>
  );
}
