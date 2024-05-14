'use server';

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

function isInvalidText(text) {
    return !text || text.trim() === ""
}

export async function shareMeal(prevState, formData) {

    const payload = {
        image: formData.get("image"),
        title: formData.get("title"), // Here "title" is input field name
        creator: formData.get("name"),
        summary: formData.get("summary"),
        creator_email: formData.get("email"),
        instructions: formData.get("instructions"),
    }
    if (
        isInvalidText(payload.title) ||
        isInvalidText(payload.summary) ||
        isInvalidText(payload.creator) ||
        isInvalidText(payload.creator_email) ||
        !payload.creator_email.includes("@") ||
        !payload.image || payload.image.size === 0
    ) {
        // throw new Error("Invalid Input")
        return {
            message: "Invalid Input"
        }
    }

    await saveMeal(payload)
    // revalidatePath("/", "layout"); // Complete App Centered
    revalidatePath("/meals", "layout"); // Page Centered
    redirect("/meals");
}

// For Production Building :::
// Next JS Follows Aggrasive Caching, Because Of That It Only Renders All Pre-build Components.
// If New Component Is Added (i.e. "slug"), It Will Ignore That.
// To Solve This Issue We Have "revalidatePath".
//=> "revalidatePath" It Has 2 Arguments 01) path 02) "page"(Will Only Render That Path Page) Or "layout"(Will Render All Page Related TO That Path)