'use client';

import classes from './page.module.css';
import { useFormState } from 'react-dom'

import { shareMeal } from '@/lib/actions';
import ImagePicker from '@/components/meals/image-picker';
import MealsFormButton from '@/components/meals/meals-form-submit-button';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null })


  // async function shareMeal(formData) {
  //   'use server';

  //   const payload = {
  //     image: formData.get("image"),
  //     title: formData.get("title"), // Here "title" is input field name
  //     creator: formData.get("name"),
  //     summary: formData.get("summary"),
  //     creator_email: formData.get("email"),
  //     instructions: formData.get("instructions"),
  //   }
  //   console.log("payload", payload);
  // }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* Send To rect Server ::: */}
        {/* <form className={classes.form} action={shareMeal}> */}
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label={"Your Image"} name={"image"} />
          {state.message && <p style={{ fontSize: "20px", color: "red" }}>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormButton />
          </p>
        </form>
      </main>
    </>
  );
}