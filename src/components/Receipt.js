import React from "react";

export default function Receipt({ receipt, handleClick }) {
  return (
    <article
      className='receipt'
      key={receipt.id}
      onClick={() => {
        handleClick(receipt.id);
      }}
    >
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
        <div>
          <strong>Toppings:</strong>
          <ul className='toppings'>
            {receipt.order.toppings.map((topping) => {
              return <li key={Math.random() * 55}> {topping}</li>;
            })}
          </ul>
        </div>
        <p>
          <strong>Drink:</strong> {receipt.order.drink}
        </p>
        <p>
          <strong>Cost:</strong> ${receipt.order.cost}
        </p>
        <p>
          <strong>Paid:</strong> {receipt.paid ? <span className='yes'>Yes</span> : <span className='no'>No</span>}
        </p>
      </section>
    </article>
  );
}
