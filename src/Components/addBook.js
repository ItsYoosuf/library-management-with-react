import React, { useState, useEffect, useRef } from 'react';
import '../Assets/styles/addbook.css';
const AddBook = () => {
  const [genre, setGenre] = useState('');
  const genreSelect = useRef(null);
  const subgenreSelect = useRef(null);

  useEffect(() => {
    const addOption = () => {
      const selectedGenre = genreSelect.current.value;
      console.log(selectedGenre);
      while (subgenreSelect.current.options.length > 1) {
        subgenreSelect.current.remove(1);
      }
      if (selectedGenre === "Fiction") {
        const fictionOptions = ["Romance", "Thriller", "Mystery", "Science Fiction", "Fantasy", "Others"];
        fictionOptions.forEach((option) => {
          const newOption = document.createElement('option');
          newOption.value = option;
          newOption.text = option;
          subgenreSelect.current.add(newOption);
        });
      } else if (selectedGenre === "Non-Fiction") {
        const nonFictionOptions = ["Biography", "Self-Help", "History", "Science", "Travel", "Others"];
        nonFictionOptions.forEach((option) => {
          const newOption = document.createElement('option');
          newOption.value = option;
          newOption.text = option;
          subgenreSelect.current.add(newOption);
        });
      }
    };

    genreSelect.current.addEventListener('change', addOption);

    return () => {
      genreSelect.current.removeEventListener('change', addOption);
    };
  }, []);

  return (
    <>
      <div className="container">
        <form id="book-form" className="mainforms" autoComplete="off">
          <h2>Add Book</h2>
          <label htmlFor="title">Title:<span className="Warning">This field is required</span></label>
          <input type="text" id="title" name="title" /><br /><br />
          <label htmlFor="author">Author:<span className="Warning">This field is required</span></label>
          <input type="text" id="author" name="author" /><br /><br />
          <label htmlFor="maingenre">Genre:<span className="Warning">This field is required</span></label>
          <select onChange={(e) => setGenre(e.target.value)} id="maingenre" ref={genreSelect}>
            <option value="" disabled selected>Select your option</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select><br /><br />
          <label htmlFor="subgenre">Subgenre:<span className="Warning">This field is required</span></label>
          <select id="subgenre" ref={subgenreSelect}>
            <option value="" disabled selected>Select your option</option>
          </select><br /><br />
          <label htmlFor="isbn">ISBN:<span className="Warning">This field is required</span></label>
          <input type="text" id="isbn" name="isbn" /><br /><br />
          <label htmlFor="publication-year">Publication Year:<span className="Warning">This field is required</span></label>
          <input type="number" id="publication-year" name="publication-year" /><br /><br />
          <label htmlFor="publisher">Publisher:<span className="Warning">This field is required</span></label>
          <input type="text" id="publisher" name="publisher" required /><br /><br />
          <label htmlFor="pages">Pages:<span className="Warning">This field is required</span></label>
          <input type="number" id="pages" name="pages" /><br /><br />
          <label htmlFor="description">Description:<span className="Warning">This field is required</span></label>
          <textarea id="description" name="description"></textarea><br /><br />
          <button id="submit-book">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
