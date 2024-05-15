import { Suspense } from "react";
import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals"; // getMeals will contain the data from backend

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our community",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourselft. It is easy and fun!
        </p>
        <p className={style.cta}>
          <Link href="meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        <Suspense fallback={<p className={style.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
