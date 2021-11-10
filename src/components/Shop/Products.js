import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestias cum minus distinctio quo eum saepe, a et, modi numquam dicta cumque amet pariatur facilis dolorum deleniti autem nesciunt! Repellat, voluptatem, quis, voluptas nostrum necessitatibus aliquam labore dolorum non inventore provident dolores aliquid nulla sapiente magnam est? Aliquid, nesciunt natus saepe error, soluta officia animi veniam ipsam, quia earum labore ad quae! Voluptatum neque odio amet deserunt? Dolore tempora numquam dolorum inventore aut tenetur dignissimos! Eveniet maiores aspernatur molestiae. Fugit, ullam. Recusandae soluta, atque deleniti placeat neque nisi quibusdam, iusto praesentium mollitia tempore rerum, incidunt repellendus iste. Provident, dolorem esse!',
  },
  {
    id: 'p2',
    price: 9,
    title: 'My second book',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo qui labore nobis commodi consequatur maiores. Mollitia beatae fuga laboriosam explicabo vitae omnis minus ab iure quam vel, ex temporibus facere totam modi blanditiis perferendis esse excepturi similique dolores voluptates, at aliquid amet. Architecto consequatur eligendi rem temporibus nesciunt minus.',
  },
  {
    id: 'p3',
    price: 3,
    title: 'My third book',
    description: 'The third book I ever wrote',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
