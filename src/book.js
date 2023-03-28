const Book = (props) => {
    const { img, title, author } = props;
  
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        {/* this is not going to work */}
        <h4>{author}</h4>
      </article>
    );
  };

export default Book;