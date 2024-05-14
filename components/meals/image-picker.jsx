'use client';
import React, { Fragment, useRef, useState } from 'react'
import Image from 'next/image';
import classes from './image-picker.module.css'

function ImagePicker({ label, name }) {
    const imageInputRef = useRef()
    const [pickedImage, setPickedImage] = useState(null)

    const handleImagePic = () => {
        imageInputRef.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if (!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return (
        <Fragment>
            <div className={classes.picker}>
                <label htmlFor={name}>{label}</label>
                <div className={classes.controls}>
                    <div className={classes.preview}>
                        {pickedImage ? <Image src={pickedImage} alt='Selected Image' fill /> : null}
                    </div>
                    <input
                        id={name}
                        type="file"
                        name={name}
                        // multiple
                        required
                        ref={imageInputRef}
                        className={classes.input}
                        onChange={handleImageChange}
                        accept="image/png, image/jpeg"
                    />
                    <button
                        type="button"
                        onClick={handleImagePic}
                        className={classes.button}
                    >
                        Pic an image
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default ImagePicker;