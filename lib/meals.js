import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql("meals.db") // Passing Name OF Data Base

// Function to get all meals:::
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new Error("Meal Loading Failed !")
    return db.prepare("SELECT * FROM meals").all()
}

// Function to get meal by ID:::
export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// To save new meals:::

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true }) // To be in lower case
    meal.instructions = xss(meal.instructions) // TO senetize and clean instructions

    // Image Storing In Publing Folder
    const extension = meal.image.name.split(".").pop()
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) throw new Error("Saving Image Failed")
    })

    meal.image = `/images/${fileName}`

    db.prepare(`
    INSERT INTO meals
       (slug, title, image, summary, instructions, creator, creator_email)
       VALUES(
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
       )
    `).run(meal)
}