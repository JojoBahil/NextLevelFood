import Link from "next/link";

export default function MealPage() {
  return (
    <div>
      <h1>Meals</h1>
      <p>
        <Link href="./meals/share">Share this Meal</Link>
      </p>
      <p>
        <Link href="./meals/1">Meal With ID 1</Link>
      </p>
      <p>
        <Link href="./meals/2">Meal With ID 2</Link>
      </p>
    </div>
  );
}
