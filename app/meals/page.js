import Link from "next/link"

export default function MealsPage(){
    return(
        <main>
            <h1>
                Meal Page
            </h1>
            <p>
            <Link href="meals/meal1">Meal 1</Link>
            </p>
            <p><Link href="meals/share">share</Link></p>
        </main>
    )
}