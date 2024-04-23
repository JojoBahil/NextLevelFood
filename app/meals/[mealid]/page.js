export default function MyMeal({ params }) {
  return (
    <div>
      <h1>My Meal</h1>
      <p>My Meal ID is: {params.mealid}</p>
    </div>
  );
}
